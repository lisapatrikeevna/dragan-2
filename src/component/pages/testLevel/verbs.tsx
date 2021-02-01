import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import verbs from './verbs.json'
import cl from './TestLevel.module.scss'
import {AppRootStateType} from "../../../1bll/store"
import {askVerbsType, getVerbsAC, objV, setStatusVerbAC} from "../../../1bll/levelReducer"
import Word from "./word";

const Verbs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let payload: Array<objV> = verbs.verbs
        dispatch(getVerbsAC(payload))
    }, [dispatch])
    let verbsAll = useSelector<AppRootStateType, askVerbsType[]>(state => state.setLevel.askVerbs)
    // useEffect(() => {
    // if (error.text !== '') {
    //     console.log("if(error.text!=='')");
    //     dispatch(setStatusVerbAC(error.id))
    // }
    // }, [dispatch])
    const verb = verbsAll.map(v => <Word id={v.id} ask={v.ask} status={v.status} answer={v.answer}
                                         placeholder='write the wrong form' changeStatus={changeStatus}/>)
    const changeStatus = (id:number) => {
        dispatch(setStatusVerbAC(id))
    }
    return (
        <div className={cl.wrapVerbs}>
            {verb}
        </div>
    );
};

export default Verbs;