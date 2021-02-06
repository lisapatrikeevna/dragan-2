import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import verbs from './verbs.json'
import cl from './TestLevel.module.scss'
import {AppRootStateType} from "../../../1bll/store"
import {askVerbsType, getVerbsAC, objV, setStatusVerbAC} from "../../../1bll/levelReducer"

const VerbsOld = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let payload: Array<objV> = verbs.verbs
        dispatch(getVerbsAC(payload))
    }, [dispatch])
    let verbsAll = useSelector<AppRootStateType, askVerbsType[]>(state => state.setLevel.askVerbs)
    let [tryAnswer, setTryAnswer] = useState({id: 0, text: ''})
    let [error, setError] = useState({id: 0, text: ''})
    // useEffect(() => {
    // if (error.text !== '') {
    //     console.log("if(error.text!=='')");
    //     dispatch(setStatusVerbAC(error.id))
    // }
    // }, [dispatch])
    const verb = verbsAll.map(v => {
            const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
                if ((e.currentTarget.value).trim()) {
                    setTryAnswer({id: +v.id, text: e.currentTarget.value})
                }
            }
            const onTest = () => {
                if(tryAnswer.text.trim() !== '') {
                    v.answer === tryAnswer.text ?
                        setTryAnswer({id: 0, text: ''})
                        : setError({id: +v.id, text: v.answer})
                }else {alert('enter you answer')}

            }
            const throwError = v.status || error.id === v.id && error.text !== ''
            return (
                <div key={v.id} className={`${cl.itemVerb}  ${throwError ? cl.errorWr : ''}`}>
                    <p>ask: {v.ask}</p>
                    <p>translated: {v.translate}</p>
                    <p>status: {(v.status).toString()}</p>
                    <input type="text" value={tryAnswer.id === v.id ? tryAnswer.text : ''} onChange={onChangeText}/>
                    <button onClick={onTest}>check</button>
                    <p>{error.id === v.id && <p>answer: {error.text}</p>}</p>
                </div>
            )
        }
    )

    return (
        <div className={cl.wrapVerbs}>
            {verb}
        </div>
    );
};

export default VerbsOld;