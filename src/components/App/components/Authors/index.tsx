import React from "react";
import {Grid, Typography, Avatar, Box} from "@mui/material";
import Paper from "../../../Paper/Paper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {User, userList} from "./data";

type ColorVariant = "success" | "secondary" | "warning";


const UserList: React.FC = () => {
    const colors: ColorVariant[] = ["success", "secondary", "warning"];

    return (
        <Paper>
            <Typography variant="h6">Area Installed</Typography>
            <Grid container direction="column">
                {userList.map((user: User, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "16px",
                                mt: 3,
                            }}
                        >
                            <Avatar alt={user.name} src={user.avatarUrl}/>

                            <Box sx={{flex: 1}}>
                                <Typography variant="subtitle2" component="div">
                                    {user.name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    display={"flex"}
                                    mt={"4px"}
                                    alignItems={"center"}
                                    gap={1}
                                >
                                    <FavoriteIcon
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            width: "14px",
                                        }}
                                    />
                                    {user.likes}
                                </Typography>
                            </Box>

                            {user.isChampion && (
                                <EmojiEventsIcon color={colors[index % colors.length]}/>
                            )}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default UserList;
