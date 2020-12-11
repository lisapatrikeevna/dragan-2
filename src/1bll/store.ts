import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReduser} from "./appReduser";

const rootReducer= combineReducers({
app:appReduser
});
export const store=createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;