import React, {useEffect} from 'react';
import cl from './login.module.scss';
import * as firebase from "firebase";
import {useDispatch} from "react-redux";
import {loginTC} from "../../1bll/loginReduser";

export function Login() {
    const dispatch = useDispatch();
    // useEffect(
    //     () => {
    //         const db = firebase.default.database()
    //         console.log(db);
    //     }, []
    // )
    // const bd = firebase.database
    // let arDataValues = ['test1@mail.ru', 'password']
    let email = 'test@mail.ru';
    let pass = 'password';
    let ppp= [email,pass]
    const loginAk = () => {
        // dispatch(loginTC(email,pass))
        alert(ppp)
    }
    return (
        <div className={cl.login}>
            <h6>login</h6>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <input type="submit" value='send' onClick={loginAk}/>

        </div>
    )
}

//npm i firebase