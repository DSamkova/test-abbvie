import * as React from "react";
import {
    Box,
    Paper as MuiPaper,
    Table,
    TableBody,
    TableCell as MuiTableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {columns, rows, StatusesColor} from "./data";
import classes from "./Invoices.module.scss"
import {styled} from "@mui/material/styles";
import Paper from "../../../Paper/Paper";


const InvoicesTable: React.FC = () => {
    return (
        <Paper sx={{flexDirection: "column", padding: 0, alignItems: "flex-start"}}>
            <Box p={3}>
                <Typography variant="h6">New Invoice</Typography>
            </Box>

            <TableContainer component={MuiPaper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell key={column.field}>{column.headerName}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>
                                    <CustomStatus color={StatusesColor[row.status]} status={row.status}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Box p={3} textAlign={"right"}>
                    <Typography variant="subtitle2" fontWeight={700}>View All</Typography>
                </Box>
            </TableContainer>
        </Paper>
    );
}

export default InvoicesTable

const TableCell = styled(MuiTableCell)(({theme}) => ({
    backgroundColor: "white",
    borderBottom: "1px dashed rgb(241, 243, 244)",
    padding: 16,
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F3F6F8",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const CustomStatus = ({color, status}: { color: string, status: string }) => {
    return (
        <div className={classes.status_wrapper}>
            <div className={classes.background} style={{backgroundColor: color, color,}}>
                {status}
            </div>
            <div className={classes.status} style={{color}}>
                {status}
            </div>
        </div>
    )
}