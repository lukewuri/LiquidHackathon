import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Account from "../api-clients/Account";

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
    },
    register: {
        marginTop: "20px",
        marginBottom: "20px"
    },
    formControl: {
        minWidth: 120,
        width: "100%",
        marginTop: "10px",
    }
}));

export default function EditModal(props) {
    const classes = useStyles();
    const {show, account, showEditModalToggle} = props;


    const [accolades, setAccolades] = React.useState(account?.accolades);
    const [accountType, setAccountType] = React.useState(account?.accountType);
    const [attributes, setAttributes] = React.useState(account?.attributes);
    const [openToOffers, setOpenToOffers] = React.useState(account?.openToOffers);
    const [playerType, setPlayerType] = React.useState(account?.playerType);
    const [position, setPosition] = React.useState(account?.position);
    const [socialLinks, setSocialLinks] = React.useState(account?.socials);
    const [teamOrganization, setTeamOrganization] = React.useState(account?.teamOrganization);
    const [education, setEducation] = React.useState(account?.educationInstitution);


    const handleChangeAccolades = (event) => {
        setAccolades(event.target.value);
    };
    const handleChangeAccountType = (event) => {
        setAccountType(event.target.value);
    };
    const handleChangeAttributes = (event) => {
        setAttributes(event.target.value);
    };
    const handleChangeOpenToOffers = (event) => {
        setOpenToOffers(event.target.value);
    };
    const handleChangePlayerType = (event) => {
        setPlayerType(event.target.value);
    };

    const handleChangePosition = (event) => {
        setPosition(event.target.value);
    };

    const handleChangeSocialLinks = (event) => {
        setSocialLinks(event.target.value);
    };

    const handleChangeTeamOrganization = (event) => {
        setTeamOrganization(event.target.value);
    };
    const handleChangeEducation = (event) => {
        setEducation(event.target.value);
    };

    const handleUpdateAccount = () => {

        console.log("::register called")
        const newAccount = {
            "videos": account?.videos,
            "email": account?.email,
            "mercuryUsername": account?.mercuryUsername,
            "lastName": account?.lastName,
            "teamOrganization": teamOrganization,
            "summonerName": account?.summonerName,
            "attributes": attributes,
            "leagueSummonerID": account?.leagueSummonerID,
            "playerType": playerType,
            "firstName": account?.firstName,
            "educationInstitution": education,
            "accolades": accolades,
            "accountType": accountType,
            "openToOffers": openToOffers,
            "rankedStats": account?.rankedStats,
            "socials": socialLinks,
            "serverRegion": account?.serverRegion,
            "profileIconId": account?.profileIconId,
            "encryptedPassword": account?.encryptedPassword,
            "position": position,
            "birthday": account?.birthday
        }
        Account.updateAccount(newAccount);
    };

    if (!show) {
        return null;
    }
    return (
        <Modal open={show}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Edit Account
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            onChange={handleChangeAccolades} //Textfield
                            variant="outlined"
                            margin="normal"
                            required
                            id="accolade"
                            label="Accolades"
                            name="accolades"
                            autoFocus
                            fullWidth
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Account Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={accountType}
                                onChange={handleChangeAccountType}
                                displayEmpty
                            >
                                <MenuItem value={"Player"}>Player</MenuItem>
                                <MenuItem value={"Coach"}>Coach</MenuItem>
                                <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            onChange={handleChangeAttributes} //Textfield
                            variant="outlined"
                            margin="normal"
                            required
                            id="attributes"
                            label="Attributes"
                            name="attributes"
                            autoFocus
                            fullWidth
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Account Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={accountType}
                                onChange={handleChangeAccountType}
                                displayEmpty
                            >
                                <MenuItem value={"Player"}>Player</MenuItem>
                                <MenuItem value={"Coach"}>Coach</MenuItem>
                                <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Player Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={accountType}
                                onChange={handleChangePlayerType}
                                displayEmpty
                            >
                                <MenuItem value={"Pro"}>Pro</MenuItem>
                                <MenuItem value={"Coach"}>Amateur</MenuItem>
                                <MenuItem value={"Collegiate"}>Collegiate</MenuItem>
                                <MenuItem value={"Teamless"}>Teamless</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Region
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={position}
                                onChange={handleChangePosition}
                                displayEmpty
                            >
                                <MenuItem value={"Top"}>Top</MenuItem>
                                <MenuItem value={"Jungle"}>Jungle</MenuItem>
                                <MenuItem value={"Mid"}>Mid</MenuItem>
                                <MenuItem value={"ADC"}>ADC</MenuItem>
                                <MenuItem value={"Support"}>Support</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            onChange={handleChangePosition} //Dropdown
                            variant="outlined"
                            margin="normal"
                            required
                            id="email"
                            label="Position"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeSocialLinks}
                            variant="outlined"
                            margin="normal"
                            required
                            name="Socials"
                            label="Socials"
                            id="socials"
                            fullWidth
                        />
                        <TextField
                            onChange={handleChangeTeamOrganization}
                            variant="outlined"
                            margin="normal"
                            required
                            id="teamorganization"
                            label="Team Organization"
                            name="Team Organization"
                            autoFocus
                            fullWidth
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                Level
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                // value={level}
                                // onChange={handleChangeLevel}
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
                        <div style={{display: "flex",
                            justifyContent: "space-between",}}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    showEditModalToggle()
                                }}
                                className={classes.register}
                            >
                                Cancel
                            </Button>
                            <Button

                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    // showRegistrationFun(false);
                                    // showSignInFun(false);
                                    handleUpdateAccount();
                                }}
                                className={classes.register}
                            >
                                Update
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </Modal>
    );
}