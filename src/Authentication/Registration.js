import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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
    }
}));

export default function Registration(props) {
    const classes = useStyles();
    const {show, showRegistrationFun, showSignInFun} = props;
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
                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
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
                            variant="outlined"
                            margin="normal"
                            required
                            id="email"
                            label="Summoner Name"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            fullWidth
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                showRegistrationFun(false);
                                showSignInFun(false);
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