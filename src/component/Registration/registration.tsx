import React, {useEffect} from 'react';
import cl from './registration.module.scss';
import * as firebase from "firebase";
import {useDispatch} from "react-redux";
import { registrationTC} from "../../1bll/loginReduser";

export function Registration() {
    const dispatch = useDispatch();
    useEffect(
        () => {
            const db = firebase.default.database()
            console.log(db);
        }, []
    )
    // const bd = firebase.database
    let arDataValues = ['test1@mail.ru', 'password']
    let email = 'test@mail.ru';
    let pass = 'password';
    //create promise
    const createAk = () => {
        // firebase.default.auth().createUserWithEmailAndPassword(email,pass)
        //     .catch(error=>alert(error))
        // firebase.default.auth().isSignInWithEmailLink(email)
        dispatch(registrationTC(email,pass))
    }
    return (
        <div className={cl.login}>
            <h6>registration</h6>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <input type="submit" value='send' onClick={createAk}/>

        </div>
    )
}

//npm i firebase