import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Case.scss'
import ScrollToTopOnMount from '../../ScrollToTop';

const Case = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animations in milliseconds

        });
    }, []);
    return (
        <div className='case-study-main-body'>
            <ScrollToTopOnMount/>
            <div className="study-sub-body">
                <div className="study-headings">
                    <h3 data-aos="fade-up">
                        What We Did
                    </h3 >
                    <h1 data-aos="fade-up">Our Case Studies</h1>
                </div>

                <div className="container-fluid">
                    <div className="row case-card-wrapper">
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                            <div className="case-study-card">
                                <div className="study-card-img">
                                    <img src="/Images/case-image-1.jpg" alt="" />
                                </div>
                                <div className="card-description">
                                    <h1>Artable Interio</h1>
                                    <p>Responsive Website</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">    <div className="case-study-card">
                            <div className="study-card-img">
                                <img src="/Images/case-image-2.jpg" alt="" />
                            </div>
                            <div className="card-description">
                                <h1>Thara Cart</h1>
                                <p>E-Commerce Website & Mobile App</p>
                            </div>
                        </div></div>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">    <div className="case-study-card">
                            <div className="study-card-img">
                                <img src="/Images/case-image-3.jpg" alt="" />
                            </div>
                            <div className="card-description">
                                <h1>Watarain</h1>
                                <p>Mobile Application & Website</p>
                            </div>
                        </div></div>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                            <div className="case-study-card">
                                <div className="study-card-img">
                                    <img src="/Images/case-image-4.jpg" alt="" />
                                </div>
                                <div className="card-description">
                                    <h1>Redolent</h1>
                                    <p>UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Case