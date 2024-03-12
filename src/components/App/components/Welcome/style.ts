import {styled} from "@mui/material/styles";

export const WelcomeWrapper = styled("div")`
    display: flex;
    background: linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255);
    border-radius: 16px;
    color: rgb(0, 75, 80);
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const WelcomeContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 900px) {
        padding: 40px;
        align-items: flex-start;
    }
`;
export const ImgWrapper = styled("div")`
    padding: 40px;

    svg {
        max-width: 252px;
        width: 100%;
    }

    @media (min-width: 900px) {
        padding: 24px;
    }
`;