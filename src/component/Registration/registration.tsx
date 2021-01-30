import React, {useEffect, useState} from 'react';
import cl from './registration.module.scss';
import * as firebase from "firebase";
import {useDispatch} from "react-redux";
import { registrationTC} from "../../1bll/loginReduser";
import {Input} from "../../common/validateInput/inputValidate";
import {validate} from "../../common/validateInput/Validate";

type propsType={
    onCansel:()=>void
}
export function Registration(props:propsType) {
    const dispatch = useDispatch();

    let [email, setEmail] = useState<string>('' )
    let [password, setPassword] = useState<string>('' )
    const addEmailValue = (email:string)=>{setEmail(email)}
    const addPasswordValue = (password:string)=>{setPassword(password)}
    const createAk = () => {
        // firebase.default.auth().createUserWithEmailAndPassword(email,pass)
        //     .catch(error=>alert(error))
        // firebase.default.auth().isSignInWithEmailLink(email)
        debugger
        dispatch(registrationTC(email,password))
        setEmail('')
        setPassword('')
        setTimeout(()=>{props.onCansel()},2000)
    }
    return (
        <div className={cl.login}>
            <h6>registration</h6>
            <Input type={'email'} placeholder={'email'} name={'email'} validate={validate}
                   addInputValue={addEmailValue}/>
            <Input type={'password'} placeholder={'password'} name={'password'} validate={validate}
                   addInputValue={addPasswordValue}/>
            <input type="submit" value='send' onClick={createAk}/>

        </div>
    )
}

//npm i firebase