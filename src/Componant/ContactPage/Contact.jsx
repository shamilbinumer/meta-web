import React, { useState, useEffect } from 'react';
import Footer from '../Index/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ScrollToTopOnMount from '../ScrollToTop';
import './Contact.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import Notification from '../Notification/Notification'; 
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const nameRegex = /^[a-zA-Z\s]+$/; 
  const numberRegex = /^[0-9]{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateName = (value) => {
    if (!nameRegex.test(value)) {
      setNotification({ message: 'Name can only contain letters and spaces.', type: 'error' });
      return false;
    }
    return true;
  };

  const validateEmail = (value) => {
    if (!emailRegex.test(value)) {
      setNotification({ message: 'Invalid email address.', type: 'error' });
      return false;
    }
    return true;
  };

  const validateNumber = (value) => {
    if (!numberRegex.test(value)) {
      setNotification({ message: 'Phone number must be at least 6 digits long and can only contain numbers.', type: 'error' });
      return false;
    }
    return true;
  };

  const validateSubject = (value) => {
    if (value.trim() === '') {
      setNotification({ message: 'Subject is required.', type: 'error' });
      return false;
    }
    return true;
  };

  const validateMessage = (value) => {
    if (value.trim() === '') {
      setNotification({ message: 'Message is required.', type: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  // Validate all fields
  const isNameValid = validateName(name);
  const isEmailValid = validateEmail(email);
  const isNumberValid = validateNumber(number);
  const isSubjectValid = validateSubject(subject);
  const isMessageValid = validateMessage(message);
  

    if (!isNameValid || !isEmailValid || !isNumberValid || !isSubjectValid || !isMessageValid) {
      return; // Exit if any validation fails
    }

    try {
        const res = await axios.post('https://us-central1-nodejs-458f4.cloudfunctions.net/firstlogic/send-contact-page-email',{name,email,number,subject,message})
      if(res){
        setNotification({ message: 'Email sent successfully!', type: 'success' });
        setName('');
        setEmail('');
        setNumber('');
        setSubject('');
        setMessage('');
      }

    } catch (error) {
      setNotification({ message: 'Error sending email. Please try again later.', type: 'error' });
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleCloseNotification = () => {
    setNotification({ message: '', type: '' });
  };

  return (
    <div className='ContactPageMainWrapper'>
      <ScrollToTopOnMount />
      <div className="contactPage">
        <Navbar />
        <div className="content"><h1 data-aos="fade-up">Contact Us</h1></div>
      </div>
<div className="getInTouch">
  <h1 data-aos="fade-up">Get In Touch</h1>
  <div className="row contact-details">
    <div className="col-lg-6 contact-details-left">
      <div className="contact-img" data-aos="fade-right">
        <img src="/Images/Contact/Rectangle BG.svg" alt="" />
      </div>
    </div>
    <div className="col-lg-6 contact-details-right">
      <div className="contact-detils-card-main">
        <div className="contact-details-card" data-aos="fade-left">
          <div className="contact-details-card-left">
            <img className="left-1" src="/Images/icon-location blue.png" alt="" />
          </div>
          <div className="contact-details-card-right">
            <span>Puthanveettil Tower, Bypass Road<br />
              Perinthalmanna, KERALA - 679322</span>
          </div>
        </div>
        <div className="contact-details-card" data-aos="fade-left">
          <div className="contact-details-card-left">
            <img className="left-2" src="/Images/icon-phone blue.png" alt="" />
          </div>
          <div className="contact-details-card-right">
            <span>(+91) 7012 48 38 28<br />
              (+91) 7306 26 55 10</span>
          </div>
        </div>
        <div className="contact-details-card" data-aos="fade-left">
          <div className="contact-details-card-left">
            <img className="left-3" src="/Images/icon-email blue.png" alt="" />
          </div>
          <div className="contact-details-card-right">
            <span>info@Firstlogicmetalab.com <br />
              Support@Firstlogicmetalab.com</span>
          </div>
        </div>
       
     
      </div>
    </div>
  </div>
</div>


      <div className="contact-form">
        <h1 data-aos="fade-up">Let's talk about your next project</h1>
        <div className="container-fluid">
          <div className="row contact-form-row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="contact-map">
                <div className="map-section">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.694220453742!2d76.22349740000001!3d10.9864372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd17c99d6635%3A0x7148e36faaafed57!2sFirst%20Logic%20Meta%20Lab%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1719640969917!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-right-side">
                <div className="form-detaills">
                  <form action="" onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <input type="text" placeholder='Name *' data-aos="fade-left" value={name} onChange={(e) => setName(e.target.value)} required />
                      <input type="text" placeholder='Email *' data-aos="fade-left" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                      <input type="text" placeholder='Phone *' data-aos="fade-left" value={number} onChange={(e) => setNumber(e.target.value)} required />
                      <input type="text" placeholder='Subject *' data-aos="fade-left" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <textarea name="" placeholder='Message' data-aos="fade-left" id="" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <div className="send-message-btn">
                      <button type="submit" data-aos="fade-left"><span>Send Message</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default Contact;
