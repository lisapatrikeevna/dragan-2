import React, {useState} from 'react';
import '../../main.css';
import time from './../../img/time.jpg';
import {Icon} from "semantic-ui-react";
import cl from './Level.module.scss';

type LevelProps={

}
export const Level = () => {

    return(
        <section className={cl.level}>
            <div className="container">
                <span className={cl.wrapTitle}><img src={time} alt="level"/><h2 className={cl.levelTitle}>level selection according to your needs</h2></span>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrap}>
                            {/*<i className="fas fa-battery-quarter"></i>*/}
                            <Icon name='battery one' className={cl.i}/>
                            <h4 className={cl.levelWrapTitle}>Elementary</h4>
                            <p className={cl.wrapDeck}>
                                You will learn to understand
                                common sense everyday
                                conversation.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrap}>
                            <Icon name='battery two' className={cl.i}/>
                            <h4 className={cl.levelWrapTitle}>Pre-Intermediate</h4>
                            <p className={cl.wrapDeck}>
                                You will learn to communicate and
                                understand the general content
                                films.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrap}>
                            <Icon name='battery three' className={cl.i}/>
                            <h4 className={cl.levelWrapTitle}>Intermediate</h4>
                            <p className={cl.wrapDeck}>
                                You will learn freely
                                express your opinion and
                                to have an interview.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrap}>
                            <Icon name='battery four' className={cl.i}/>
                            <h4 className={cl.levelWrapTitle}>Upper Intermediate</h4>
                            <p className={cl.wrapDeck}>
                                Level sufficient to live
                                and communication in a country where
                                English is the state language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}
