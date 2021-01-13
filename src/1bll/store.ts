import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer} from "./appReduser";
import {loginReducer} from "./loginReduser";

const rootReducer = combineReducers({
    app: appReducer,
    logon: loginReducer,
});
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;