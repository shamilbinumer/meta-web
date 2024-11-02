import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.scss'
const Service = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // duration of animations in milliseconds
        
        });
      }, []);
  return (
    <div className='service-main-body'>
     <div className="service-sub-body">
    
        <div className="Service-main-headings">
               <h3 data-aos="fade-up">Our Services</h3>
               <h1 data-aos="fade-up">We Offer a Wide Variety of IT Services</h1>
        </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
           <div className="service-card" data-aos="fade-up">
             <div className="card-description-section">
               <div className="card-descpiption">
                <div className="service-card-heading-wrapper">
                <h1>IT Development & Management</h1>
                </div>
                <p>We utilize cutting-edge technologies and development methods to create scalable software applications, alongside comprehensive infrastructure, security, and maintenance solutions. </p>
               </div>
             </div>
             <div className="card-image-section">
                <img src="/Images/1 IT Development.jpg" alt="" />
             </div>
           </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">

            <div className="card-image-section">
                <img src="/Images/Cybersecurity.jpg" alt="" />
             </div>
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>Cybersecurity Services</h1>
                </div>
                <p>In today's digital age, safeguarding sensitive data and maintaining IT system integrity is crucial. Our comprehensive cybersecurity services protect your business from diverse cyber threats.</p>
               </div>
             </div>
         
           </div>
                </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>Data Security</h1>
                </div>
                <p>Offers end-to-end encryption, regular backups, and continuous monitoring to ensure your data is secure and compliant with industry standards.</p>
               </div>
             </div>
             <div className="card-image-section">
                <img src="/Images/3 Data Security.jpg" alt="" />
             </div>
           </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
   
             <div className="card-image-section">
                <img src="/Images/4 Business Reform.jpg" alt="" />
             </div>
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>Business Reform</h1>
                </div>
                <p>Include process automation, data analytics, and customized software solutions to enhance efficiency and productivity, and drive growth.</p>
               </div>
             </div>
           </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>IT Consultancy</h1>
                </div>
                <p>Stay ahead of the competition with cutting-edge technology solutions, effective risk management, and cost-effective strategies for IT infrastructure development.</p>
               </div>
             </div>
             <div className="card-image-section">
                <img src="/Images/5 IT Consultancy.jpg" alt="" />
             </div>
           </div>
                </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card" data-aos="fade-up">
        
             <div className="card-image-section">
                <img src="/Images/6 QA & Testing.jpg" alt="" />
             </div>
             <div className="card-description-section">
               <div className="card-descpiption">
               <div className="service-card-heading-wrapper">
                <h1>QA & Testing</h1>
                </div>
                <p>We employs the latest tools and methodologies to ensure that your software is bug-free, meets industry standards, and delivers a superior user experience.</p>
               </div>
             </div>
           </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Service