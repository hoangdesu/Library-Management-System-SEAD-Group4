import React from "react";
import Slider from "react-slick";
import 'font-awesome/css/font-awesome.min.css';
import "../../styles/homepage.css"
import Card from "./card";
import Feature from "./feature";

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
                <h1 className="display-4">Our Library</h1>
                <hr className="my-4" />
                <p className="lead">The library houses over 700,000 offline and online resources and hosts several archives and digital exhibitions.
                    It is one of the largest English language libraries in Vietnam.</p>

            </div>

            <div className="div1 mt-5">
                <h2 className="display-6">Search for the books and resources you need</h2>

                <div class="search-container App">
                    <form action="/homepage">
                        <input type="text" placeholder="Search.." name="search" className="searchBox rounded-pill" />
                        <button type="submit" className="searchBt rounded-pill border-0"><i class="fa fa-search"></i></button>
                    </form>
                </div>

                <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
                    <div class="col">
                        <Feature title="Log into your library account" content="Log in to access your borrowing record, and to find resources." />
                    </div>
                    <div class="col">
                        <Feature title="Chat to a librarian" content="Ask about how the library operates and find out more about its collections" />
                    </div>
                    <div class="col">
                        <Feature title="Consult with a Librarian" content="Get help with assignments and research, including subject searches." />
                    </div>
                    <div class="col">
                        <Feature title="Book a meeting room" content="Book meeting rooms for groups inside our libraries." />
                    </div>
                </div>
            </div>

            <div className="jumbotron2 card bg-dark text-white mt-5">
                <img className="card-img" src="library.png" alt="Card image" />
                <div className="card-img-overlay">
                    <div >
                        <h5 className="card-title display-6">Online resources</h5>
                        <p className="card-text lead">Find databases, subject guides, video and audio to help you with your work.</p>
                        <button className="button rounded-pill border-0">Access the resources</button>
                    </div>
                </div>

            </div>

            <div className="div1 mt-5">
                <h2 className="display-6">Library services and help</h2><br />
                <Slider {...settings} >
                    <Card title="Study support" content="The library provides students with a variety of services to enhance your learning and teaching experience at 
                        RMIT Vietnam." src="http://www.teaching-matters-blog.ed.ac.uk/wp-content/uploads/2019/04/feature-6.jpg" />
                    <Card title="Teaching support" content="The Library supports you and your students with a variety of services to enhance your teaching."
                        src="https://connect-assets.prosple.com/cdn/ff/mPo4ez0v5hrH_fVdkUUvyGvXttXoYjo6krpOYKbTfmI/1567121991/public/styles/scale_890_no_upsize/public/2019-08/feature-article-how-to-study-effectively-at-uni-838x484-2019.png?itok=4yLjlYah" />
                    <Card title="Research support" content="Your Research Librarian offers research consultations and workshops to support learning and teaching at RMIT."
                        src="https://www.rmit.edu.au/content/dam/rmit/multimedia/video/youtube-images/marketing/online/flexible-study-02-1280x732.jpg" />
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

            <div className="jumbotron3">
                <h5 className="lead"><strong>Contact Us</strong></h5>
                <div class="row row-cols-lg-4 g-2 g-lg-3">
                    <div class="col">
                        <div class="pt-3"><i class="fa fa-facebook-f fa-lg pr-3" /><a href="" className="text-dark">Follow us on Facebook</a></div>
                    </div>
                    <div class="col">
                        <div class="p-3"><i class="fa fa-youtube fa-lg pr-3" /><a href="" className="text-dark">Our YouTube channel</a></div>
                    </div>
                    <div class="col">
                        <div class="p-3"><i class="fa fa-twitter fa-lg pr-3" /><a href="" className="text-dark">Our Twitter channel</a></div>
                    </div>
                    <div class="col">
                        <div class="p-3"><i class="fa fa-map-marker fa-lg pr-3" /><a href="" className="text-dark">Visit us</a></div>
                    </div>
                </div>
            </div>
        </div >

    )
}