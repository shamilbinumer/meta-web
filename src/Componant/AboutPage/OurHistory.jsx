import './OurHistory.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTopOnMount from '../ScrollToTop';
const OurHistory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
  }, []);
  return (
    <div className='OurHistoryMainWrapper'>
      <ScrollToTopOnMount/>
        <div className="OurHistory">
            <h2 data-aos="fade-up">OUR HISTORY</h2>
            <h1 data-aos="fade-up">We Create Dreams For The Future. We Realize Them Successfully.</h1>
            <div className="container-fluid">
              <div className="row history-card-main">
                <div className="col-lg-7 history-card-left ">
                <div className="history-img" data-aos="fade-right"> <img src="/Images/History 1.jpg" alt="" /></div>
                </div>
                <div className="col-lg-5 history-card-right" data-aos="fade-left">
                  <div className="history-details">
                    <h4>JAN 2016</h4>
                    <div className="history-content">
                      <h3>Former Journey</h3>
                      <p>First Logic Meta Lab, formerly known as Infotick Solutions, was established with five members, mainly doing web designing and development services. The head office was located at Perinthalmanna, Kerala, India.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row history-card-main">
                <div className="col-lg-5 history-card-right" data-aos="fade-right">
                  <div className="history-details left-content">
                    <h4>MAY 2018</h4>
                    <div className="history-content ">
                      <h3>From Infotick Solutions to First Logic</h3>
                      <p>Infotick Solutions changed its name to First Logic Meta Lab to reflect its commitment to innovation and using cutting-edge technologies. With a talented team and customer-centric approach, the company is poised to continue its growth and success in the industry. The rebranding marks an exciting new chapter in our history.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 history-card-left right-img">
                <div className="history-img" data-aos="fade-left"> <img src="/Images/History 2.jpg" alt="" /></div>
                </div>
              </div>
              <div className="row history-card-main">
                <div className="col-lg-7 history-card-left" data-aos="fade-right">
                <div className="history-img"> <img src="/Images/History 3.jpg" alt="" /></div>
                </div>
                <div className="col-lg-5 history-card-right" data-aos="fade-left">
                  <div className="history-details">
                    <h4>FEB 2019                    </h4>
                    <div className="history-content">
                      <h3>Adapting and Thriving</h3>
                      <p>The company's workforce has grown to 12 employees since the pandemic began. During the lockdown period, the company utilized the time to encourage its employees to learn new technologies and skills, which has led to the implementation of innovative solutions in its custom projects. As a result, the company maintains a competitive edge in the market. Leveraging the pandemic lockdown period as a learning and development opportunity, the company was able to adapt to the changing business landscape and emerge stronger from the crisis.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row history-card-main">
                <div className="col-lg-5 history-card-right">
                  <div className="history-details left-content" data-aos="fade-right">
                    <h4>JUL 2022</h4>
                    <div className="history-content ">
                      <h3>A Strong Commitment to Employee Growth and Customer Satisfaction</h3>
                      <p>First Logic Meta Lab registered as a Private Limited Company. With a team of over 50 employees, the company boasts a wealth of knowledge and expertise in various departments and sub-departments. The company invests in employees' growth, earning a reputation as a tech industry leader, and delivering quality products across diverse sectors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 history-card-left right-img">
                   <div className="history-img" data-aos="fade-left"> <img src="/Images/History 4.jpg" alt="" /></div>
                </div>
              </div>
              <div className="row history-card-main">
                <div className="col-lg-7 history-card-left" data-aos="fade-right">
                <div className="history-img"> <img src="/Images/History 5.jpg" alt="" /></div>
                </div>
                <div className="col-lg-5 history-card-right" data-aos="fade-left">
                  <div className="history-details">
                    <h4>FEB 2023</h4>
                    <div className="history-content">
                      <h3>Major Growth With Expanded Workforce & Global Client Base</h3>
                      <p>With a client base of over 200 from more than 10 countries, the company is set to achieve significant growth in the technology industry. By investing in its employees' growth, the company has established a reputation as a leader in the industry, delivering innovative and custom solutions to its clients. With a focus on excellence, integrity, and customer satisfaction, First Logic Meta Lab is well-positioned to continue providing unparalleled value to its clients and driving innovation in the technology industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OurHistory