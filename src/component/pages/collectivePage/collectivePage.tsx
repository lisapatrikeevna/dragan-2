import firebase from 'firebase';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setTaskTC } from '../../../1bll/tasksReduser';
import {AppRootStateType} from "../../../1bll/store";

const CollectivePage = () => {
    const dispatch = useDispatch()
    const  tasks=useSelector<AppRootStateType,Array<string>>(state => state.someTasks.tasks)
    useEffect(
        () => {
            // const bd = firebase.database()
            // console.log(bd);
            // // const info = firebase.GetAccountInfo()
            // // console.log(info);
            // const tasks = bd.ref('tasks');
            // tasks.on('value',(el)=>{
            //     aaa = el.val()
            //     console.log(aaa);
            // })
            dispatch(setTaskTC())

        }, []
    )
   // const task= tasks.map((t,index)=><p key={index}>{t}</p>)
   const  onSend = () =>{
        // const aa= {key:'tasks',value: 'see video'}
      // debugger
       const bd = firebase.database()
       bd.ref('tasks').push('send message')
   }
    return (
        <div>
            <h3>collectivePage</h3>
            <p>tasks for collective ...</p>
            <p>tasks: ...</p>
            {/*<p>tasks:{task}</p>*/}
            {/*<div>*/}
            {/*    <button onClick={onSend}>send</button>*/}
            {/*</div>*/}
        </div>
    );
};

export default CollectivePage;
