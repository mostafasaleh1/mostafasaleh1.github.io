import React from "react";
import RightMainComponent from "./components/primary/rightmaincomponent/RightMainComponent";
import LeftMainComponent from "./components/primary/leftmaincomponent/LeftMainComponent";
import "./maincontainer.css";

const container = () => {
    return (
        <div className="cv-container">
            <LeftMainComponent />
            <RightMainComponent />
        </div>
    );
};

export default container;
