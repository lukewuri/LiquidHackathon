import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloseIcon from "@material-ui/icons/Close";

import AccountAuthentication from "../api-clients/AccountAuthentication";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        top: "30px"
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        backgroundColor: "white",
        boxShadow: "10px gray"
    },
    register: {
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main
    },
    formControl: {
        minWidth: 120,
        width: "100%",
        marginTop: "10px",
    },
    close: {
        position: "relative",
        top: "-47.5px",
        right: "-190px"
    }
}));

export default function Registration(props) {
    const classes = useStyles();
    const {show, showRegistrationFun, showSignInFun} = props;


    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [summonerName, setSummonerName] = React.useState("");
    const [region, setRegion] = React.useState("NA");
    const [level, setLevel] = React.useState("Pro");


    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    };
    const handleChangeBirthday = (event) => {
        setBirthday(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeSummonerName = (event) => {
        setSummonerName(event.target.value);
    };
    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };
    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
    };

    const handleRegisterAccount = () => {

        //TODO Add code for registering
        console.log("::register called")
       AccountAuthentication.registerAccount(firstName, lastName, userName, birthday, email, password, summonerName, region, level);
    };


    if (!show) {
        return null;
    }
    return (
        <Modal open={show}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Button className={classes.close}
                            onClick={()=> {
                                showRegistrationFun(false);
                                showSignInFun(false);
                            }}>
                        <CloseIcon />
                    </Button>
                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            onChange={handleChangeFirstName}
                            variant="outlined"
                            margin="normal"
                            required
                            id="firstname"
                            label="First Name"
                            name="firstname"
                            autoComplete="firstname"
                            autoFocus
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeLastName}
                            variant="outlined"
                            margin="normal"
                            required
                            id="Last name"
                            label="Last Name"
                            name="Last name"
                            autoComplete="Last name"
                            autoFocus
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeUserName}
                            variant="outlined"
                            margin="normal"
                            required
                            id="User Name"
                            label="Username"
                            name="UserName"
                            autoComplete="Username"
                            autoFocus
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeBirthday}
                            variant="outlined"
                            margin="normal"
                            required
                            id="Birthday"
                            name="Birthday"
                            label="Birthday"
                            InputLabelProps={{shrink: true, required: true}}
                            autoComplete="Birthday"
                            autoFocus
                            type="date"
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeEmail}
                            variant="outlined"
                            margin="normal"
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangePassword}
                            variant="outlined"
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeSummonerName}
                            variant="outlined"
                            margin="normal"
                            required
                            id="email"
                            label="Summoner Name"
                            name="Summoner Name"
                            autoComplete="Summoner Name"
                            autoFocus
                            fullWidth
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Region
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={region}
                                onChange={handleChangeRegion}
                                displayEmpty
                            >
                                <MenuItem value={"NA"}>NA</MenuItem>
                                <MenuItem value={"EUW"}>EUW</MenuItem>
                                <MenuItem value={"KR"}>KR</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Level
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={level}
                                onChange={handleChangeLevel}
                                displayEmpty
                            >
                                <MenuItem value={"Pro"}>Pro</MenuItem>
                                <MenuItem value={"Amateur"}>Amateur</MenuItem>
                                <MenuItem value={"Collegiate"}>Collegiate</MenuItem>
                                <MenuItem value={"High School"}>High School</MenuItem>
                                <MenuItem value={"Middle School"}>Middle School</MenuItem>
                                <MenuItem value={"Teamless"}>Teamless</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                showRegistrationFun(false);
                                showSignInFun(false);
                                handleRegisterAccount();
                            }}
                            className={classes.register}
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </Container>
        </Modal>
    );
}