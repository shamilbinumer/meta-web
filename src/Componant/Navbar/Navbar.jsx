import { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import { IoCloseSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState(null);
  const [urlPath, setUrlPath] = useState('/');
  const [isSubmitting, setIsSubmitting] = useState(false);

 

  
  // Modal state and effects
  const [modalIsOpenModal, setIsOpenMOdal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = () => {
    setIsOpenMOdal(true);
  };

  const closeModal = () => {
    setIsOpenMOdal(false);
  };

  // Handle menu toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  useEffect(() => {
    setUrlPath(window.location.pathname);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button
    try {
      const res = await axios.post('https://us-central1-nodejs-458f4.cloudfunctions.net/firstlogic/send-register-email', { name, number, email });
      if (res) {
        toast.success('Email sent Successfully');
        closeModal();
        setEmail('');
        setName('')
        setNumber('')
      }
    } catch (error) {
      toast.error('Error While Sending Email');
    } finally {
      setIsSubmitting(false); // Re-enable the button if needed
    }
  };




  return (
    <div className="Navbar-main-body">
      <ToastContainer />
      <div className="Navbar-sub-body">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <Link to='/'>
              <img src="/Images/FLML-01.png" alt="First Logic Logo" />
            </Link>
          </div>

          <div className="toggle-button" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li className='nav-li'><Link to='/' className={`${urlPath === '/' ? 'activeNav' : ""}`}>Home</Link></li>
            <li className='nav-li'><Link to='/aboutPage' className={`${urlPath === '/aboutPage' ? 'activeNav' : ""}`}>About Us</Link></li>
            <li className='nav-li'><Link to='/service' className={`${urlPath === '/service' ? 'activeNav' : ""}`}>Services</Link></li>
            <li className='nav-li'><Link to='/career' className={`${urlPath === '/career' ? 'activeNav' : ""}`}>Career</Link></li>
            <li className='nav-li'><Link to='/gallery' className={`${urlPath === '/gallery' ? 'activeNav' : ""}`}>Gallery</Link></li>
            <li className='nav-li'><Link to='/contact' className={`${urlPath === '/contact' ? 'activeNav' : ""}`}>Contact Us</Link></li>
            <li><button className="register-btn" onClick={openModal}>Register</button></li>
          </ul>
        </nav>
      </div>
      {/* Modal for registration */}
      <Modal
      isOpen={modalIsOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Register Modal"
    >
      <div className="Register_popup_container">
        <IoCloseSharp className="clos-btn" onClick={closeModal} />
        <div className="reg-logo">
          <img src="/Images/FLML-01.png" alt="Logo" />
        </div>
        <h2 className="register-heading">REGISTER NOW</h2>
        <form className="reg-form" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="Full Name"
              pattern="[A-Za-z\s]+"
              title="Only Letters are allowed" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <input 
              type="text" 
              pattern="\d{10}" 
              title="Please enter exactly 10 digits" 
              placeholder="Contact Number" 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              required 
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
    </div>
  );
}

export default Navbar;
