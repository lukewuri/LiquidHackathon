import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import SearchImage from "./assets/LiquidHacksMercuryLogo.png";
import BannerImage from "./assets/Team_liquid_logo_2017.png";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import ProfileTab from "./Profile/ProfileTab";


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

function Profile(props) {
    let {setTab} = props;
    setTab(-1)
    let { username } = useParams();
    console.log("::username", username);
    const classes = useStyles();
    return <ProfileTab
        username={username}
    >

    </ProfileTab>

}

export default Profile;