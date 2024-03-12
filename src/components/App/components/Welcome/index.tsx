import React from "react";
import {
    Typography as MuiTypography,
    Button as MuiButton,
    TypographyProps,
    ButtonProps,
} from "@mui/material";
import {styled} from "@mui/material/styles";
import classes from "./Welcome.module.scss";
import {ReactComponent as WelcomeImage} from "../../../../assets/name.svg";

function Welcome() {
    const user: { name: string } = {
        name: "Jaydon Frankie"
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.welcome_container}>
                <Title variant="h4" className={classes.add}>
                    Welcome back 👋
                </Title>
                <Title variant="h4" mb={2}>
                    {user.name}
                </Title>
                <Typography mb={2}>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
                    anything.
                </Typography>
                <Button variant="contained">
                    Go Now
                </Button>
            </div>
            <div className={classes.img_wrapper}>
                <WelcomeImage/>
            </div>
        </div>
    );
}

const Title = styled(MuiTypography)<TypographyProps>(() => ({
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "1.25rem",
    color: "rgb(0, 75, 80)",
}));
const Typography = styled(MuiTypography)<TypographyProps>(() => ({
    fontWeight: "400",
    opacity: 0.8,
}));
const Button = styled(MuiButton)<ButtonProps>(() => ({
    textTransform: "none",
    fontWeight: "700",
    lineHeight: "1.71429",
    minWidth: "64px",
    padding: "6px 12px",
    borderRadius: "8px",
    transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;color rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 167, 111)",
    color: "rgb(255, 255, 255)",
    boxShadow: "none",
}));
export default Welcome;
