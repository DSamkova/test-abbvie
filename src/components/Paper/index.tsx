import {Paper as MuiPaper, PaperProps, SxProps} from "@mui/material";
import {styled} from "@mui/material/styles";

const Paper = styled(MuiPaper)<PaperProps & SxProps>(() => ({
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(33, 43, 54)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
    borderRadius: "16px",
    zIndex: "0",
    display: "flex",
    alignItems: "center",
    padding: "24px",
}));

export default Paper;