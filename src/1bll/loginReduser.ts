import {Dispatch} from "redux";
import * as firebase from "firebase";

type loginACType = ReturnType<typeof loginAC>
type setStatusACType = ReturnType<typeof setStatusAC>
type registrationACType = ReturnType<typeof registrationAC>
type ActionType = loginACType | setStatusACType | registrationACType
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
            return {...state, status: action.status}
        case 'LOGIN':
            return {
                ...state,
                email: action.email,
                password: action.password,
                isInitialized: true,
            }
        case 'REGISTRATION':
            return {
                ...state,
                email: action.email,
                password: action.password,
                isInitialized: true,
            }
        // case 'IS-INIT':
        //     return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}
export const loginAC=(email:string,password:string)=>({type:'LOGIN',email,password}as const)
export const registrationAC=(email:string,password:string)=>({type:'REGISTRATION',email,password}as const)
export const setStatusAC=(status:boolean)=>({type:'SET-STATUS',status}as const)
export const loginTC=(email:string,password:string)=>(dispatch:Dispatch)=>{
    dispatch(loginAC(email,password))
    //GetAccountInfo
    firebase.default.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            // dispatch(setStatusAC(true))
            console.log(res);
            console.log('ok');
        })
        .catch(er => {
            alert(er)
            console.log('error');
        })
}
export const registrationTC=(email:string,password:string)=>(dispatch:Dispatch)=>{
    dispatch(loginAC(email,password))
    firebase.default.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            // dispatch(setStatusAC(true))
            console.log( res.user?.getIdToken);
            console.log(res.credential?.toJSON());
            console.log(res.credential?.toJSON());
            //response
            // "kind": "identitytoolkit#SignupNewUserResponse",
            //     "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjVmOTcxMmEwODczMTcyMGQ2NmZkNGEyYTU5MmU0ZGZjMmI1ZGU1OTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLXNpbGt5IiwiYXVkIjoiZmlyLXNpbGt5IiwiYXV0aF90aW1lIjoxNjEwNjcxNjIwLCJ1c2VyX2lkIjoiNUtBaVY5cHNhcE8wMUFCMHhqZ0pLT3U3OTR2MiIsInN1YiI6IjVLQWlWOXBzYXBPMDFBQjB4amdKS091Nzk0djIiLCJpYXQiOjE2MTA2NzE2MjAsImV4cCI6MTYxMDY3NTIyMCwiZW1haWwiOiJsaXNhMTUuMDhwYXRyaWtlZXZuYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibGlzYTE1LjA4cGF0cmlrZWV2bmFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.lUYBx48-GCoqIeCKZbNdkNAWMPZ5TLS7IejXW4NcafwTyk6Wkh52sr3g0Fay_VQ1X1KX9gEpLDcCaP2Q6CxldhhXc4aI7I0dKJYL19iywVE2fmanr8HP9XLgm_FJnlGCfVfRpxl9ywhp3yR0rKtvgAM497-oiZ_cP4HvPyY0rm9Qn0bK1cexbxIGaFGpK9cs_baDxowdk1M6suFxDPf9DzwL3PoS9e1gfGmHC8prJ_r8AnbIpXSJCmiD0fvRwvSPbZs4pR18SLCl4xuyWNl8DRPHOi5jNJNtyDwpe4baxa3YZQ-TGwmmHFOe-qXyAQ1Z1SctFWbxvoek9H3EOz1c3A",
            //     "email": "lisa15.08patrikeevna@gmail.com",
            //     "refreshToken": "AOvuKvR3k5A9cjkRGhfzL1Zw7ntVW37G0UWBrK5T4qjI7IfyB9qWyZl2R0xZrz-sEa4d66N9MDWhNYHgR2DytOCgZ81surAA6FjaE4jF5D_MaScaP3Vn4-P61owd24hYOdH6_vnNKA8nJ9s2_ppWmtu8xlImmLF0Pf44jCjQTTXdgIThHNuWNT3kZ9AmCuXcWmTX5ACQntM02e9mgykSq-fPeA-Q_6ZzmQ",
            //     "expiresIn": "3600",
            //     "localId": "5KAiV9psapO01AB0xjgJKOu794v2"

            //getAccountInfo?key=AIzaSyDGqV4nDHMokspRbNj9OufL531PwdNB2sc
        })
        .catch(er => alert(er))
}
export const isAuthTC = () => (dispatch:Dispatch) => {
    firebase.default.auth().onAuthStateChanged(function(user) {
        if (user) {
            dispatch(setStatusAC(true))
        } else {
            dispatch(setStatusAC(false))
        }
    });

    //         dispatch(setStatusAC())

}