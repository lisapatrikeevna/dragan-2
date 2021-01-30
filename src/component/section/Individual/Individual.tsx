import React, {useState} from 'react';
import '../../main.css';
import cl from './Individual.module.scss';


export const Individual = () => {
    type infoType = {
        title: string
        deck: string
    }
    let info: Array<infoType> = [
        {
            title: '1 on 1',
            deck: 'lessons with teacher'
        },
        {
            title: '45 minutes',
            deck: 'duration lessons'
        },
        {
            title: '2-3 times a week',
            deck: 'recommended intensity'
        },
        {
            title: 'Teacher',
            deck: 'Russian or native speaker'
        }
    ]
    const itemInfo = info.map((i, ind) =>
        <div className={cl.levelWrap} key={ind}>
            <h4 className={cl.levelWrapTitle}>{i.title}</h4>
            <p className={cl.wrapDeck}>{i.deck}</p>
        </div>
    )
    return (
        <section className={cl.individual} id="individual">
            <div className="container">
                <div className={cl.row}>
                    <h2 className={cl.wrapTitle}>
                        How are individual classes at <span className="violet"> Silky's</span>
                    </h2>
                    <div className={cl.row}> {itemInfo} </div>
                </div>
                <div className={cl.row}>
                    <h2 className={cl.levelTitleNth}>Modern approach to learning</h2>
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
                    <div className={cl.advantagesWrap}>
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
        </section>
    )
}
