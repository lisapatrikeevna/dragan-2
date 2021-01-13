import React, {useEffect} from 'react';
import './App.css';
import {Offer} from "./component/section/Offer/Offer";
import {Level} from "./component/section/Level/Level";
import {Individual} from "./component/section/Individual/Individual";
import {Collective} from "./component/section/Collective/Collective";
import {Redirect, Route} from 'react-router-dom';
import {Form} from "./common/Form";
import {Footer} from "./component/footer/Footer";
import {Reviews} from "./component/section/Reviews/Reviews";
import * as firebase from 'firebase';
import MenuExampleAttached from './component/header/Header';
import MainPage from "./component/mainPage/MainPage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./1bll/store";
import { Registration } from './component/Registration/registration';

function App() {
    useEffect(
        () => {
            const bd = firebase.default.database()
            console.log(bd);
        }, []
    )

    let userStatus = useSelector<AppRootStateType,boolean>(state => state.logon.status)
    // useEffect(()=>{},[userStatus])
    // const bd = firebase.database
//     service cloud.firestore {
//         match /databases/{database}/documents {
//         // Make sure the uid of the requesting user matches name of the user
//         // document. The wildcard expression {userId} makes the userId variable
//         // available in rules.
//         match /users/{userId} {
//             allow read, update, delete: if request.auth != null && request.auth.uid == userId;
//             allow create: if request.auth != null;
//         }
//     }
// }
//     if(!userStatus){ <Redirect to={'/MainPage'}/>}
    return (
        <div className="App">
            <MenuExampleAttached userStatus={userStatus}/>
            {/*<Route path={"/login"} render={() => <Registration/>}/>*/}
            {/*<Route path={"/registration"} render={() => <Registration/>}/>*/}
            {!userStatus && <MainPage/>}

            <Footer/>
        </div>
    );
}

export default App;
