import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import SearchImage from "./assets/LiquidHacksMercuryLogo.png";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


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
    searchBar: {
        width: "70%",
    },
    formControl: {
        minWidth: 120,
    }
}));

function SearchPanel() {
    const classes = useStyles();
    const [showAdvancedSearch, setShowAdvancedSearch] = React.useState(false);


    const handleShowAdvancedSearch = (event) => {
        setShowAdvancedSearch(true);
    };


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
            <Button>Search</Button>
        </Grid>
        <Grid item className={classes.center}>
            <Button onClick={handleShowAdvancedSearch}
            >Advanced Search</Button>
        </Grid>
        {showAdvancedSearch && <Grid container>
            <Grid item>
                <FormGroup row>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Min Rank</InputLabel>
                        <Select
                            labelId="minRanks"
                            id="minimumRanks"
                            //onChange={handleSetCheck}
                        >
                            <MenuItem>Rank1</MenuItem>
                            <MenuItem>Rank2</MenuItem>
                            <MenuItem>Rank3</MenuItem>
                        </Select>
                    </FormControl>
                </FormGroup>
                <FormGroup row>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Max Rank</InputLabel>
                        <Select
                            labelId="maxRanks"
                            id="maximumRanks"
                            //onChange={handleSetCheck}
                        >
                            <MenuItem>Rank1</MenuItem>
                            <MenuItem>Rank2</MenuItem>
                            <MenuItem>Rank3</MenuItem>
                        </Select>
                    </FormControl>
                </FormGroup>
            </Grid>
        </Grid>}
    </Grid>

}

export default SearchPanel;