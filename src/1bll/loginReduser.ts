import {Dispatch} from "redux";
import * as firebase from "firebase";

type loginACType = ReturnType<typeof loginAC>
type setStatusACType = ReturnType<typeof setStatusAC>
 type regictrationACType = ReturnType<typeof regictrationAC>
type ActionType = loginACType | setStatusACType | regictrationACType
type initStateType = {
    isInitialized:boolean
    status:boolean
    email:string
    password:string
}
let initState: initStateType = {
    isInitialized:false,
    status:false,
    email:'',
    password:'',
}

export const loginReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case 'SET-STATUS':
            return {...state, status: true}
        case 'LOGIN':
            return {
                ...state,
                email: action.email,
                password: action.password,
            }
        case 'REGISTRATION':
            return {
                ...state,
                email: action.email,
                password: action.password,
            }
        // case 'IS-INIT':
        //     return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}
export const loginAC=(email:string,password:string)=>({type:'LOGIN',email,password}as const)
export const regictrationAC=(email:string,password:string)=>({type:'REGISTRATION',email,password}as const)
export const setStatusAC=()=>({type:'SET-STATUS'}as const)
export const loginTC=(email:string,password:string)=>(dispatch:Dispatch)=>{
    dispatch(loginAC(email,password))
    firebase.default.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            dispatch(setStatusAC())
            console.log(res);
        })
        .catch(er => alert(er))
}
export const registrationTC=(email:string,password:string)=>(dispatch:Dispatch)=>{
    dispatch(loginAC(email,password))
    firebase.default.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            dispatch(setStatusAC())
            console.log(res);
        })
        .catch(er => alert(er))
}
