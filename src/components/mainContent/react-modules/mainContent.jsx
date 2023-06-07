import React from "react";
import Number from "./number";
import Buttons from "./buttons";
import "../css-modules/style.mainContent.css"

const MainContent = () => {
    return <div className="mainContent">
        <Number />
        <Buttons />
    </div>
}

export default MainContent;