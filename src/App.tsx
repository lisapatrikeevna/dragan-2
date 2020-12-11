import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuExampleAttached from "./component/header/Header";
import {Offer} from "./component/section/Offer/Offer";
import {Level} from "./component/section/Level/Level";
import {Individual} from "./component/section/Individual/Individual";
import {Collective} from "./component/section/Collective/Collective";
import { Route } from 'react-router-dom';
import {Form} from "./common/Form";
import {Footer} from "./component/footer/Footer";
import {Reviews} from "./component/section/Reviews/Reviews";

function App() {
    return (
        <div className="App">
            <MenuExampleAttached/>
            <Offer/>
            <Level/>
            <div className="wrap">
                <Route path={"/individual"} render={() => <Individual/>}/>
                <Route path={"/collective"} render={() => <Collective/>}/>
            </div>
            <section className="sign">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Записаться на пробное занятие</h2>
                            <p>30-минутный живой урок по Skype с объяснением нового материала</p>
                        </div>
                        <div className="col-12">
                            <Form btnName={'НАЧАТЬ'} deck={'It`s YOUR talk time! Пришло ТВОЕ время говорить на английском!'}/>
                        </div>
                    </div>
                </div>
            </section>
            <Reviews/>
            <Footer/>
        </div>
    );
}

export default App;
