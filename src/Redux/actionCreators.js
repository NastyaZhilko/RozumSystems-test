import {SET_EMPLOYEES, SET_LOADING, SET_WORKLOG, FILTER_WORKLOG} from "./constants";

export const setEmployeesAC = (employees) => ({type: SET_EMPLOYEES, employees})

export const setWorklogAC = (worklog) => ({type: SET_WORKLOG, worklog})

export const setLoadingAC = (loading) => ({type: SET_LOADING, loading})
export const filterWorkLog = (id) => ({type: FILTER_WORKLOG, id})