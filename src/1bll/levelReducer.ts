import {Dispatch} from "redux";

type askVerbalType = {
    status:boolean
} & objV
// let askVerbal:askVerbalType = {
//     id:null,
//     ask:'',
//     answer:'',
//     translate:'',
//     status:false
// }
type getVerbalACType = ReturnType<typeof getVerbalAC>
type actionType = getVerbalACType
type initStateType={
    askVerbals: Array<askVerbalType>
}
let initState: initStateType = {
    askVerbals: [],
}

export const levelReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case 'GET-VERBAL':
            return {...state,
                askVerbals: action.payload.map(i => ({...i, status:false}) )
            }
        // case 'SOME-CASE':
        //     return {...state}
        default:
            return {...state}
    }
}
type objV={
    id:number,
    ask:string,
    answer?:string,
    translate:string
    stopped?: string
}
export const getVerbalAC=(payload:Array<objV>)=>({type:'GET-VERBAL',payload} as const)
