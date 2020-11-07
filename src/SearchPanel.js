import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        justifyContent: "center",
    },
    bannerGrid: {
        backgroundColor: "white",
        border: "5px",
        boxShadow: "2px 2px gray"
    }
}));

function SearchPanel() {
    const classes = useStyles();
        return <Grid container
                     direction="column"
                     alignItems="center"
                     justify="center"
                     wrap="nowrap" spacing={2}
                     className={classes.bannerGrid}
        >
            <Grid item className={classes.center}>
                <TextField
                    id="standard-search"
                    label="Name/Summoner"
                    type="search"
                    direction="column"
                    alignItems="center"
                    justify="center"
                    onKeyPress={(event) => {
                        console.log("keyPressed", event.key)
                        if (event.key === 'Enter')
                            console.log("Enter Pressed");
                    }}
                />
                <Button >Search</Button>
            </Grid>
            <Grid item className={classes.center}>
                <Button>Advanced Search</Button>
            </Grid>
        </Grid>
}

export default SearchPanel;