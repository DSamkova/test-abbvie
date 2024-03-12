import {styled} from "@mui/material/styles";
import {TableCell as MuiTableCell, tableCellClasses} from "@mui/material";

export const TableCell = styled(MuiTableCell)(({theme}) => ({
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
export const StatusWrapper = styled("div")(({theme}) => ({
    position: "relative",
    height: "20px",
    display: "flex",
}));
export const Background = styled("div")(({theme}) => ({
    opacity: "0.1",
    padding: "0 6px",
    fontSize: "12px",
    borderRadius: "6px",
}));
export const Status = styled("div")(({theme}) => ({
    position: "absolute",
    top: "2px",
    left: "6px",
    zIndex: 1,
    fontSize: "12px",
}));
