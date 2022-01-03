import React from "react";

import "../../styles/homepage.css"

export default function Homepage() {
    return (
        <div>
            <div className="jumbotron1">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>

            <div className="div1">
                <h2>Search for the books and resources you need</h2>

            </div>
        </div>
    )
}