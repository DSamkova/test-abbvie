import React from "react";
import "./App.css";
import {Box as MuiBox, createTheme, ThemeProvider} from "@mui/material";
import {GlobalTheme} from "./theme";
import Welcome from "./components/App/components/Welcome";
import Total from "./components/App/components/Total";
import DownLoads from "./components/App/components/Downloads";
import Area from "./components/App/components/Area";
import InvoicesTable from "./components/App/components/Invoices";
import {styled} from "@mui/material/styles";

const theme = createTheme(GlobalTheme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MuiBox px={3}>
                <Welcome/>
                <Total/>
                <Box>
                    <DownLoads/>
                    <Area/>
                </Box>
                <Box>
                    <InvoicesTable/>
                </Box>
            </MuiBox>
        </ThemeProvider>

    );
}

export default App;

const Box = styled(MuiBox)(({theme}) => ({
    display: "flex",
    gap: 12,
    margin: "12px 0",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column"
    },
}));
