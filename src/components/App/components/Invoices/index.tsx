import * as React from "react";
import {
    Box,
    Paper as MuiPaper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {columns, rows, StatusesColor} from "./data";
import Paper from "../../../Paper/Paper";
import {Background, Status, StatusWrapper, TableCell} from "./style";


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
                            {columns.map((column) => (
                                <TableCell key={column.field}>{column.headerName}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
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
                <Box p={3} textAlign="right">
                    <Typography variant="subtitle2" fontWeight={700}>
                        View All
                    </Typography>
                </Box>
            </TableContainer>
        </Paper>
    );
};

export default InvoicesTable;



const CustomStatus = ({color, status}: { color: string; status: string }) => {
    return (
        <StatusWrapper>
            <Background sx={{backgroundColor: color, color}}>
                {status}
            </Background>
            <Status sx={{color}}>
                {status}
            </Status>
        </StatusWrapper>
    );
};

