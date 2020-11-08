import TabPanel from './TabPanel';
import React from "react";
import Background from "./assets/LiquidHacksBackground.png";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0e2240',
        },
        secondary: {
            main: '#FFFFFF',
        },
    }
});


import {BrowserRouter as Router, Switch} from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage"
             style={{minHeight: "100vh", backgroundImage: "url(" + Background + ")", backgroundSize: "cover"}}>
            <Router>
                <Switch>
                    <TabPanel/>
                </Switch>
            </Router>
        </div>
    );
}

export default HomePage;
