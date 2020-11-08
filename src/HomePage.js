import Button from '@material-ui/core/Button';
import TabPanels from './TabPanel';
import React from "react";
import Background from "./assets/LiquidHacksBackground.png";

function HomePage() {
    return (
        <div className="HomePage" style={{minHeight: "100vh", backgroundImage: "url(" + Background + ")", backgroundSize: "cover"}}>
            <TabPanels />
        </div>
    );
}

export default HomePage;
