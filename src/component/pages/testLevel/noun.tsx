import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import noun from './verbs.json'
import cl from './TestLevel.module.scss'
import {AppRootStateType} from "../../../1bll/store"
import {askNounsType, getNounsAC, objN, setStatusVerbAC} from "../../../1bll/levelReducer"
import Word from "./word";

const Noun = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let payload: Array<objN> = noun.noun
        dispatch(getNounsAC(payload))
    }, [dispatch])
    let nounsAll = useSelector<AppRootStateType, askNounsType[]>(state => state.setLevel.askNouns)
    const changeStatus = (id:number) => {
        dispatch(setStatusVerbAC(id))
    }
    const words = nounsAll.map(v => <Word id={v.id} ask={v.ask} status={v.status} answer={v.answer}
                                          placeholder='write the wrong form' changeStatus={changeStatus}/>)
    return (
        <div className={cl.wrapWords}>
            {words}
        </div>
    );
};

export default Noun;