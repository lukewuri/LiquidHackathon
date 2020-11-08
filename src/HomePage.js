import Button from '@material-ui/core/Button';
import TabPanels from './TabPanel';
import React from "react";
import Background from "./assets/LiquidHacksBackground.png";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0e2240',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
});

function HomePage() {
    return (
        <ThemeProvider theme={theme}>
            <div className="HomePage" style={{minHeight: "100vh", backgroundImage: "url(" + Background + ")", backgroundSize: "cover"}}>
                <TabPanels />
            </div>
        </ThemeProvider>
    );
}

export default HomePage;
