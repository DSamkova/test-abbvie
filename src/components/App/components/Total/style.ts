import {styled} from "@mui/material/styles";
import Paper from "../../../Paper/Paper";

export const TotalWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const TotalItem = styled(Paper)`
    margin: 12px 0;
    flex-direction: row;
    justify-content: space-between;
`;

export const TotalInfo = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
