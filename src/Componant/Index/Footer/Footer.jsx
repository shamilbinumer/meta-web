import './Footer.scss'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div className='FooterMainWrapper'>
            <div className="footer">
                <div className="b-t-arrow">
                  <a href="#">  <img src="/Images/Icon up-arrow.png" alt="" /></a>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-left">
                            <div className="logo"><img src="/Images/FLML-01.png" alt="" /></div>
                            <p className="location">Location</p>
                            <p className="location-disc">Puthanveettil Tower, Bypass Road<br />
                                Perinthalmanna, KERALA - 679322</p>
                                <div className="social-icons">
                                   <a href="https://in.linkedin.com/company/firstlogicinfolab" target='_blank'><FaLinkedin className='social-icon' /></a>
                                   <a href="mailto:info@Firstlogicmetalab.com" target='_blank' ><IoMdMail className='social-icon' /></a>
                                   <a href="https://www.instagram.com/firstlogicmetalab/" target='_blank'><FaSquareInstagram className='social-icon' /></a>
                                   <a href="https://maps.app.goo.gl/muTnHfnt7X8CSYsj9" target='_blank'><IoLocationSharp className='social-icon' id='location' /></a>
                                   <a href="https://www.facebook.com/firstlogicmetalab/" target='_blank'><ImFacebook2 className='social-icon' /></a>
                                   <a href="" target='_blank'><FaSquareXTwitter className='social-icon' /></a>
                                </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-center-left">
                            <h3>IT Services</h3>
                            <div className="List">
                            <div><a href="">IT Services</a></div>
                            <div><a href="">Cyber Security</a></div>
                            <div><a href="">Cloud Computing</a></div>
                            <div><a href="">Managed IT</a></div>
                            <div><a href="">IT Support</a></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-center-right">
                            <h3>Important Links</h3>
                            <div className="List">
                            <div><Link to="/aboutPage">About Us</Link></div>
                            <div><Link to="/employee">Meet Our Team</Link></div>
                            <div><a href="">Case Studies</a></div>
                            <div><a href="https://maps.app.goo.gl/pM5Cry99QHdYSHBG8 ">Location</a></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-right">
                        <h3>Support</h3>
                            <div className="List">
                            <div><a href="">Forum Support</a></div>
                            <div><a href="">Help & FAQ</a></div>
                            <div><a href="">Contact Us</a></div>
                            <div><a href="">Cookies Policy</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cpy-rgt">
                <span>© 2024 First Logic Meta Lab PVT LTD. All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer
