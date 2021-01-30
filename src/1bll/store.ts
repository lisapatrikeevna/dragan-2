import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer} from "./appReduser";
import {loginReducer} from "./loginReduser";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;