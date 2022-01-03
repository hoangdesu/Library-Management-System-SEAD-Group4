import React from "react";
import Slider from "react-slick";

import "../../styles/homepage.css"

export default function Homepage() {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500
    };

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

            <div className="jumbotron2 card bg-dark text-white mt-5">
                <img className="card-img" src="library.png" alt="Card image" />
                <div className="card-img-overlay">
                    <div >
                        <h5 className="card-title display-6">Card title</h5>
                        <p className="card-text lead">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>

            </div>

            <div className="div1 mt-5">
                <h2>Library services and help</h2><br />
                <Slider {...settings} >
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>1</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>2</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>3</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>4</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>5</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>

            <div className="card mb-3 div1 mt-5" >
                <div className="row g-0">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title display-6">About Us</h5>
                            <p className="card-text lead">Meet the library team, find out about our hours and locations and read our rules here. </p>
                            <p className="card-text"><a href=""><small className="text-muted">Discover more about the library</small></a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.latrobe.edu.au/galleries/sydney-campus-library/library-sydney02.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>

                </div>
            </div>

            <div className="jumbotron1">
                Contact Us
            </div>
        </div >

    )
}