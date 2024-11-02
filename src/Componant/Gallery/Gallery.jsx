import React, { useEffect, useState } from 'react'
import Footer from '../Index/Footer/Footer'
import './Gallery.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar'
import ScrollToTopOnMount from '../ScrollToTop';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Gallery = () => {
 const [animate, setAnimate] = useState([false, false, false, false, false, false]);
 useEffect(() => {
  AOS.init({
      duration: 1000,
  });
}, []);
  useEffect(() => {
    const timers = animate.map((_, index) =>
      setTimeout(() => {
        setAnimate((prev) => {
          const newAnimate = [...prev];
          newAnimate[index] = true;
          return newAnimate;
        });
      }, index * 2000) 
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '200px',

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                centerPadding: '0px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerPadding: '0px',
              },
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '0px',
              },
            },
          ],
      };
  return (
    <div className='gallery-main-body'>
      <ScrollToTopOnMount/>
        <div className="gallery-sub-body">
          <Navbar/>
          <div className="gallery-banner-heading">
            <h1 data-aos="fade-up">GALLERY
            </h1>
          </div>



        </div>

        <div className="container-fluid galley-photos-collage">
        <div className="row">
        <div className="col-12 text-left mb-3 title" data-aos="fade-up">Life At First Logic Meta Lab</div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="rect1 mb-3">
            <div className={`overlay ${animate[0] ? 'animate' : ''}`}>
              <img src="/Images/IMG-20240829-WA0003.jpg" alt="Overlay 1" />
            </div>

            <div  className='image-fixed'>
            <img src="/Images/With the amazing team of Leadz Study Abroad at LSA ERP launching ceremony held at Alappuzha, Kerala.@leadzstudyabroad.webp" alt="Student 1" />
            </div>
           
          </div>
          <div className="rect2">
            <div className={`overlay ${animate[1] ? 'animate' : ''}`}>
              <img src="/Images/IMG-20240829-WA0004.jpg" alt="Overlay 2" />
            </div>
            <div  className='image-fixed'>
            <img src="/Images/insta-6.webp" alt="Student 1" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="rect3">
            <div className={`overlay ${animate[2] ? 'animate' : ''}`}>
              <img src="/Images/gallery-1.png" alt="Overlay 3" />
            </div>
            <div  className='image-fixed-rect-3'>
            <img src="/Images/insta-2.webp" alt="Student 1" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="rect4 mb-3">
            <div className={`overlay ${animate[3] ? 'animate' : ''}`}>
              <img src="/Images/insta-6 (2).webp" alt="Overlay 4" />
            </div>
            <div  className='image-fixed'>
            <img src="/Images/insta-feed-02.jpg" alt="Student 1" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="rect5">
                <div className={`overlay ${animate[4] ? 'animate' : ''}`}>
                  <img src="/Images/Snapinsta.app_274527981_153698190381137_8589661711866786302_n_1080.jpg" alt="Overlay 5" />
                </div>
                <div  className='image-fixed'>
            <img src="/Images/Snapinsta.app_274555757_125136730051414_3195572079925984283_n_1080.jpg" alt="Student 1" />
            </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rect6">
                <div className={`overlay ${animate[5] ? 'animate' : ''}`}>
                  <img src="/Images/Snapinsta.app_163642908_496129034885091_4896834591371361270_n_1080.jpg" alt="Overlay 6" />
                </div>
                <div  className='image-fixed'>
            <img src="/Images/Snapinsta.app_163990824_2189590074504962_5377130991368493285_n_1080.jpg" alt="Student 1" />
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>



        <div className="gallery-carousel">
<div className="carousel-body">
<Slider {...settings}>
      <div>
      <div className="carousel-cards">
<img src="/Images/With the amazing team of Leadz Study Abroad at LSA ERP launching ceremony held at Alappuzha, Kerala.@leadzstudyabroad.webp" alt="" />
      </div>
      </div>
      <div>
        <div className="carousel-cards">
        <img src="/Images/Snapinsta.app_274527981_153698190381137_8589661711866786302_n_1080.jpg" alt="" />
      </div>
      </div>
      <div>
      <div className="carousel-cards">
      <img src="/Images/insta-6.webp" alt="" />
        </div>
      </div>
      <div>
      <div className="carousel-cards">
      <img src="/Images/Snapinsta.app_163642908_496129034885091_4896834591371361270_n_1080.jpg" alt="" />
        </div>
      </div>

 </Slider>
</div>
</div>
    </div>




    <div className="need-cunsultation-gallery">
        <div className="consultation-card">
            <h3>We are here to answer your questions 24/7 </h3>
            <h1>NEED A CONSULTATION?</h1>
          <div className="contact-btn">
         <Link to='/contact'> <button>Contact Us</button></Link>
          </div>
        </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Gallery
