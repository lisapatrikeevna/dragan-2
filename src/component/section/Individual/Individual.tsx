import React, {useState} from 'react';
import '../../main.css';
import cl from './Individual.module.scss';
type IndividualProps={

}
export const Individual = () => {

    return(
        <section className={cl.individual} id="individual">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className={cl.wrapTitle}>
                            How are individual classes at <span className="violet"> Silky's</span>
                        </h2>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrep}>
                            <h4 className={cl.levelWrapTitle}>1 on 1</h4>
                            <p className={cl.wrepDeck}>
                                lessons with teacher
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrep}>
                            <h4 className={cl.levelWrapTitle}>45 minutes</h4>
                            <p className={cl.wrepDeck}>
                                duration lessons
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrep}>
                            <h4 className={cl.levelWrapTitle}>2-3 times a week</h4>
                            <p className={cl.wrepDeck}>
                                recommended intensity
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.levelWrep}>
                            <h4 className={cl.levelWrapTitle}>Teacher</h4>
                            <p className={cl.wrepDeck}>
                                Russian or native speaker
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className={cl.levelTitleNth}>Modern approach to learning</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className={cl.classesWrap}>
                            <h3 className={cl.classesWrapTitle}>Online classes</h3>
                            <ul>
                                <li>
                                    <p>
                                        Exercise in comfort - anytime, in a convenient place.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Choose a Russian-language teacher or native speaker.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Individual lessons are easy to integrate in your schedule.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={cl.benefistWrap}>
                            <h3 className={cl.benefistWrapTitle}>Benefits</h3>
                            <ul>
                                <li>
                                    <p>
                                        No need to waste time traveling to the school office
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Maximum comfort - while at home, with a cup of tea and in a cozy setting the
                                        language learning process will be easier.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Learning online is an opportunity to study not only at home, but also anywhere
                                        in the city, country or even the world.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Online classes give you the opportunity to plan as efficiently as possible. your
                                        schedule
                                    </p>
                                </li>
                            </ul>
                            <h6 className={cl.benefistWrapText}>Get new knowledge without leaving home!</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}
