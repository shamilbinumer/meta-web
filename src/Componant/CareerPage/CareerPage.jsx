import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './CareerPage.scss';
import ScrollToTopOnMount from '../ScrollToTop';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { ImPlus } from "react-icons/im";
import emailjs from 'emailjs-com';
import Footer from '../Index/Footer/Footer';


const CareerPage = () => {
    const [job, setJob] = useState('first')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [applyingfor, setApplyingFor] = useState('');
    const [experience, setExperience] = useState('');
    const [place, setPlace] = useState('');
    const [fileName, setFileName] = useState('');
    const [status, setStatus] = useState(null);
    const [hiring,setHiring]=useState(false)

    let file;
    const handleFileChange = (event) => {
        file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const templateParams = {
                name: name,
                email: email,
                number: number,
                place: place,
                designation: applyingfor,
                experience: experience,
                file: file
            };

            const serviceId = 'service_zkzmcai';
            const templateId = 'template_iqrgugq';
            const userId = '0IghRMc8aa34072Z0';

            await emailjs.send(serviceId, templateId, templateParams, userId);
            const replyParams = {
                to_email: email,
                subject: 'Application Received',
                message: `Dear ${name},\n\nThank you for your application. We have received your request and will get back to you shortly.\n\nBest regards,\nThe Hiring Team`
            };

            const replyTemplateId = 'template_jp0jhz1';

            await emailjs.send(serviceId, replyTemplateId, replyParams, userId);

            setStatus('Email sent successfully');
            toast.success('Application submitted successfully!');
            setName('');
            setEmail('');
            setNumber('');
            setApplyingFor('');
            setExperience('');
            setPlace('');
            setFileName('');
        } catch (error) {
            setStatus('Error sending email');
            console.error('Error:', error);
            toast.error('Error sending application. Please try again later.');
        }
    };

    return (
        <div className='CareerPageMainWrapper'>
            <ScrollToTopOnMount />
            <div className="career-hero">
                <Navbar />
                <div className="hero-content">
                    {hiring?(<>  <h1>Join Our Team and Build <br /> Your Future with Us</h1>
                        <a href="#job-openings"><button>Current Openings</button></a></>):(<>
                            <h1>Currently We Are<br /> Not Hiring</h1>
                            <Link to='/'><button>Home</button></Link>
                        </>)}
                  
                </div>
            </div>
            {/* ===================================current-openings============================ */}



          {hiring&&(
            <>
              {/* Mobile View */}
              <div className='Career-Mobile'>
                <div className="career-main-body">
                    <h1>Current Openings</h1>

                    <div className="web-designer-container">
                        <button className="btn career-collapse-btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <div className="collapse-bar-contents">
                                <h1>Web Designer (2)</h1>
                                <ImPlus className='collaps-icons' />

                            </div>
                        </button>

                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                <div className="collapse-body-heading"><h1>About</h1></div>

                                <div className="job-details">
                                    <span>2+ Years Of Experience</span><span> Full Time </span><span>      On Site </span>
                                </div>

                                <div className="responsibility">
                                    <h1>
                                        Responsibilities
                                    </h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus.</p>

                                    <h1>
                                        Requirements
                                    </h1>

                                    <p>Requirement 1

                                    </p>
                                    <p>Requirement 2</p>
                                    <p>Requirement 3</p>

                                    <h1>
                                        Join Our Team
                                    </h1>
                                    <p>
                                        Thank you for your keen interest in becoming a part of First Logic Meta Lab.
                                    </p>
                                </div>
                                <div className="btn">
                                    <button>Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <button className="btn career-collapse-btn" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                            <div className="collapse-bar-contents">
                                <h1>Web Developer (3)</h1>
                                <ImPlus className='collaps-icons' />

                            </div>
                        </button>


                        <div className="collapse" id="collapseExample2">
                            <div className="card card-body">
                                <div className="collapse-body-heading"><h1>About</h1></div>

                                <div className="job-details">
                                    <span>0-2 Years Of Experience</span><span> Full Time </span><span>      On Site </span>
                                </div>

                                <div className="responsibility">
                                    <h1>
                                        Responsibilities
                                    </h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus.</p>

                                    <h1>
                                        Requirements
                                    </h1>

                                    <p>Requirement 1

                                    </p>
                                    <p>Requirement 2</p>
                                    <p>Requirement 3</p>

                                    <h1>
                                        Join Our Team
                                    </h1>
                                    <p>
                                        Thank you for your keen interest in becoming a part of First Logic Meta Lab.
                                    </p>
                                </div>
                                <div className="btn">
                                    <button>Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <button className="btn career-collapse-btn" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                            <div className="collapse-bar-contents">
                                <h1>Backend Developer</h1>
                                <ImPlus className='collaps-icons' />

                            </div>
                        </button>

                        <div className="collapse" id="collapseExample3">
                            <div className="card card-body">
                                <div className="collapse-body-heading"><h1>About</h1></div>

                                <div className="job-details">
                                    <span>1+ Years Of Experience</span><span> Full Time </span><span>      On Site </span>
                                </div>

                                <div className="responsibility">
                                    <h1>
                                        Responsibilities
                                    </h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus.</p>

                                    <h1>
                                        Requirements
                                    </h1>

                                    <p>Requirement 1

                                    </p>
                                    <p>Requirement 2</p>
                                    <p>Requirement 3</p>

                                    <h1>
                                        Join Our Team
                                    </h1>
                                    <p>
                                        Thank you for your keen interest in becoming a part of First Logic Meta Lab.
                                    </p>
                                </div>
                                <div className="btn">
                                    <button>Apply Now</button>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>
            </div>
            {/* Mobile View */}
            {/* Desktop View */}
            <div className="desktop-job">
                <section id="job-openings">
                    <h1>Current Openings</h1>
                    <div className="jobs-wrapper">
                        <div className="job-left">
                            <div className={`job-title ${job == 'first' ? "active-job" : ""}`} onClick={() => setJob('first')}>
                                <span>Web Designer (2)</span>
                            </div>
                            <div className={`job-title ${job == 'second' ? "active-job" : ""}`} onClick={() => setJob('second')}>
                                <span>Web Developer (3)</span>
                            </div>
                            <div className={`job-title ${job == 'third' ? "active-job" : ""}`} onClick={() => setJob('third')}>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                        <div className="job-right">
                            {job == 'first' && (
                                <>
                                    <h2>Web Designer</h2>
                                    <div className="job-basic-data">
                                        <span>2+ Years Of Experience</span>
                                        <span> Full Time</span>
                                        <span>On Site </span>
                                    </div>
                                    <h3>Responsibilities</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus.</p>
                                    <h3>Requirements</h3>
                                    <ul>
                                        <li>Requirement 1</li>
                                        <li>Requirement 2</li>
                                        <li>Requirement 3</li>

                                    </ul>
                                    <h3>Join Our Team</h3>
                                    <p>Thank you for your keen interest in becoming a part of First Logic Meta Lab.</p>
                                    <button data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Apply Now</button>
                                </>
                            )}
                            {job == 'second' && (
                                <>
                                    <h2>Web Developer</h2>
                                    <div className="job-basic-data">
                                        <span>0-2 Years Of Experience</span>
                                        <span> Full Time</span>
                                        <span>On Site </span>
                                    </div>
                                    <h3>Responsibilities</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus.</p>
                                    <h3>Requirements</h3>
                                    <ul>
                                        <li>Requirement 1</li>
                                        <li>Requirement 2</li>
                                        <li>Requirement 3</li>

                                    </ul>
                                    <h3>Join Our Team</h3>
                                    <p>Thank you for your keen interest in becoming a part of First Logic Meta Lab.</p>
                                    <button data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Apply Now</button>
                                </>
                            )}
                            {job == 'third' && (
                                <>
                                    <h2>Backend Developer</h2>
                                    <div className="job-basic-data">
                                        <span>1+ Years Of Experience</span>
                                        <span> Full Time</span>
                                        <span>On Site </span>
                                    </div>
                                    <h3>Responsibilities</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris vitae augue rutrum, id vestibulum ligula finibus.</p>
                                    <h3>Requirements</h3>
                                    <ul>
                                        <li>Requirement 1</li>
                                        <li>Requirement 2</li>
                                        <li>Requirement 3</li>

                                    </ul>
                                    <h3>Join Our Team</h3>
                                    <p>Thank you for your keen interest in becoming a part of First Logic Meta Lab.</p>
                                    <button data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Apply Now</button>
                                </>
                            )}
                        </div>

                    </div>
                    <div className="offcanvas offcanvas-end" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Fill and Submit below Form</h5>
                            <IoMdClose className='close-btn-offcanvas' data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <div className="apply-form-wrapper">
                                <form action="">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label htmlFor="">Full Name<span>*</span></label>
                                                <div><input type="text" placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)} /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Applying For<span>*</span></label>
                                                <div>
                                                    <select name="" id="" onChange={(e) => setApplyingFor(e.target.value)}>
                                                        <option value="Web Designing">Web Designing</option>
                                                        <option value="Web Developer">Web Developer</option>
                                                        <option value="Backend Developer">Backend Developer</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 input-row">
                                                <label htmlFor="">Contact Number<span>*</span> </label>
                                                <div><input type="text" placeholder='Enter Contact Number' onChange={(e) => setNumber(e.target.value)} /></div>
                                            </div>
                                            <div className="col-lg-6 input-row">
                                                <label htmlFor="">Years of Experience<span>*</span> </label>
                                                <div><input type="text" placeholder='Enter Years of Experience ' onChange={(e) => setExperience(e.target.value)} /></div>
                                            </div>
                                            <div className="col-lg-6 input-row">
                                                <label htmlFor="">Email<span>*</span> </label>
                                                <div><input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} /></div>
                                            </div>
                                            <div className="col-lg-6 input-row">
                                                <label htmlFor="">Place<span>*</span></label>
                                                <div><input type="text" placeholder='Enter Your Place' onChange={(e) => setPlace(e.target.value)} /></div>
                                            </div>
                                            <div className="col-lg-6 input-row file-row">
                                                <div className="input-file-container">
                                                    <span className="input-file-icon">
                                                        <img src="/Images/icon attach-file 1.png" alt="" />
                                                    </span>
                                                    <label htmlFor="file-upload" className="input-file-label">Attach Your CV*</label>
                                                    <input type="file" id="file-upload" className="input-file" onChange={handleFileChange} />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 input-row">
                                                <div><button className='submit-btn' onClick={handleSubmit}>SUBMIT</button></div>
                                            </div>
                                        </div>
                                        {fileName && <p className='selected-file'>{fileName}</p>}

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* DESKTOP View */}


            {/* ===================================current-openings============================ */}
            {/* =====================================need-consult========================== */}
            <div className="need-consult">
                <div className="contact-card">
                    <p>We are here to answer your questions 24/7 </p>
                    <h1>NEED A CONSULTATION?</h1>
                    <Link to='/contact'><button>Contact Us</button></Link>
                </div>
            </div>
            {/* =====================================need-consult========================== */}
            <Footer />
            </>
          )}
        </div>
    );
};

export default CareerPage;
