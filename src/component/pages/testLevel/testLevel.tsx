import React from 'react'
import cl from './TestLevel.module.scss'
import Verbs from "./Verbs";
import Noun from "./Noun";

const TestLevel = () => {

    return (
        <div className={cl.container}>
            <h4>Топ 50 часто употребляемых английских глаголов с переводом</h4>
            <Verbs/>
            <h4>50 популярных существительных</h4>
            <Noun/>
        </div>
    );
};

export default TestLevel;