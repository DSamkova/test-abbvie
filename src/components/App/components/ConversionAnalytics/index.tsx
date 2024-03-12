import React from "react";
import {styled} from "@mui/material/styles";
import {
    Box, BoxProps, CircularProgress,
    Typography as MuiTypography,
    TypographyProps
} from "@mui/material";
import Paper from "../../../Paper/Paper";
import {defaultSections} from "./data";

const ConversionAnalytics: React.FC = () => {

    return (<WrapperBox>
        {
            defaultSections.map(section => (<ProgressItem
                key={section.title}
                title={section.title}
                total={section.total}
                value={section.value}
                color={section.color}
                background={section.background}
            />))
        }
    </WrapperBox>)
}

interface IProgressItem {
    title: string,
    background: string,
    total: number,
    value: number,
    color: string,
}

const ProgressItem: React.FC<IProgressItem> = ({title, background, total, value, color}) => {

    return (
        <Paper sx={{backgroundColor: background, color: "white"}}>
            <ProgressItemWrapper>
                <Box sx={{position: "relative", display: "inline-flex"}}>
                    <CircularProgress sx={{color: color}} variant="determinate" size={86} value={value}/>
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
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="white"
                        >{value}%</Typography>
                    </Box>
                </Box>
                <div>
                    <Typography variant={"body1"}>{total}</Typography>
                    <Typography variant={"body2"}>{title}</Typography>
                </div>
            </ProgressItemWrapper>
        </Paper>
    )
}

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
    display: "flex",
    gap: "24px",
    justifyContent: "flex-start",
    alignItems: "center"
}));
export default ConversionAnalytics;
