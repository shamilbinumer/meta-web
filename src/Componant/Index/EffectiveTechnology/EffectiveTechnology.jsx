import { useEffect, useState } from 'react'
import './EffectiveTechnology.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopOnMount from '../../ScrollToTop';


const EffectiveTechnology = () => {
    const [category, setCategory] = useState('Why Choose Us');
    useEffect(() => {
        AOS.init({
          duration: 1500, 
          once:true
        });
      }, []);
    return (
        <div className='EffectiveTechnologyMainWrapper'>
            <ScrollToTopOnMount/>
            <div className="effectiveTechnology">
                <h2 className="efectiveTechHeading" data-aos="fade-up">Effective Use Of Technology</h2>
                <p className='efectheadPara' data-aos="fade-up">We are Focused on Strengths & Willing to Take Risks</p>
                <div className="container-fluid">
                    <div className="row categories">
                        <div className="col-lg-3">
                            <div className={`cat-card ${category === 'Why Choose Us' ? 'active-card' : ''}`} onClick={() => setCategory('Why Choose Us')}>
                                <span className={category === 'Why Choose Us' ? 'active' : ''}>
                                    Why Choose Us
                                </span>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className={`cat-card ${category === 'Mission & Vision' ? 'active-card' : ''}`} onClick={() => setCategory('Mission & Vision')}><span className={category == 'Mission & Vision' ? 'active' : ''}>Mission & Vision</span></div>
                        </div>
                        <div className="col-lg-3">
                            <div className={`cat-card ${category === 'Our Strength' ? 'active-card' : ''}`} onClick={() => setCategory('Our Strength')}><span className={category == 'Our Strength' ? 'active' : ''}>Our Strength</span></div>
                        </div>
                        <div className="col-lg-3">
                            <div className={`cat-card ${category === 'Our Products' ? 'active-card' : ''}`} onClick={() => setCategory('Our Products')}><span className={category == 'Our Products' ? 'active' : ''}>Our Products</span></div>
                        </div>
                    </div>
                </div>
                <div className="moreDetails">
                    {category == 'Why Choose Us' && (
                        <div className="why-choose-as" data-aos="fade-in">
                            <h1 className="why-choos-head">Why Choose Us</h1>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1100">
                                        <div className="why-choose-card">
                                            <div className="card-head"><span>Expertise</span></div>
                                            <div className="card-img"><img src="/Images/11 Expertise.jpg" alt="" /></div>
                                            <div className="card-para"><p>Extensive experience in delivering high-quality software solutions across various industries.</p></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1300">
                                        <div className="why-choose-card card-bottom">
                                            <div className="card-head"><span>Client Focused</span></div>
                                            <div className="card-img"><img src="/Images/12 Client Focused.jpg" alt="" /></div>
                                            <div className="card-para"><p>We prioritize understanding your business needs to provide software solutions that align with your unique requirements.</p></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
                                        <div className="why-choose-card">
                                            <div className="card-head"><span>Innovation</span></div>
                                            <div className="card-img"><img src="/Images/13 Innovation.jpg" alt="" /></div>
                                            <div className="card-para"><p>Constantly strive to innovate and explore new technologies to provide cutting-edge solutions and drive the future.</p></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1600">
                                        <div className="why-choose-card card-bottom">
                                            <div className="card-head"><span>Agile Development</span></div>
                                            <div className="card-img"><img src="/Images/14 Agile Development.jpg" alt="" /></div>
                                            <div className="card-para"><p>We follow Agile development methodologies to ensure flexibility and responsiveness to changing requirements.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {category == 'Mission & Vision' && (
                        <div className="mission-wision" data-aos="fade-in">
                            <h1 className="mision-heading">Mission & Vision</h1>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6" >
                                        <div className="mission-card left-card" data-aos="fade-right"  data-aos-duration="1000">
                                            <img src="/Images/Gif Mission.gif" alt="" />
                                            <span>Mission</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mission-card right-card" data-aos="fade-left"  data-aos-duration="1000">
                                            <p>To deliver flawless, result-driven business solutions that put our clients' objectives ahead of those of their top rivals. We work hard to turn your ideas into reality by enhancing them and effectively putting them into practice to produce a final result. When it comes to achieving business objectives, we are the name for excellence, originality, and simplicity.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mission-card left-card" data-aos="fade-right"  data-aos-duration="1000">
                                            <img src="/Images/Gif Vision.gif" alt="" />
                                            <span>Vision</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mission-card right-card" data-aos="fade-left"  data-aos-duration="1000">
                                            <p>As a privately held, globally dispersed organization, we function by tying together diverse locations and teams through shared business procedures, management techniques, cultures, and values. By concentrating on our customers' needs and developing long-term, mutually beneficial partnerships, we grow as a successful, sustainable company that supports and mentors our clients throughout the whole lifetime of solutions and products.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {category == 'Our Strength' && (
                        <div className="our-strength" data-aos="fade-in">
                            <h1 className="our-strength-heading">Our Strength</h1>
                            <div className="container-fluid">
                                <div className="row caards-main">
                                    <div className="col-lg-4">
                                        <div className="our-strength-card" data-aos="fade-right" data-aos-duration="1000">
                                            <span>50+ Employee<br />Strength</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="our-strength-card" data-aos="fade-up"  data-aos-duration="1000">
                                            <span>200+ Projects<br />Handed-over</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="our-strength-card" data-aos="fade-left"  data-aos-duration="1000">
                                            <span>Top Client Review<br />Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {category == 'Our Products' && (
                       <div className="our-products" data-aos="fade-in">
                        <h1 className="our-products-heading">Our Products</h1>
                        <div className="products-main">
                            <img src="/Images/product1.png" alt="" data-aos="fade-up"  />
                            <img src="/Images/product2.png" alt="" data-aos="fade-up" data-aos-duration="1200"/>
                            <img src="/Images/product3.png" alt="" data-aos="fade-up" data-aos-duration="1400" />
                            <img src="/Images/product4.png" alt="" data-aos="fade-up" data-aos-duration="1600"/>
                            <img src="/Images/product5.png" alt="" data-aos="fade-up" data-aos-duration="1800"/>
                            <img src="/Images/product6.png" alt="" data-aos="fade-up" data-aos-duration="2000"/>
                        </div>
                       </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default EffectiveTechnology
