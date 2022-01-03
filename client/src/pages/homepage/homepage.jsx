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

            <div className="jumbotron2 card bg-dark text-white">

                <img className="card-img" src="library.png" alt="Card image" />
                <div className="card-img-overlay">
                    <div >
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>

            </div>

            <div className="div1">Another div</div>

            <div class="carousel-item">
                <img src="..." alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                </div>
            </div>
        </div>

    )
}