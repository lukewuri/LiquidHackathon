import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import SearchImage from "./assets/LiquidHacksMercuryLogo.png";
import BannerImage from "./assets/Team_liquid_logo_2017.png";

const useStyles = makeStyles((theme) => ({
    center: {
        width: "700px",
        display: "flex",
        justifyContent: "center",
    },
    bannerGrid: {
        backgroundColor: "white",
        border: "5px",
        boxShadow: "2px 2px gray",
        opacity: 0.8
    },
    bannerLogo: {
        width: "700px",
        margin: "10px"
    },
    searchBar:{
        width: "70%"
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
            <img className={classes.bannerLogo} src={SearchImage}/>
            <Grid item className={classes.center}>
                <TextField
                    className={classes.searchBar}
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