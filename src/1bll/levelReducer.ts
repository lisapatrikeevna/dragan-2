import {Dispatch} from "redux";

type getVerbsACType = ReturnType<typeof getVerbsAC>
type getNounsACType = ReturnType<typeof getNounsAC>
type setStatusVerbACType = ReturnType<typeof setStatusVerbAC>
type setStatusNounACType = ReturnType<typeof setStatusNounAC>
type actionType = getVerbsACType | getNounsACType | setStatusVerbACType | setStatusNounACType
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
    right:boolean
} & objV
export type askNounsType = {
    status:boolean
    right:boolean
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
   // debugger
    switch (action.type) {
        case 'GET-VERBS':
            return {...state,
                askVerbs: action.payload.map(i => ({...i, status:false,right:false}) )
            }
        case 'GET-NOUNS':
            return {...state,
                askNouns: action.payload.map(i => ({...i, status:false, right:false}) )
            }
        case 'SET-STATUS-VERB':
            return {...state,
                askVerbs: state.askVerbs.map(i=>i.id===action.payload.id? {...i,status:true, right:action.payload.right} : i)
            }
        case 'SET-STATUS-NOUN':
            return {...state,
                askVerbs: state.askVerbs.map(i=>i.id===action.payload.id? {...i,status:true, right:action.payload.right} : i)
            }
        default:
            return {...state}
    }
}

export const getVerbsAC=(payload:Array<objV>)=>({type:'GET-VERBS',payload} as const)
export const setStatusVerbAC=(payload: {id: number,right:boolean })=>({type:'SET-STATUS-VERB',payload} as const)
export const setStatusNounAC=(payload:{id: number,right:boolean })=>({type:'SET-STATUS-NOUN',payload} as const)
export const getNounsAC=(payload:Array<objN>)=>({type:'GET-NOUNS',payload} as const)
