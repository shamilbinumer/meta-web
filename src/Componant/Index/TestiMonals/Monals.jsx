import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Monals.scss';

const Monals = () => {
    const sliderRef = useRef(null);
    // Settings for the slider
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3, // Initial slides to show
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows:false,
        responsive: [
            {
                breakpoint: 1024, // Adjust these breakpoints as needed
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Change the number of slides to show on mobile devices
                }
            }
        ]
    };
    const handleNext = () => {
        sliderRef.current.slickNext();
      };
    
      const handlePrev = () => {
        sliderRef.current.slickPrev();
      };
    return (
        <div className='Monals-main-body'>
            <div className="monals-sub-body">
            <div className="arrowss">
   <div className="prev-arrow" onClick={handlePrev}>
                <img src="/Images/Icon next.png" alt="" />
          </div>
          <div className="next-arrow"onClick={handleNext}>
          <img src="/Images/Icon next.png" alt="" />
          </div>
   </div>
                <h1>Testimonials</h1>
                <div className="monals-carousel">

                    <div className="quets1">
                        <img src="/Images/quote black copy.png" alt="" />
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        <div>
                            <div className="testimonals-card">
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/TestPicture3.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Abu</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>First Logic Meta Lab software is efficient and user-friendly. It has greatly improved our workflow and productivity. Highly recommend!"</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonals-card">
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/TestPicture1.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Nithin</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>The support from First Logic MetaLab is exceptional. Their software is reliable and has streamlined our operations. Very satisfied!</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonals-card">
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/TestPicture2.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Amal</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>Thanks to First Logic MetaLab, our productivity has soared. The software is intuitive and powerful. Couldn't ask for more!.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="testimonals-card" >
                                <div className="card-body">
                                    <div className="profile-image">
                                        <img src="/Images/TestPicture4.jpg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h1>Shamil</h1>
                                    </div>
                                </div>
                                <div className="paragraph-section">
                                    <p>Great software and excellent customer service from First Logic Meta Lab. It has made a significant positive impact on our business</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="quets2">
                        <img src="/Images/quote black copy.png" alt="" />
                    </div>
            </div>
        </div>
    );
}

export default Monals;
