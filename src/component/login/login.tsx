import React, {useEffect, useState} from 'react';
import cl from './login.module.scss';
import * as firebase from "firebase";
import {useDispatch} from "react-redux";
import {loginTC} from "../../1bll/loginReduser";
import {Input} from "../../common/validateInput/inputValidate";
import {validate} from "../../common/validateInput/Validate";

export function Login() {
    const dispatch = useDispatch();
    // useEffect(
    //     () => {
    //         const db = firebase.default.GetAccountInfo()
    //         console.log(db);
    //     }, []
    // )
    // const bd = firebase.database
    // let arDataValues = ['test1@mail.ru', 'password']
    // let email = 'test@mail.ru';
    // let password = 'password';
    let [email, setEmail] = useState<string>('' )
    let [password, setPassword] = useState<string>('' )
    const addEmailValue = (email:string)=>{setEmail(email)}
    const addPasswordValue = (password:string)=>{setPassword(password)}

    const loginAk = () => {
        dispatch(loginTC(email,password))
        setEmail('')
        setPassword('')
    }
    //достать idUser!!!!
    return (
        <div className={cl.login}>
            <h6>login</h6>
            <form name={'login'}>
                <Input type={'email'} placeholder={'email'} name={'email'} validate={validate}
                       addInputValue={addEmailValue}/>
                <Input type={'password'} placeholder={'password'} name={'password'} validate={validate}
                       addInputValue={addPasswordValue}/>
                <input type="submit" value='send' onClick={loginAk}/>
            </form>


        </div>
    )
}

//npm i firebase