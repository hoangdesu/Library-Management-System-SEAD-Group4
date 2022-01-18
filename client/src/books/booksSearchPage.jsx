import Slider from 'react-slick';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/homepage.css';
import React, { useRef, useState } from "react";

export default function BooksSearchPage() {
  const [getResult, setGetResult] = useState(null);
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
  };

  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">View Jobs</div>
        <div className="card-body">
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
        </div>
      </div>
    </div>
  );
}
