import React, { useEffect } from 'react'
import './ServiceCunsult.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from '../Index/Footer/Footer'
import Navbar from '../Navbar/Navbar';
import ScrollToTopOnMount from '../ScrollToTop';
import { Link } from 'react-router-dom';
const ServiceCunsult = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,

        });
    }, []);
    return (
        <div className='service-cunsult-main-body'>
            <ScrollToTopOnMount/>
            <div className="services-hero">
                <Navbar />
                <div className="service-contet-wrapper">
              <div className="service-page-main-heading">
              <h1 data-aos="fade-right">Our Services</h1>
              </div>
                    <div className="service-content">
                   
                        <p data-aos="fade-left">Customized Technology Solutions for Diverse Industries</p>
                    </div>
                </div>
            </div>
            <div className="software-lists">
                <h4 data-aos="fade-up">CORE SERVICES</h4>
                <h1 data-aos="fade-up">Core Software Capabilities</h1>
                <div className="row serivice-card-wrapper">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>Mobile App Development</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>Web App Development</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>CRM & ERP Systems</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>Bespoke Database</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>Customer Portal Softwares</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>IoT Softwares</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>AI & Machine Learning</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>Metaverse Development</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>S/W & H/W Integration</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>Digital Commerce</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>AR & VR</span></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card" data-aos="fade-up"><span>RPA</span></div>
                    </div>
                </div>
            </div>

            <section>
                <div className="services-industry-container">
                    <div className="services-industry-headings">
                        <h3 data-aos='fade-up'>SERVICES & INDUSTRIES</h3>
                        <h1 data-aos='fade-up'>Complementary Software Services & Expert Industries</h1>
                    </div>

                    <div className="container-fluid">

                        <div className="row g-0 service-industry-rows">

                            <div className="col-lg-12">
                                <div className="service-industry-card-heading">
                                    <h1>Complementary Services</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 " data-aos='fade-right'>
                                <div className="service-industry-card-left">
                                    <img src="/Images/Complementary Services - Pic.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos='fade-left'>
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list">
                                        <span>Support & Maintenance</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Security Testing</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Hosting & Migration</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Software Project Rescue</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>QA & Testing Services</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row g-0 service-industry-rows">

                            <div className="col-lg-12">
                                <div className="service-industry-card-heading">
                                    <h1>Specialist Software Services</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos='fade-right'>
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list">
                                        <span>Legacy Modernisation</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Enterprice IT & Outsourcing</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>UI/UX Design Services</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Software Consultancy</span>
                                    </div>
                                    <div className="service-industry-card-list">
                                        <span>Cloud Computing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos='fade-left'>
                                <div className="service-industry-card-left">
                                    <img src="/Images/Specialist Software Services - Pic.jpg" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="row g-0 service-industry-rows service-industry-rows3 ">

                            <div className="col-lg-12">
                                <div className="service-industry-card-heading">
                                    <h1>Our Expert Industries</h1>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" >
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1000" >
                                        <span>Financial Services</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1500">
                                        <span>Retail & E-Commerce</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="2000">
                                        <span>Hospitality</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="2500">
                                        <span>Non-Profits & SME's</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="3000">
                                        <span>Healthcare & Construction</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="3500">
                                        <span>Education & Training</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" >
                                <div className="service-industry-card-right">
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1000">
                                        <span>Sports & Leisure</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="1500">
                                        <span>Government & Public Sectors</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="2000">
                                        <span>Travel & Tourism</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="2500">
                                        <span>Insurance</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="3000">
                                        <span>Automotive</span>
                                    </div>
                                    <div className="service-industry-card-list" data-aos='fade-up' data-aos-duration="3500">
                                        <span>Logistics</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <div className="consultation-section">
                <div className="service-cunsultation-card">
                    <div className="card-deatils">
                        <div className="card-headings">
                            <p data-aos='fade-right'>24x7 Support</p>
                            <h1 data-aos='fade-right'>NEED A CONSULTATION?</h1>
                        </div>
                        <div className="cunsult-card-btn" data-aos='fade-left'>
                            <button ><Link to='/contact' className='link'>Contact Us</Link></button>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />


        </div>
    )
}

export default ServiceCunsult
