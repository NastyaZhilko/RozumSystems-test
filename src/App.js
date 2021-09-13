import './App.module.css';
import React, {useEffect} from "react";
import {Routes} from "./Components/Routes/Routes";
import {useDispatch} from "react-redux";
import {setEmployeesTC, setWorklogTC} from "./Redux/thunkCreators";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setEmployeesTC())
        dispatch(setWorklogTC())
    }, [])
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
