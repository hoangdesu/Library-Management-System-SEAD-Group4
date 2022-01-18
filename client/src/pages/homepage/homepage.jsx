import React, { useState } from "react";
import Slider from 'react-slick';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/homepage.css';
import Card from './card';
import Feature from './feature';

export default function Homepage() {
    const [title, setTitle] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="jumbotron1">
                <h1 className="display-5">RMIT Vietnam Library</h1>
                <hr className="my-4" />
                <p className="lead">
                    The library houses over 700,000 offline and online resources
                    and hosts several archives and digital exhibitions. It is
                    one of the largest English language libraries in Vietnam.
                </p>
            </div>

            <div className="div1 mt-5">
                <h2 className="display-6 mb-4">
                    Search for the books and resources you need
                </h2>

                <div className="search-container App">
                    <form action="/homepage">
                        <input
                            type="text"
                            placeholder="Search the library..."
                            name="search"
                            className="searchBox rounded-pill"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="searchBt rounded-pill border-0"
                            onSubmit={handleSubmit}
                        >
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
                    <div className="col">
                        <Feature
                            title="Log into your library account"
                            content="Log in to access your borrowing record, and to find resources."
                        />
                    </div>
                    <div className="col">
                        <Feature
                            title="Chat to a librarian"
                            content="Ask about how the library operates and find out more about its collections"
                        />
                    </div>
                    <div className="col">
                        <Feature
                            title="Consult with a Librarian"
                            content="Get help with assignments and research, including subject searches."
                        />
                    </div>
                    <div className="col">
                        <Feature
                            title="Book a meeting room"
                            content="Book meeting rooms for groups inside our libraries."
                        />
                    </div>
                </div>
            </div>

            <div className="jumbotron2 card bg-dark text-white mt-5">
                <img className="card-img" src="library.png" alt="Card image" />
                <div className="card-img-overlay">
                    <div>
                        <h5 className="card-title display-6">
                            Online resources
                        </h5>
                        <p className="card-text lead">
                            Find databases, subject guides, video and audio to
                            help you with your work.
                        </p>
                        <button className="button rounded-pill border-0">
                            Access the resources
                        </button>
                    </div>
                </div>
            </div>

            <div className="div1 mt-5">
                <h2 className="display-6">Library services and help</h2>
                <br />
                <Slider {...settings}>
                    <Card
                        title="Study support"
                        content="The library provides students with a variety of services to enhance your learning and teaching experience at 
                        RMIT Vietnam."
                        src="https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/images/stock/stock-square/two-students-laptop-square%20(1).jpg"
                    />
                    <Card
                        title="Teaching support"
                        content="The Library supports you and your students with a variety of services to enhance your teaching."
                        src="https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/images/stock/student-studying-notes-square.jpg"
                    />
                    <Card
                        title="Research support"
                        content="Your Research Librarian offers research consultations and workshops to support learning and teaching at RMIT."
                        src="https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/images/stock/lecturer-square.jpg"
                    />
                </Slider>
            </div>

            <div className="card mb-3 div1 mt-5">
                <div className="row about-us">
                    <div className="col-md-6\">
                        <div className="card-body">
                            <h5 className="card-title display-6">About Us</h5>
                            <p className="card-text lead">
                                Meet the library team, find out about our hours
                                and locations and read our rules here.{' '}
                            </p>
                            <p className="card-text">
                                <a href="">
                                    <small className="text-muted">
                                        Discover more about the library
                                    </small>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://images.squarespace-cdn.com/content/5e948a652b575e119735fbdc/1597285163518-8V9H0ZR01NROTVI62A6G/Beanland+1.jpg?content-type=image%2Fjpeg"
                            width={400}
                            alt="..."
                        />
                    </div>
                </div>
            </div>

            <div className="jumbotron3">
                <h5 className="lead">
                    <strong>Contact Us</strong>
                </h5>
                <div className="row row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="pt-3">
                            <i className="fa fa-facebook-f fa-lg pr-3" />
                            <a href="" className="text-dark">
                                Follow us on Facebook
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <i className="fa fa-youtube fa-lg pr-3" />
                            <a href="" className="text-dark">
                                Our YouTube channel
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <i className="fa fa-twitter fa-lg pr-3" />
                            <a href="" className="text-dark">
                                Our Twitter channel
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <i className="fa fa-map-marker fa-lg pr-3" />
                            <a href="" className="text-dark">
                                Visit us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
