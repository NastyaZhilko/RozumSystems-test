import {SET_WORKLOG, SET_LOADING} from "../constants";

const initialState={
    worklog: [],
    loading: false
}

export const worklogReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_WORKLOG:
            return {
                ...state,
                worklog: action.worklog
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}