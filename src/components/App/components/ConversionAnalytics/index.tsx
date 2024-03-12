import React from "react";
import {styled, useTheme} from "@mui/material/styles";
import {Box, BoxProps, CircularProgress, Typography as MuiTypography, TypographyProps} from "@mui/material";
import Paper from "../../../Paper/Paper";
import {defaultSections} from "./data";

const ConversionAnalytics: React.FC = () => {
    return (
        <WrapperBox>
            {defaultSections.map(section => (
                <ProgressItem
                    key={section.title}
                    {...section}
                />
            ))}
        </WrapperBox>
    );
};

interface IProgressItem {
    title: string;
    background: string;
    total: number;
    value: number;
    color: string;
}

const ProgressItem: React.FC<IProgressItem> = ({title, background, total, value, color}) => {
    const theme = useTheme();

    return (
        <Paper sx={{backgroundColor: background, color: theme.palette.common.white}}>
            <ProgressItemWrapper>
                <CircularProgress sx={{color, }} variant="determinate" size={86} value={value}/>
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 86,
                    }}
                >
                    <Typography variant="caption" color="inherit">{value}%</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">{total}</Typography>
                    <Typography variant="body2">{title}</Typography>
                </Box>
            </ProgressItemWrapper>
        </Paper>
    );
};

const Typography = styled(MuiTypography)<TypographyProps>(() => ({
    "&.MuiTypography-body1": {
        fontWeight: 700,
        fontSize: "1.5rem",
    },
    "&.MuiTypography-body2": {
        fontWeight: 600,
        fontSize: "0.875rem",
        opacity: 0.64,
    },
}));

const WrapperBox = styled(Box)<BoxProps>(() => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 16,
    justifyContent: "flex-start"
}));

const ProgressItemWrapper = styled(Box)<BoxProps>(() => ({
    width: "100%",
    position: "relative",
    display: "flex",
    gap: "24px",
    justifyContent: "flex-start",
    alignItems: "center"
}));

export default ConversionAnalytics;
