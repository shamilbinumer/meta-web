import  { useEffect,   } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import './Hero.scss';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    
    });
  }, []);
//   const sliderRef = useRef(null);
//   var settings = {
//     dots: false,
//     infinite: true,
//     autoplay:true,
//     speed: 500,
//     slidesToShow: 1,
// arrows:false,
//     slidesToScroll: 1,

//   };

  
  return (
    <div className='hero-main-body'>
      <div className="hero-sub-body">
        <Navbar/>
     <div className="container-fluid">
      <div className="row hero-row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="banner-left-side">
<div className="left-side-shape"  data-aos="fade-right">
  <img src="/Images/Banner Shape.png" alt="" />
  <div className="shape-contents">

    <h3>Welcome To First Logic Meta Lab</h3>
    <h1>Innovative Solutions
    for a Changing World</h1>
    <p>Our user-centered design approach creates software solutions that are easy to use and deliver maximum impact. Our focus on user experienceensure that our software solutions meet the needs of both businesses and end-users.</p>

<div className="get-details">
<button><Link to='/aboutPage' style={{textDecoration:"none",color:"white"}}>Get Details</Link></button>
</div>
  </div>
</div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="banner-right-side">
        <div className="right-side-img" data-aos="fade-left">
    <img src="/Images/Banner Picture.png" alt="" />
   </div>
        {/* <Slider {...settings}>
      <div>
  
      </div>
      <div>
      <div className="right-side-img">
    <img src="/Images/Banner Picture.png" alt="" />
   </div>
      </div>
      <div>
      <div className="right-side-img">
    <img src="/Images/Banner Picture.png" alt="" />
   </div>
      </div>


    </Slider> */}
            </div>
        </div>
      </div>
     </div>
     
      </div>


    </div>
  );
};

export default Hero;