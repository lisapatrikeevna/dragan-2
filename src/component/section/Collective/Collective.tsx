import React from 'react';
// import '../../main.css';
import cl from './Collective.module.scss';
import {Icon} from "semantic-ui-react";
type CollectiveProps={

}
export const Collective = () => {

    return(
        <section className="collective" id="collective">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="wrap-title">
                            How are collective classes at <span className="violet"> Silky's</span>
                        </h2>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-user-graduate"></i>*/}
                            <Icon name='graduation cap' className={cl.i}/>
                            <h4>Teacher</h4>
                            <p>1 to 5 individual lessons</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-stopwatch"></i>*/}
                            {/*<Icon name='hourglass outline'/>*/}
                            <Icon name='stopwatch' className={cl.i}/>
                            <h4>Installment plan</h4>
                            <p>
                                after each lesson 5 lessons package 10 lessons package
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-calendar-alt"></i>*/}
                            <Icon name='calendar alternate' className={cl.i}/>
                            {/*<Icon name='calendar alternate outline'/>*/}
                            <h4>Schedule</h4>
                            <p>convenient for you - choose for yourself</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-calculator"></i>*/}
                            <Icon name='calculator' className={cl.i}/>
                            <h4>Cost</h4>
                            <p>from 70$</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-desktop"></i>*/}
                            {/*<Icon name='tv'/>*/}
                            <Icon name='laptop' className={cl.i}/>
                            <h4>Training organization</h4>
                            <p>google class PDF, audio, video, interactive flash cards, tests, games...</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-mobile-alt"></i>*/}
                            {/*<Icon name='tablet alternate'/>*/}
                            <Icon name='mobile alternate' className={cl.i}/>
                            <h4>Application</h4>
                            <p>google class mobile app</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-headset"></i>*/}
                            <Icon name='headphones' className={cl.i}/>
                            {/*<Icon name='file audio outline'/>*/}
                            <h4>Free DEMO</h4>
                            <p>30 minute live Skype lesson with explanation of the new material</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className={cl.collectiveWrep}>
                            {/*<i className="fas fa-id-card"></i>*/}
                            {/*<Icon name='credit card'/>*/}
                            <Icon name='credit card outline' className={cl.i}/>
                            <h4>Certificate</h4>
                            <p>recommendations on LinkedIn and Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}
