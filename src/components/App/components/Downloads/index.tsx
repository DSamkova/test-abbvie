import React from "react";
import {Box, Typography} from "@mui/material";
import Chart from "react-apexcharts";
import Paper from "../../../Paper/Paper";
import {useChartOptions} from "../../../../hooks/useChartOptions";
import {pieData} from "./data";

const DownLoads: React.FC = () => {
    const {labels, chartSeries} = pieData;
    const chartOptions = useChartOptions({labels});

    return (
        <Paper>
            <Typography variant="h6" mb="40px">
                Current Download
            </Typography>
            <Box width="100%" display="flex" justifyContent="center">
                <Chart
                    height={400}
                    options={chartOptions}
                    legend={{
                        containerClass: "my-legend-container"
                    }}
                    series={chartSeries}
                    type="donut"
                    width="100%"
                />
            </Box>
        </Paper>
    );
};

export default DownLoads;
