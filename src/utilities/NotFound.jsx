import React from "react";
import './NotFound.css';
import Dots from "../backgrounds/Dots";

const NotFound = () => {
    return (
        <div className="section">
           <div className="section-background">
            <Dots/>
           </div>
           <div className="section-foreground">
            404
           </div>
        </div>
    )
}

export default NotFound;