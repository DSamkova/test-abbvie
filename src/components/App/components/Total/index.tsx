import React from "react";
import classes from "./Total.module.scss";
import {defaultData, TotalSections} from "./data";
import {styled} from "@mui/material/styles";
import {Typography as MuiTypography, TypographyProps} from "@mui/material";
import EjectIcon from "@mui/icons-material/Eject";
import {Chart} from "react-google-charts";
import Paper from "../../../Paper/Paper";

const options = {
    legend: {position: "none"},
    hAxis: {textPosition: "none"},
    vAxis: {
        textPosition: "none",
        gridlines: {
            color: "transparent",
        },
    },
    baselineColor: "transparent",
    chartArea: {width: "100%", height: "100%"},
};

const Total: React.FC = () => {
    return (
        <div className={classes.wrapper}>
            {TotalSections?.map((item) => (
                <Paper className={classes.total_item} key={item.id}>
                    <div className={classes.total_info}>
                        <Typography>{item.title}</Typography>
                        <Typography mt={2} mb={1} gap={1} display="flex" alignItems="center">
                            {item.change >= 0 ? <><EjectIcon color="success"/>+</> :
                                <EjectIcon color="error" style={{transform: "rotate(180deg)"}}/>}
                            {item.change}%
                        </Typography>
                        <Typography variant="h3">{item.total}</Typography>
                    </div>
                    <div>
                        <Chart
                            chartType="ColumnChart"
                            options={{...options, colors: [item.color]}}
                            width="60px"
                            height="60px"
                            data={defaultData}
                        />
                    </div>
                </Paper>
            ))}
        </div>
    );
};

const Typography = styled(MuiTypography)<TypographyProps>(() => ({
    "&.MuiTypography-h3": {
        fontWeight: 700,
        fontSize: "1.875rem",
    },
}));

export default Total;
