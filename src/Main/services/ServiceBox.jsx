import React from "react";
import "./services.css";

const ServiceBox = (props) => {
    return (
        <div className="services-box">
            {props.logo}
            <h3>{props.h3Content}</h3>
            <p>{props.pContent}</p>
            <a href={props.readMoreLink} className="btn" type="button" title="Read More">Read More</a>
        </div>
    );
}
export default ServiceBox;