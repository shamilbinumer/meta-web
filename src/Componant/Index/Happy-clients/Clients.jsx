import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Clients.scss'
const Clients = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    autoplaySpeed: 2000,
    cssEase: "linear", // Use linear easing for smooth transitions
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='clients-main-body'>
      <div className="clients-sub-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="cilent-left">
                {/* <div className="left-heading">
      <h1>LOREM IPSUM</h1>
      </div> */}

              </div>
            </div>
            <div className="col-lg-6">
              <div className="client-right">
                <div className="clients-carousel">
                  <Slider {...settings}>
                    <div>
                      <div className="clients-card">
                        <div className="client-card-text">
                          <h1>257</h1>
                          <h3>Happy Clients</h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="clients-card">
                        <div className="client-card-text">
                          <h1>3840 </h1>
                          <h3>Cups of Coffee</h3>
                        </div>


                      </div>
                    </div>
                    <div>
                      <div className="clients-card">
                        <div className="client-card-text">
                          <h1>108 </h1>
                          <h3>Skilled Experts</h3>
                        </div>

                      </div>
                    </div>
                    <div>
                      <div className="clients-card">
                        <div className="client-card-text">
                          <h1>34365</h1>
                          <h3> Media Followers</h3>
                        </div>

                      </div>
                    </div>

                  </Slider>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients