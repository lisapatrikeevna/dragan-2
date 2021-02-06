import {Dispatch} from "redux";
import firebase from "firebase";

type setTaskType = ReturnType<typeof setTaskAC>
type actionType = setTaskType
type initStateType = {
    tasks:Array<any>
    status:boolean
}
let initState: initStateType = {
    tasks: [],
    status:false
}

export const tasksReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        // case 'APP/SET-STATUS':
        //     return {...state, status: action.status}
        // case 'SOME-CASE':
        //     return {...state}
        case 'SET-TASKS':
            return {...state, tasks: action.payload}
        default:
            return {...state}
    }
}
export const setTaskAC = (payload:any) =>({type: 'SET-TASKS',payload}as const)
export const setTaskTC = () => (dispatch:Dispatch) =>{
    const tasks =firebase.database().ref('tasks')
    tasks.on('value',(el)=>{
        dispatch(setTaskAC(el.val()))
        // let aaa = el.val()
        // console.log(aaa);
    })
}