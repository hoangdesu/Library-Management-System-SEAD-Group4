import React from "react";
import "../../styles/homepage.css"

export default function Card(props) {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={props.src} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <button className="button rounded-pill border-0">See more details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}