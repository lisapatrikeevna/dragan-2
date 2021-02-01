import React, {useEffect} from 'react';
import {Footer} from "./component/footer/Footer";
import * as firebase from 'firebase';
import MenuExampleAttached from './component/header/Header';
import MainPage from "./component/pages/mainPage/MainPage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./1bll/store";
import {Redirect, Route } from 'react-router-dom';
import UserPage from "./component/pages/userPage/userPage";
import IndividualPage from "./component/pages/individualPage/individualPage";
import TestLevel from "./component/pages/testLevel/testLevel";

function App() {
    useEffect(
        () => {
            // const bd = firebase.default.database()
            // console.log(bd);
            // const info = firebase.default.GetAccountInfo()
            // console.log(info);
        }, []
    )

        let userStatus = useSelector<AppRootStateType,boolean>(state => state.login.status)


    return (
        <div className="App">
            <MenuExampleAttached userStatus={userStatus}/>
            {/*<Route path={"/login"} render={() => <Registration/>}/>*/}
            {/*<Route path={"/registration"} render={() => <Registration/>}/>*/}
            {/*{!userStatus && <MainPage/>}*/}
            <Route path={'/'} exact render={() => <Redirect to='/MainPage'/>}/>
            <Route path={'/mainPage'} render={() => <MainPage/>}/>
            <Route path={'/userPage'} render={() => <UserPage/>}/>
            <Route path={'/testLevel'} render={() => <TestLevel/>}/>
            <Route path={'/individualPage'} render={() => <IndividualPage/>}/>
            <Footer/>
        </div>
    );
}

export default App;
