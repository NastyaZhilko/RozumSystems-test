import React from "react";
import {useSelector} from "react-redux";
import {getSortedEmployees} from "../../Redux/selectors"
import {NavLink} from "react-router-dom";
import {LinearProgress, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import style from "./Employees.module.css"

export const Employees = (props) => {
    const sortedEmployees = useSelector((state) => getSortedEmployees(state))
    let loading = useSelector(state => state.employees.loading)


    return (
        <div>
            {loading && <LinearProgress/>}
            <TableContainer component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Date of birthday</TableCell>
                        </TableRow>
                        </TableHead>
                    <TableBody>
                        {sortedEmployees.map(e =>
                            <TableRow key={e.id} >
                                <TableCell align="center" scope="row">{e.id}</TableCell>
                                <TableCell align="center">
                                    <NavLink to={`/worklog/${e.id}`}>
                                        {e.lastName + " " + e.firstName + " " + e.middleName}
                                    </NavLink>
                                </TableCell>
                                <TableCell align="center">{e.birthDate}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
