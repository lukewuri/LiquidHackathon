import Button from '@material-ui/core/Button';
import TabPanels from './TabPanel';
import React from "react";

function HomePage() {
    return (
        <div className="HomePage" style={{minHeight: "100vh", backgroundColor: "#d9ddde"}}>
            <TabPanels />
        </div>
    );
}

export default HomePage;
