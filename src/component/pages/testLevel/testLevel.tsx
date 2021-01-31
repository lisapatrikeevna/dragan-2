import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import verbs from './verbs.json'
import {getVerbalAC} from "../../../1bll/levelReducer";

const TestLevel = () => {
    const dispatch = useDispatch()
    useEffect(()=>{

        let payload: any = verbs.verbs

        dispatch(getVerbalAC(payload))
    },[])
    return (
        <div>
            <h4>Топ 50 часто употребляемых английских глаголов с переводом</h4>

        </div>
    );
};

export default TestLevel;