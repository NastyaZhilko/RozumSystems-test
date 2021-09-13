import React from "react";
import {useSelector} from "react-redux";
import {getFilteredWorklog} from "../../Redux/selectors";
import {useParams} from "react-router-dom";
import To from "../DeadLine/DeadLine";
import { TableContainer} from "@material-ui/core";
import {TableBody} from "@material-ui/core";
import {TableCell} from "@material-ui/core";



export const Worklog = () => {
    const {id} = useParams()
    const filteredWorkLog = useSelector((state) => getFilteredWorklog(state, +id))

    return (
        <div>
            {filteredWorkLog.map((w) => {
                return (
                    <div key={w.id}>
                        <TableContainer>
                            <TableBody>
                                <TableCell>
                                    <span>{"   From " + w.from}</span>
                                </TableCell>
                                <TableCell><To employeeId={id} to={w.to}/></TableCell>
                            </TableBody>
                        </TableContainer>
                    </div>
                )
            })}
        </div>
    )
}
