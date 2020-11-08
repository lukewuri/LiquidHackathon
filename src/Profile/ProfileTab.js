import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import Iron from "../assets/ranked-emblems/iron.png"
import Bronze from "../assets/ranked-emblems/bronze.png"
import Silver from "../assets/ranked-emblems/silver.png"
import Gold from "../assets/ranked-emblems/gold.png"
import Platinum from "../assets/ranked-emblems/platinum.png"
import Diamond from "../assets/ranked-emblems/diamond.png"
import Master from "../assets/ranked-emblems/master.png"
import Grandmaster from "../assets/ranked-emblems/grandmaster.png"
import Challenger from "../assets/ranked-emblems/challenger.png"

import Account from "../api-clients/Account";
import Button from "@material-ui/core/Button";

import EditModal from "../Profile/EditModal";

const RankedEmblems = "../assets/ranked-emblems/";

const mapKeyToImage = {
    "iron": Iron,
    "bronze": Bronze,
    "silver": Silver,
    "gold": Gold,
    "platinum": Platinum,
    "diamond": Diamond,
    "master": Master,
    "grandmaster": Grandmaster,
    "challenger": Challenger
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 5px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: "rgba(255, 255, 255, 0.1)"
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    rankIcon: {
        height: 150,
        width: 150,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '40px'
    },
    profileIcon: {
        height: 150,
        width: 150,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '40px'
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    let {username, loggedInUsername} = props;
    const [open, setOpen] = React.useState(true);
    const [account, setAccount] = React.useState(null);
    const [showEditModal, setShowEditModal] = React.useState(false);

    console.log()
    useEffect(() => {
        Account.getAccount(username, setAccount);

    }, [username]);

    const handleUpdateAccount = () => {

    };

    const handleEditAccount = () => {
        setShowEditModal(!showEditModal)
    };

    console.log("account::", account);
    const handleChevronClick = () => {
        setOpen(!open);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <h1 className={classes.toolbarIcon}>
                    {username}
                </h1>
                <Grid container/>
                <Button onClick={handleUpdateAccount}>Update</Button>
                {(username == account?.mercuryUsername) && <Button onClick={handleEditAccount}>Edit</Button>} //TODO GET RID OF THIS USERNAME
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleChevronClick}>
                        {open ? <ChevronLeftIcon/> : <ChevronRight/>}
                    </IconButton>
                </div>
                {account &&
                <img className={classes.profileIcon} src={"profileicon/" + account?.profileIconId + ".png"}/>}
                <Divider/>
                {account && console.log("url::", RankedEmblems + account.rankedStats.tier + ".png")}
                {account &&
                <img className={classes.rankIcon} src={mapKeyToImage[account?.rankedStats?.tier?.toLowerCase()]}/>}
                <h3>LP: {account?.rankedStats?.lp}</h3>
                <Divider/>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>

                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <EditModal show={showEditModal}/>
        </div>
    );
}