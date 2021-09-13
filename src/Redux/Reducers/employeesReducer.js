import {SET_EMPLOYEES, SET_LOADING} from "../constants";

const initialState = {
    employees:[],
    loading: false
}
export const employeesReducer = (state= initialState, action)=>{
    switch (action.type){
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}