import React, { useEffect } from 'react'
import './Employee.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Index/Footer/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollToTopOnMount from '../ScrollToTop';
const Employee = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  const TlEmployee = [
    {
      propic: "/Images/TL - 01.jpeg",
      Tlname: "Arun P P",
      TlPosition: " Team Lead"
    },
    {
      propic: "/Images/TL - 02.jpg",
      Tlname: "Muhammed Ashiq",
      TlPosition: " Team Lead"
    },
    {
      propic: "/Images/TL - 03.jpeg",
      Tlname: "Nithin P D ",
      TlPosition: "Team Lead"
    },
    {
      propic: "/Images/WhatsApp Image 2024-08-07 at 12.46.13_0217c077.jpg",
      Tlname: "Abdul Noor",
      TlPosition: "Team Lead"
    },
    {
      propic: "/Images/TL - 06.jpeg",
      Tlname: "Sneha M P ",
      TlPosition: "Team Lead"
    },
    {
      propic: "/Images/TL - 07.jpg",
      Tlname: "Shamil M K ",
      TlPosition: "Team Lead"
    },
    {
      propic: "/Images/shijuuk.jpg",
      Tlname: "Shiju U K ",
      TlPosition: "Team Lead"
    }
  ]
  const Employees = [
    {
      EmpPic: "/Images/Team 01 - Mohammed Shahin.jpg",
      EmpName: "Mohammed Shahin",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 01 - Muhammed Anfal Crop.JPG",
      EmpName: "Muhammed Anfal",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 01 - Mubashira.jpeg",
      EmpName: "Mubashira E",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 02 - Jimshad.png",
      EmpName: "Jimshad A",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 02 - Alfaz.jpeg",
      EmpName: "Alfas M E",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 02 - Shanub.jpg",
      EmpName: "Shanub P ",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 03 - Rifla.jpg",
      EmpName: "Asya Rifla K",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 03 - Arsha.jpg",
      EmpName: "Arsha M P",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 03 - Amal.png",
      EmpName: "Amal",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 03 - Aparna.jpeg",
      EmpName: "Aparna",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 04 - Shafeel.png",
      EmpName: "Mohammed Shafeel",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 04 - Salman.jpeg",
      EmpName: "Mohammed Salman",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 05 - Anshid.png",
      EmpName: "Anshidh P",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 05 - Shajeeh.jpeg",
      EmpName: "Shajeeh Sanal C H",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 05 - Ramees.jpg",
      EmpName: "Ramees",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 06 - Adil.jpeg",
      EmpName: "Mohammed Adil K",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 08 - Akshaya.jpeg",
      EmpName: "Akshaya K P",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 08 - Shamil.jpeg",
      EmpName: "Mohammed Shamil",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Team 08 - Hanna.jpeg",
      EmpName: "Fathima Hanna",
      EmpPositin: "Software Developer"
    },
    {
      EmpPic: "/Images/Web Designer - Deepak M.png",
      EmpName: "Deepak M",
      EmpPositin: "Web Designer"
    },
    {
      EmpPic: "/Images/UI UX - Serin.jpeg",
      EmpName: "Serin Johnson ",
      EmpPositin: "UI/UX Designer"
    },
    {
      EmpPic: "/Images/Tester - Nimisha.jpeg",
      EmpName: "Nimisha Simon",
      EmpPositin: " Software Tester"
    },
    {
      EmpPic: "/Images/Tester - Seethal.jpeg",
      EmpName: "Seethal B S ",
      EmpPositin: "Software Tester"
    },
    {
      EmpPic: "/Images/Content Creator - Abeen Basheer Ambat.jpg",
      EmpName: "Abeen Basheer",
      EmpPositin: " Content Creator"
    },

  ]
  return (
    <div className='employee-page-wrapper'>
      <Navbar />
      <ScrollToTopOnMount/>
      <div className="employee-body">
        {/* <Navbar/> */}
        <div className="Team-members-heading" data-aos='fade-up'>
          <h1>Team Members</h1>
        </div>
      </div>

      <div className="managers-section">
        <div className="row">
          <div className="col-lg-3" data-aos='fade-up'>
            <div className="manager-pro-card">
              <div className="pro-pic-manager">
                <img src="/Images/CEO.jpeg" alt="" />
                <div className="linkdin-link">
                  <a href="#">   <img src="/Images/IconLinkedin1.png" alt="" /></a>
                </div>
              </div>
              <div className="manager-details">
                <h4>Shajahan Aboobaker</h4>
                <h3>Chief Executive Officer</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3" data-aos='fade-up'>
            <div className="manager-pro-card">
              <div className="pro-pic-manager">
                <img src="/Images/CTO.jpeg" alt="" />
                <div className="linkdin-link">
                  <a href="#">   <img src="/Images/IconLinkedin1.png" alt="" /></a>
                </div>
              </div>
              <div className="manager-details">
                <h4>Danish KT Abbas</h4>
                <h3>Chief Technology Officer</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3" data-aos='fade-up'>      <div className="manager-pro-card">
            <div className="pro-pic-manager">
              <img src="/Images/CMO.jpeg" alt="" />

              <div className="linkdin-link">
                <a href="#">   <img src="/Images/IconLinkedin1.png" alt="" /></a>
              </div>
            </div>
            <div className="manager-details">
              <h4>Muhammed Shabeeb</h4>
              <h3>Chief Marketing Officer</h3>
            </div>
          </div></div>
          <div className="col-lg-3" data-aos='fade-up'>      <div className="manager-pro-card">
            <div className="pro-pic-manager">
              <img src="/Images/COO.jpeg" alt="" />
              <div className="linkdin-link">
                <a href="#">   <img src="/Images/IconLinkedin1.png" alt="" /></a>
              </div>
            </div>
            <div className="manager-details">
              <h4>Eesha Das</h4>
              <h3>Chief Operating Officer</h3>
            </div>
          </div></div>
        </div>
      </div>
      <div className="middle-management-section">
        <div className="row g-0">
          <div className="col-lg-3 col-md-6" data-aos='fade-up'>
            <div className="middle-management-card">
              <div className="middle-manegers-propic">
                <img src="/Images/MM - OM.jpg" alt="" />
              </div>
              <div className="middle-managers-details">
                <h1>Sarath Sasidharan</h1>
                <h3>
                  Operation Manager
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" data-aos='fade-up'>
            <div className="middle-management-card">
              <div className="middle-manegers-propic">
                <img src="/Images/MM - PM1.jpg" alt="" />
              </div>
              <div className="middle-managers-details">
                <h1>Muhammed Ashkar T</h1>
                <h3>
                  Project Manager
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" data-aos='fade-up'>
            <div className="middle-management-card">
              <div className="middle-manegers-propic">
                <img src="/Images/MM - PM2.jpg" alt="" />
              </div>
              <div className="middle-managers-details">
                <h1>Muhammed Suhail </h1>
                <h3>
                  Project Manager
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" data-aos='fade-up'>
            <div className="middle-management-card">
              <div className="middle-manegers-propic">
                <img src="/Images/IMG_1873 (1).jpg" alt="" />

              </div>
              <div className="middle-managers-details"><h1>Vishnu T</h1><h3>Business Development Manager</h3></div>
            </div>
          </div>
        </div>
        <div className="middle-manager-2-wrapper">
          <div className="row g-0">

            <div className="col-lg-4 col-md-6" data-aos='fade-up'>
              <div className="middle-management-card">
                <div className="middle-manegers-propic">
                  <img src="/Images/MM - A PM.jpeg" alt="" />
                </div>
                <div className="middle-managers-details">
                  <h1>Saranya Anand VC

                  </h1>
                  <h3>
                    Assistant Project Manager
                  </h3>
                </div>
              </div></div>
            <div className="col-lg-4 col-md-6" data-aos='fade-up'>
              <div className="middle-management-card">
                <div className="middle-manegers-propic">
                  <img src="/Images/MM - HR.jpeg" alt="" />
                </div>
                <div className="middle-managers-details">
                  <h1>Sneha T

                  </h1>
                  <h3>
                    HR Manager
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos='fade-up'>
              <div className="middle-management-card">
                <div className="middle-manegers-propic">
                  <img src="/Images/MM - Finance.jpeg" alt="" />
                </div>
                <div className="middle-managers-details">
                  <h1>Muhammed Sharjas </h1>
                  <h3>
                    Finance Department Head
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Team-leads-section">
        <div className="row tl-roww">
          {TlEmployee.map((Employee, index) =>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 Tl-card-main-column" data-aos='fade-up' key={index}>
              <div className="TL-card">
                <div className="TL-propic">
                  <img src={Employee.propic} alt="" />
                </div>
                <div className="tl-description">
                  <h2>{Employee.Tlname}
                  </h2>
                  <h1>
                    {Employee.TlPosition}
                  </h1>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="employees-section">
        <div className="container-fluid">
          <div className="row ss">
            {Employees.map((LocalEmp, index) =>
              <div className="col-sm-6 col-lg-3 col-md-6 col-6  employee-card-column" data-aos='fade-up' key={index}>
                <div className="employee-card">
                  <div className="employee-propic">
                    <img src={LocalEmp.EmpPic} alt="" />
                  </div>
                  <div className="employee-card-deatils">
                    <h3>{LocalEmp.EmpName}</h3>
                    <h4>{LocalEmp.EmpPositin}</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="need-consultation-section-employeepage">
        <div className="cunsultation-card-employeee">
          <div className="card-description">
            <h6>We are here to answer your questions 24/7</h6>
            <h1>NEED A CONSULTATION?</h1>
            <div className="contact-buttonn">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Employee