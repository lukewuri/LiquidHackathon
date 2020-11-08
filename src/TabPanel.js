import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Toolbar} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import BannerImage from "./assets/Team_liquid_logo_2017.png";

import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

import SearchPanel from "./SearchPanel";
import LeaderboardPanel from "./Leaderboard";
import SignIn from "./Authentication/SignIn";
import Registration from "./Authentication/Registration";
import Profile from "./Profile";

import {createBrowserHistory} from 'history'


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{height: "100%"}}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    toolbar: {
        float: "left",
        height: "50px"
    },
    leftHeaderItems: {
        float: "left",
        height: "30px",
        padding: "10px"
    },
    appBar: {
        backgroundColor: "#182F52"
    },
    liquidTitle: {
        marginRight: "20px"
    }

}));

export default function SimpleTabs(props) {
    const [loggedInUsername, setLoggedInUsername] = React.useState("");
    const history = useHistory();


    const handleChangeUsername = (username) => {
        setLoggedInUsername(username);
    };
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [showSignInModal, setShowSignInModal] = React.useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log("::hnn", history);
        history.push("");
    };

    const handleSignInClick = (val) => {
        setShowSignInModal(val);
    }

    const handleRegistrationClick = (val) => {
        setShowRegistrationModal(val);
    }

    return (
        <div className={classes.root}>

            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <img className={classes.leftHeaderItems} src={BannerImage}/>
                    <Typography variant="h6" className={classes.liquidTitle}>
                        teamliquid
                    </Typography>
                    <Grid
                        justify="space-between"
                        container
                        spacing={24}
                    >
                        <Grid justify="space-between" item>
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                                  indicatorColor="secondary">
                                <Tab label="news" {...a11yProps(0)} />
                                <Tab label="leaderboard 1" {...a11yProps(1)} />
                                <Tab label="search" {...a11yProps(2)} />
                                <Tab label="about" {...a11yProps(3)} />
                            </Tabs>
                        </Grid>
                        <Grid item>
                            {!loggedInUsername ?
                                <Button color="inherit" onClick={handleSignInClick}>Login</Button>
                                :
                                <Button color="inherit" onClick={() => {
                                    handleChangeUsername("")
                                }}>Sign Out</Button>
                            }

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <SignIn show={showSignInModal} showSignInFun={handleSignInClick}
                    showRegistrationFun={handleRegistrationClick} loginUser={handleChangeUsername}/>
            <Registration show={showRegistrationModal} showSignInFun={handleSignInClick}
                          showRegistrationFun={handleRegistrationClick}/>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LeaderboardPanel />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SearchPanel/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>

            <Route path={`/:username`}>
                <Profile loggedInUsername={loggedInUsername} setTab={setValue}/>
            </Route>

        </div>
    );
}