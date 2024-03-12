import React from "react";
import {useChartOptions} from "../../../../hooks/useChartOptions";
import {pieData} from "./data";
import Chart from "react-apexcharts";
import Paper from "../../../Paper";
import {Box, Typography} from "@mui/material";

const DownLoads: React.FC = () => {
    const chartOptions = useChartOptions({labels: pieData.labels});
    return (
        <Paper sx={{flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <Typography variant="h6" mb="40px">Current Download</Typography>
            <Box width="100%" display="flex" justifyContent="center">
                <Chart
                    height={400}
                    options={chartOptions}
                    legend={{
                        containerClass: "my-legend-container"
                    }}
                    series={pieData.chartSeries}
                    type="donut" width="100%"/>
            </Box>
        </Paper>
    );
}

export default DownLoads;
