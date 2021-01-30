import React from 'react';
// import '../../main.css';
import cl from './Collective.module.scss';
import {Icon} from "semantic-ui-react";

type CollectiveProps = {}
export const Collective = () => {
    type itemType = {
        icon: any
        h4: string
        deck: string
    }
    const items: Array<itemType> = [
        {
            icon: 'graduation cap',
            h4: 'Teacher',
            deck: '1 to 5 individual lessons'
        },
        {
            icon: 'stopwatch ',
            h4: 'Installment plan',
            deck: ' after each lesson 5 lessons package 10 lessons package'
        },
        {
            icon: 'calendar alternate',
            h4: 'Schedule',
            deck: 'convenient for you - choose for yourself'
        },
        {
            icon: 'calculator',
            h4: 'Cost',
            deck: 'from 70$'
        },
        {
            icon: 'laptop',
            h4: 'Training organization',
            deck: 'google class PDF, audio, video, interactive flash cards, tests, games...'
        },
        {
            icon: 'mobile alternate',
            h4: 'Application',
            deck: 'google class mobile app'
        },
        {
            icon: 'headphones',
            h4: 'Free DEMO',
            deck: '30 minute live Skype lesson with explanation of the new material'
        },
        {
            icon: 'credit card outline',
            h4: 'Certificate',
            deck: 'recommendations on LinkedIn and Facebook'
        },
    ]
    const item = items.map((i, ind) =>
        <div className={cl.collectiveWrap}>
            <Icon name={i.icon} className={cl.i}/>
            <h4>{i.h4}</h4>
            <p>{i.deck}</p>
        </div>
    )
    return (
        <section className={cl.collective} id="collective">
            <div className="container">
                <h2 className={cl.wrapTitle}>
                    How are collective classes at <span className="violet"> Silky's</span>
                </h2>
                <div className={cl.row}>
                    {item}
                </div>
            </div>
        </section>
    )
}
