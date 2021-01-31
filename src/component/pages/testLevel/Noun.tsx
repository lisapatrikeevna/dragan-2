import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import noun from './verbs.json'
import cl from './TestLevel.module.scss'
import {AppRootStateType} from "../../../1bll/store"
import {askNounsType, getNounsAC,  objN} from "../../../1bll/levelReducer"

const Noun = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let payload: Array<objN> = noun.noun
        dispatch(getNounsAC(payload))
    }, [dispatch])
    let nounsAll = useSelector<AppRootStateType, askNounsType[]>(state => state.setLevel.askNouns)
    let [tryAnswer, setTryAnswer] = useState({id:0,text:''})
    let [error, setError] = useState({id:0,text:''})

    const words = nounsAll.map(v => {
            const onChangeText=(e: ChangeEvent<HTMLInputElement>) => {
                if((e.currentTarget.value).trim()) {
                    setTryAnswer({id: +v.id, text: e.currentTarget.value})
                }
            }
            const onTest = () => {
                v.answer === tryAnswer.text ?
                    setTryAnswer({id: 0, text: ''})
                    : setError({id: +v.id, text: v.answer})
            }
            const throwError = error.id===v.id && error.text !== ''
            return (
                <div key={v.id} className={`${cl.itemVerb}  ${throwError? cl.errorWr : ''}`}>
                    <p>ask: {v.ask}</p>
                    <input type="text" value={tryAnswer.id===v.id? tryAnswer.text: ''} onChange={onChangeText}/>
                    <button onClick={onTest}>check</button>
                    <p>{error.id===v.id && <p>answer: {error.text}</p>}</p>
                </div>
            )
        }
    )

    return (

            <div className={cl.wrapWords}>
                {words}
            </div>
    );
};

export default Noun;