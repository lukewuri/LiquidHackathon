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
import InputAdornment from '@material-ui/core/InputAdornment';


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
        width: "300px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px"
    },
    formControlSmallL:{
        width: "132.5px",
        marginLeft: "20px"
    },
    formControlSmallR:{
        width: "132.5px",
        marginLeft: "20px",
        marginRight: "20px"
    }
}));

function SearchPanel() {
    const classes = useStyles();
    const [showAdvancedSearch, setShowAdvancedSearch] = React.useState(false);
    const [minRankLabel, setMinRankLabel] = React.useState("");
    const [maxRankLabel, setMaxRankLabel] = React.useState("");
    const [roleLabel, setRoleLabel] = React.useState("");
    const [minAgeLabel, setMinAgeLabel] = React.useState("");
    const [maxAgeLabel, setMaxAgeLabel] = React.useState("");
    const [userTypeLabel, setUserTypeLabel] = React.useState("");
    const [organizationLabel, setOrganizationLabel] = React.useState("");
    const [championLabel, setChampionLabel] = React.useState("");
    const [attributeLabel, setAttributeLabel] = React.useState("");
    const [regionLabel, setRegionLabel] = React.useState("");

    const handleShowAdvancedSearch = (event) => {
        setShowAdvancedSearch(true);
    };
    const handleMinRankLabel = (event) => {
        setMinRankLabel(event.target.value);
    };
    const handleMaxRankLabel = (event) => {
        setMaxRankLabel(event.target.value);
    };
    const handleRoleLabel = (event) => {
        setRoleLabel(event.target.value);
    };
    const handleMinAgeLabel = (event) => {
        setMinAgeLabel(event.target.value);
    };
    const handleMaxAgeLabel = (event) => {
        setMaxAgeLabel(event.target.value);
    };
    const handleUserTypeLabel = (event) => {
        setUserTypeLabel(event.target.value);
    };
    const handleOrganizationLabel = (event) => {
        setOrganizationLabel(event.target.value);
    };
    const handleChampionLabel = (event) => {
        setChampionLabel(event.target.value);
    };
    const handleAttributeLabel = (event) => {
        setAttributeLabel(event.target.value);
    };
    const handleRegionLabel = (event) => {
        setRegionLabel(event.target.value);
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
        <Grid item>
            <Button onClick={handleShowAdvancedSearch}
            >Advanced Search</Button>
        </Grid>
        {showAdvancedSearch && <Grid container justify="center">
            <Grid item>
                <FormGroup row >
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Min Rank</InputLabel>
                        <Select
                            labelId="minRanks"
                            id="minimumRanks"
                            onClick={handleMinRankLabel}
                            value={minRankLabel}
                        >
                            <MenuItem value={"Rank1"}>Rank1</MenuItem>
                            <MenuItem value={"Rank2"}>Rank2</MenuItem>
                            <MenuItem value={"Rank3"}>Rank3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControlSmallL}>
                        <TextField
                            onChange={handleMinAgeLabel}
                            id="minimum age"
                            label="Min Age"
                        />
                    </FormControl>
                    <FormControl style={{top: "21px", left: "10px"}}>to</FormControl>
                    <FormControl className={classes.formControlSmallR}>
                        <TextField
                            onChange={handleMaxAgeLabel}
                            id="maximum age"
                            label="Max Age"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            onChange={handleChampionLabel}
                            id="champion"
                            label="Champion"
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup row>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Max Rank</InputLabel>
                        <Select
                            labelId="maxRanks"
                            id="maximumRanks"
                            onClick={handleMaxRankLabel}
                            value={maxRankLabel}
                        >
                            <MenuItem value={"Rank1"}>Rank1</MenuItem>
                            <MenuItem value={"Rank2"}>Rank2</MenuItem>
                            <MenuItem value={"Rank3"}>Rank3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                        <Select
                            labelId="userType"
                            id="userType"
                            onClick={handleUserTypeLabel}
                            value={userTypeLabel}
                        >
                            <MenuItem value={"UserType1"}>Yes, I play LOL</MenuItem>
                            <MenuItem value={"UserType2"}>League of</MenuItem>
                            <MenuItem value={"UserType3"}>Lyour mom</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            onChange={handleAttributeLabel}
                            id="attributes"
                            label="Attribute"
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup row>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="roles"
                            id="roles"
                            onClick={handleRoleLabel}
                            value={roleLabel}
                        >
                            <MenuItem value={"Role1"}>give you up</MenuItem>
                            <MenuItem value={"Role2"}>let you down</MenuItem>
                            <MenuItem value={"Role3"}>run around</MenuItem>
                            <MenuItem value={"Role4"}>desert you</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Organization</InputLabel>
                        <Select
                            labelId="organizations"
                            id="organizations"
                            onClick={handleOrganizationLabel}
                            value={organizationLabel}
                        >
                            <MenuItem value={"Team1"}>TeamLiquid</MenuItem>
                            <MenuItem value={"Team2"}>Another, less cool team</MenuItem>
                            <MenuItem value={"Team3"}>Another, even lesser cool team</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Region</InputLabel>
                        <Select
                            labelId="region"
                            id="region"
                            onClick={handleRegionLabel}
                            value={regionLabel}
                        >
                            <MenuItem value={"Region1"}>NA</MenuItem>
                            <MenuItem value={"Region2"}>Asia</MenuItem>
                            <MenuItem value={"Region3"}>Europe</MenuItem>
                        </Select>
                    </FormControl>
                </FormGroup>
            </Grid>
        </Grid>}
    </Grid>

}

export default SearchPanel;