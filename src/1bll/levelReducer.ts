import {Dispatch} from "redux";

type getVerbsACType = ReturnType<typeof getVerbsAC>
type getNounsACType = ReturnType<typeof getNounsAC>
type actionType = getVerbsACType | getNounsACType
export type objV={
    id:number,
    ask:string,
    answer:string,
    translate:string
}
export type objN={
    id:number,
    ask:string,
    answer:string,
}
export type askVerbsType = {
    status:boolean
} & objV
export type askNounsType = {
    status:boolean
} & objN

type initStateType={
    askVerbs: Array<askVerbsType>
    askNouns: Array<askNounsType>
}
let initState: initStateType = {
    askVerbs: [],
    askNouns: [],
}

export const levelReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case 'GET-VERBS':
            return {...state,
                askVerbs: action.payload.map(i => ({...i, status:false}) )
            }
        case 'GET-NOUNS':
            return {...state,
                askNouns: action.payload.map(i => ({...i, status:false}) )
            }
        // case 'SOME-CASE':
        //     return {...state}
        default:
            return {...state}
    }
}

export const getVerbsAC=(payload:Array<objV>)=>({type:'GET-VERBS',payload} as const)
export const getNounsAC=(payload:Array<objN>)=>({type:'GET-NOUNS',payload} as const)
