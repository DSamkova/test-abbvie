import {useTheme} from "@mui/material";
import type {ApexOptions} from "apexcharts";

export function useChartOptions({labels, ...rest}: Partial<ApexOptions>): ApexOptions {
    const theme = useTheme();

    return {
        chart: {background: "transparent"},
        colors: [theme.palette.success.main, theme.palette.warning.main, theme.palette.secondary.main, theme.palette.error.main],
        dataLabels: {enabled: false},
        labels,
        legend: {show: true, position: "bottom"},
        plotOptions: {
            pie: {
                customScale: 1, expandOnClick: false, donut: {
                    size: "90%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                        }
                    }
                }
            }
        },
        states: {active: {filter: {type: "none"}}, hover: {filter: {type: "none"}}},
        stroke: {width: 0},
        tooltip: {fillSeriesColor: false},
        ...rest,
    };
}