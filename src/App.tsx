import React, {useEffect} from 'react';
import {Footer} from "./component/footer/Footer";
import * as firebase from 'firebase';
import MenuExampleAttached from './component/header/Header';
import MainPage from "./component/pages/mainPage/MainPage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./1bll/store";
import {Redirect, Route, Switch} from 'react-router-dom';
import UserPage from "./component/pages/userPage/userPage";
import CollectivePage from "./component/pages/collectivePage/collectivePage";
import TestLevel from "./component/pages/testLevel/testLevel";


export const PATH = {
    HOME: '/mainPage',
    PROFILE: "/userPage",
    ERROR404: "/404",
    // PASS_RECOVERY: "/testLevel",
    // PASS_NEW: "/entering-new-password/:token",
    TEST: "/testLevel",
    COLLECTIVE: "/collectivePage",
}

function App() {
    useEffect(
        () => {
            const bd = firebase.default.database()
            console.log(bd);
           // const info = firebase.default.GetAccountInfo()
          //  console.log(info);
        }, []
    )
    let userStatus = useSelector<AppRootStateType, boolean>(state => state.login.status)


    return (
        <div className="App">
            <MenuExampleAttached userStatus={userStatus}/>
            <Switch>
            {/*<Route path={"/login"} render={() => <Registration/>}/>*/}
            {/*<Route path={"/registration"} render={() => <Registration/>}/>*/}
            {/*{!userStatus && <MainPage/>}*/}
            <Route path={'/'} exact render={() => <Redirect to='/MainPage'/>}/>
            <Route path={PATH.HOME} render={() => <MainPage/>}/>
            <Route path={PATH.PROFILE} render={() => <UserPage/>}/>
            <Route path={PATH.TEST} render={() => <TestLevel/>}/>
            <Route path={PATH.COLLECTIVE} render={() => <CollectivePage/>}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
