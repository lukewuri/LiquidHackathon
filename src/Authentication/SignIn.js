import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
        backgroundColor: theme.palette.secondary.main
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
        boxShadow: "10px gray",
    },
    register: {
        marginBottom: "20px"
    }
}));

export default function SignIn(props) {
    const classes = useStyles();
    const {show, showRegistrationFun, showSignInFun} = props;

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    if(!show) {
        return null;
    }
    return (
        <Modal open={show}>
        <Container component="main" maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        onChange={handleChangeEmail}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onChange={handleChangePassword}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={()=> {
                            showRegistrationFun(false);
                            showSignInFun(false);
                            AccountAuthentication.loginAccount(email, password);
                        }}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="Secondary"
                        className={classes.register}
                        onClick={()=> {
                            showRegistrationFun(true);
                            showSignInFun(false);
                            AccountAuthentication.registerAccount(email, password);
                        }}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </Container>
        </Modal>
    );
}