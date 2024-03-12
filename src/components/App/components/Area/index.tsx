import React, {useMemo, useState} from "react";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import Paper from "../../../Paper/Paper";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useTheme} from "@mui/material";
import {AreasDataPerYear, SeriesAreas} from "./data";

type Year = "2019" | "2020";
const Area: React.FC = () => {
    const theme = useTheme();
    const [selectedYear, setSelectedYear] = useState<Year>("2019");

    const series = useMemo(() => {
        return SeriesAreas.map((area, index) => ({
            ...area,
            data: AreasDataPerYear[selectedYear]?.[area.id] || [],
            color: index > 0 ? theme.palette.warning.main : theme.palette.success.main,
        }));
    }, [selectedYear, theme]);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Generate x-axis labels for months
    const xaxisLabels = months.map((month) => month.substring(0, 3));

    const options: ApexOptions = {
        chart: {
            background: "transparent",
            type: "line",
            width: "400px",
            height: 364,
            toolbar: {
                show: false,
            },
        },
        legend: {show: true, position: "top"},
        colors: [
            theme.palette.primary.main,
            theme.palette.secondary.main,
        ],
        yaxis: {
            title: {
                text: "",
            },
        },
        tooltip: {fillSeriesColor: false},
        xaxis: {
            categories: xaxisLabels,
        },
    };

    const handleYearChange = (event: SelectChangeEvent) => {
        setSelectedYear(event.target.value as Year);
    };

    return (
        <>
            <Paper>
                <Box display="flex" width="100%" justifyContent="space-between" mb={5}>
                    <Typography variant="h6">Area Installed</Typography>
                    <FormControl variant="standard">
                        <InputLabel id="year-select-label">Year</InputLabel>
                        <Select
                            labelId="year-select-label"
                            id="year-select"
                            value={selectedYear}
                            label="Year"
                            onChange={handleYearChange}
                        >
                            <MenuItem key="2019" value="2019">2019</MenuItem>
                            <MenuItem key="2020" value="2020">2020</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box width={"100%"}>
                    <Chart options={options} series={series} height={364}/>
                </Box>
            </Paper>
        </>
    );
};

export default Area;