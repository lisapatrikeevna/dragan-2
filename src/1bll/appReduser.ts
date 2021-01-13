// import React from "react";

type initStateType = {
    isInitialized:boolean
    status:boolean
}
let initState: initStateType = {
    isInitialized:false,
    status:false
}

export const appReducer = (state = initState, action: any): initStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'SOME-CASE':
            return {...state}
        case 'IS-INIT':
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}