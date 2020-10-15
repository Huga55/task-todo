import React from "react";
import img from "../../img/preloader.gif";
import c from "./Preloader.module.css";

const Preloader = (props) => {
    return(
        <div className="preloader">
            <img src={img} alt=""/>
        </div>
    );
}

export default Preloader;
