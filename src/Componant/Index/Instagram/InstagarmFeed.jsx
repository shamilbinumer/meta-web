import './InstagramFeed.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { useEffect } from 'react';
import { FaHeart } from "react-icons/fa6";

const InstagarmFeed = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className='instaFeedMainWrapper'>
            <div className="instaFeed">
                <div className="instaHeading" data-aos="fade-up">
                    <div className="heading" >Instagram Feed</div>
                </div>
                <div className="container-fluid">
                    <div className="row feed-card-main">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="instagram-card" data-aos='fade-up'>
                                <div className="insta-username-container">
                                    <div className="pro-pic">
                                        <img src="/Images/FLML-01 copy.png" alt="" />
                                    </div>
                                    <div className="pro-name">
                                        <p>firstlogicmetalab</p>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src="/Images/insta-6 (2).webp" alt="" />
                                </div>
                                <div className="comment-section">
                                    <div className="like-conntainer">
                                        <FaHeart className='LIKE' />

                                        <img src="/Images/chat.png" alt="" />
                                        <LiaTelegram className='LiaTelegram' />

                                    </div>
                                    <div className="like-section">
                                        <p>251,542 likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="instagram-card" data-aos='fade-up'>
                                <div className="insta-username-container">
                                    <div className="pro-pic">
                                        <img src="/Images/FLML-01 copy.png" alt="" />
                                    </div>
                                    <div className="pro-name">
                                        <p>firstlogicmetalab</p>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src="/Images/insta-feed-02.jpg" alt="" />
                                </div>
                                <div className="comment-section">
                                    <div className="like-conntainer">
                                        <FaHeart className='LIKE' />

                                        <img src="/Images/chat.png" alt="" />
                                        <LiaTelegram className='LiaTelegram' />

                                    </div>
                                    <div className="like-section">
                                        <p>251,542 likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="instagram-card" data-aos='fade-up'>
                                <div className="insta-username-container">
                                    <div className="pro-pic">
                                        <img src="/Images/FLML-01 copy.png" alt="" />
                                    </div>
                                    <div className="pro-name">
                                        <p>firstlogicmetalab</p>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src="/Images/insta-6.webp" alt="" />
                                </div>
                                <div className="comment-section">
                                    <div className="like-conntainer">
                                        <FaHeart className='LIKE' />

                                        <img src="/Images/chat.png" alt="" />
                                        <LiaTelegram className='LiaTelegram' />

                                    </div>
                                    <div className="like-section">
                                        <p>251,542 likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="instagram-card" data-aos='fade-up'>
                                <div className="insta-username-container">
                                    <div className="pro-pic">
                                        <img src="/Images/FLML-01 copy.png" alt="" />
                                    </div>
                                    <div className="pro-name">
                                        <p>firstlogicmetalab</p>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src="/Images/insta-2.webp" alt="" />
                                </div>
                                <div className="comment-section">
                                    <div className="like-conntainer">
                                        <FaHeart className='LIKE' />

                                        <img src="/Images/chat.png" alt="" />
                                        <LiaTelegram className='LiaTelegram' />

                                    </div>
                                    <div className="like-section">
                                        <p>251,542 likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="instagram-card" data-aos='fade-up'>
                                <div className="insta-username-container">
                                    <div className="pro-pic">
                                        <img src="/Images/FLML-01 copy.png" alt="" />
                                    </div>
                                    <div className="pro-name">
                                        <p>firstlogicmetalab</p>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src="/Images/insta-8.jpg" alt="" />
                                </div>
                                <div className="comment-section">
                                    <div className="like-conntainer">
                                        <FaHeart className='LIKE' />

                                        <img src="/Images/chat.png" alt="" />
                                        <LiaTelegram className='LiaTelegram' />

                                    </div>
                                    <div className="like-section">
                                        <p>251,542 likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="instagram-card" data-aos='fade-up'>
                                <div className="insta-username-container">
                                    <div className="pro-pic">
                                        <img src="/Images/FLML-01 copy.png" alt="" />
                                    </div>
                                    <div className="pro-name">
                                        <p>firstlogicmetalab</p>
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img src="/Images/insta-4.webp" alt="" />
                                </div>
                                <div className="comment-section">
                                    <div className="like-conntainer">
                                        <FaHeart className='LIKE' />

                                        <img src="/Images/chat.png" alt="" />
                                        <LiaTelegram className='LiaTelegram' />

                                    </div>
                                    <div className="like-section">
                                        <p>251,542 likes</p>
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

export default InstagarmFeed
