import React, {ChangeEvent, useEffect, useState} from 'react'
import cl from './TestLevel.module.scss'
import {setStatusVerbAC} from "../../../1bll/levelReducer";
import {useDispatch} from "react-redux";

type propsType = {
    id: number
    ask: string
    placeholder?: string
    translate?: string
    status: boolean
    answer: string
    changeStatus:(id:number)=>void
}
const Word = (props: propsType) => {
    const dispatch = useDispatch()
    let [tryAnswer, setTryAnswer] = useState('')
    let [error, setError] = useState('')

        if (error !== '') {
            console.log("if(error.text!=='')");
           props.changeStatus(props.id)
        }

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        if ((e.currentTarget.value).trim()) {
            setTryAnswer(e.currentTarget.value)
        }
    }
    const onTest = () => {
        if (tryAnswer.trim() !== '') {
            props.answer === tryAnswer ?
                setTryAnswer('')
                : setError(props.answer)
        } else {
            alert('enter you answer')
        }
    }
    const throwError = props.status && error !== ''
    return (
        <div key={props.id} className={`${cl.itemVerb}  ${throwError ? cl.errorWr : ''}`}>
            <p>ask: {props.ask}</p>
            <p>translated: {props.translate}</p>
            <p>status: {(props.status).toString()}</p>
            <input type="text" value={tryAnswer} onChange={onChangeText} placeholder={props.placeholder}/>
            <button onClick={onTest}>check</button>
            <p>{error && <p>answer: {error}</p>}</p>
        </div>
    );
};

export default Word;