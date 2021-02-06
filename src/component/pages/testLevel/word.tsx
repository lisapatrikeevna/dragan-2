import React, {ChangeEvent, useEffect, useState} from 'react'
import cl from './TestLevel.module.scss'
import {setStatusVerbAC} from "../../../1bll/levelReducer";
import {useDispatch} from "react-redux";
import {Button, Input} from "semantic-ui-react";

type propsType = {
    id: number
    ask: string
    placeholder?: string
    translate?: string
    status: boolean
    right:boolean
    answer: string
    changeStatus:(id:number,right:boolean)=>void
}
const Word = (props: propsType) => {
    let [tryAnswer, setTryAnswer] = useState('')
    let [error, setError] = useState('')

    const chaneStatus = () =>{
        if (error !== '') {
            props.changeStatus(props.id, true)
            setTimeout(()=>{
               // setError('')
                setTryAnswer('')
            },7000)
        }else{
            props.changeStatus(props.id, false)
           // setError('')
            setTryAnswer('')
        }
    }

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        if ((e.currentTarget.value).trim()) {
            setTryAnswer(e.currentTarget.value)
        }
    }
    const onTest = () => {
        if (tryAnswer.trim() !== '') {
            if(props.answer === tryAnswer) {
                setTryAnswer('')
                chaneStatus()
            } else{
                setError(props.answer)
                chaneStatus()
            }
        } else {
            alert('enter you answer')
        }
    }
    const throwError = props.right || error !== ''
    const disable= props.status &&  true
    return (
        <div key={props.id} className={`${cl.itemVerb}  ${throwError ? cl.errorWr : ''} ${props.status && cl.status}`} >
            <p>ask: {props.ask}</p>
            {props.translate && <p>translated: {props.translate}</p>}
            {/*<p>status: {(props.status).toString()}</p>*/}

            <Input type="text" value={tryAnswer} onChange={onChangeText} placeholder={props.placeholder} disabled={disable}/>
            {/*<button onClick={onTest}>check</button>*/}
            <div className={cl.blockBtn}>
            <Button color='red' content='check' icon='eject' onClick={onTest}
                   //label={{  color: 'red', pointing: 'left', content:`answer: ${error}` }}/>
                    label={{  color: 'red', pointing: 'left', content:`answer: ${error}` }}/>
            {/*<p>{error && <p>answer: {error}</p>}</p>*/}
            </div>
        </div>
    );
};

export default Word;