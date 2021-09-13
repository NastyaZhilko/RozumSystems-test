import {setEmployeesAC, setLoadingAC, setWorklogAC} from "./actionCreators";
import {getEmployees, getWorklog} from "../Api/api";

export const setEmployeesTC = () => {
  return  async (dispatch) => {
    try{
      dispatch(setLoadingAC(true))
      const employees = await getEmployees()
      dispatch(setEmployeesAC(employees))
      dispatch(setLoadingAC(false))
    } catch(error){
      console.log('error')
    }
    finally {
      dispatch(setLoadingAC(false))
    }
}
}

export const setWorklogTC = () => {
  return async(dispatch)=>{
    try{
      dispatch(setLoadingAC(true))
      const worklog = await getWorklog()
      dispatch(setWorklogAC(worklog))
      dispatch(setLoadingAC(false))
    }catch(error){
      console.log('error')
    }
    finally {
      dispatch(setLoadingAC(false))
    }
  }
}