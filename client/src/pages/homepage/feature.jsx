import React from "react";

const style = {
    color: "black"
}

export default function Feature(props) {
    return (
        <div className="card border-0 text-center">
            <img src={props.src} className="card-img-top" alt="image unavailable" />
            <div className="card-body">
                <h5 className="card-title" ><a href="" style={style}>{props.title}</a></h5>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    )
}