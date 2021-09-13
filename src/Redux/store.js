import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {employeesReducer} from "./Reducers/employeesReducer";
import {worklogReducer} from "./Reducers/worklogReducer";


const rootReducer = combineReducers({
    employees: employeesReducer,
    worklog: worklogReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));