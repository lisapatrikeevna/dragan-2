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
        const changeStatus = (id:number,right:boolean) => {
        debugger
            dispatch(setStatusVerbAC({id, right}))
        }
    const verb = verbsAll.map(v => <Word key={v.id} id={v.id} ask={v.ask} status={v.status} answer={v.answer} translate={v.translate}
                                         placeholder='write the wrong form' changeStatus={changeStatus} right={v.right}/>)

    return (
        <div className={cl.wrapVerbs}>
            {verb}
        </div>
    );
};

export default Verbs;