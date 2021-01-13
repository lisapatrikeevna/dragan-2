import React from 'react';
import {Offer} from "../section/Offer/Offer";
import {Level} from "../section/Level/Level";
import {Individual} from "../section/Individual/Individual";
import {Collective} from "../section/Collective/Collective";
import {Form} from "../../common/Form";
import {Reviews} from "../section/Reviews/Reviews";

const MainPage = () => {
    return (
        <div>
            <Offer/>
            <Level/>
            <Individual/>
            <Collective/>
            {/*<div className="wrap">*/}
            {/*    <Route path={"/individual"} render={() => <Individual/>}/>*/}
            {/*    <Route path={"/collective"} render={() => <Collective/>}/>*/}
            {/*</div>*/}
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
        </div>
    );
};

export default MainPage;