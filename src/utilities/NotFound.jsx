import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';
import Dots from "../backgrounds/Dots";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="section">
            <div className="section-background">
                <Dots />
            </div>
            <div className="section-foreground">
                <div className="notfound__container">

                    <div className="notfound__content">
                        <div className="notfound__code">404</div>
                        <div className="notfound__title">Not Found</div>
                    </div>

                    <div className="notfound__actions">
                        <button
                            className="notfound__btn"
                            onClick={() => navigate("/")}
                        >
                            Go to Home
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotFound;