import React from "react";
import "./App.css";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {GlobalTheme} from "./theme";
import Welcome from "./components/App/components/Welcome";
import Total from "./components/App/components/Total";
import DownLoads from "./components/App/components/Downloads";
import Area from "./components/App/components/Area";

const theme = createTheme(GlobalTheme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box px={3}>
                <Welcome/>
                <Total/>
                <Box display={"flex"} gap={3}>
                    <DownLoads/>
                    <Area/>
                </Box>
            </Box>
        </ThemeProvider>

    );
}

export default App;
