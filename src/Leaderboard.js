import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import SearchImage from "./assets/LiquidHacksMercuryLogo.png";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pfpTest from "./assets/Team_liquid_logo_2017.png";



const useStyles = makeStyles((theme) => ({
    center: {
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
    table: {

    },
}));

function createData(ranking, pfp, name, summonerName, role, rank) {
    return { ranking, pfp, name, summonerName, role, rank };
}

const rows = [
    createData(1, "url(" + pfpTest + ")", "Michael Ren", "isStupid", "cat owner", "worst"),
    createData(2, "url(" + pfpTest + ")", "Luke Wuri", "Wuri", "idk", "rank whatever"),
    createData(3, "url(" + pfpTest + ")", "Weiming", "uhhhh", "qwerty", "fjqebrnvfj"),
];

function LeaderboardPanel() {
    const classes = useStyles();
    return <Grid container
                 direction="column"
                 alignItems="center"
                 justify="center"
                 wrap="nowrap" spacing={2}
                 className={classes.bannerGrid}
    >
        <img className={classes.bannerLogo} src={SearchImage}/>
        <h1>Leaderboard 1</h1>
        <Grid item className={classes.center}>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ranking</TableCell>
                            <TableCell align="right"> </TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Summoner Name</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Rank</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.ranking}
                                </TableCell>
                                <TableCell align="right">{row.pfp}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.summonerName}</TableCell>
                                <TableCell align="right">{row.role}</TableCell>
                                <TableCell align="right">{row.rank}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>

}

export default LeaderboardPanel;