import React, { Component, useState } from 'react';
import "./About.css";
import Background from '../../assets/images/dotted_background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const About = () => {

    return (
        <div className="about">
            <header className='about-header' style={{ backgroundImage: `url(${Background})` }}>
                {/* Mission Statement */}
                <div className='mission'>
                    <div className='mission-title'>Our Mission</div>
                    <div className='mission-body'>
                        "To empower and amplify the voices of women, non-binary, and gender non-conforming
                        artists, business-owners, and creators by providing a platform for showcasing their
                        talents and creation. Through our website, we aim to cultivate a supportive community
                        that celebrates diversity and fosters inclusivity in the creative industry."
                    </div>
                </div>
                {/* Developers */}
                <div className='developer'>
                    <div className='developer-title'>Meet the Developers!</div>
                    <div className='d-box'>
                        <img src={require('../../assets/images/savannahAvatar.png')} alt="logo" height='300' />
                        <div className='desc-box'>
                            <div className='upper-box'>
                                <div className='developer-body'>
                                    Savannah Fletcher
                                </div>
                                <div className='developer-sub'>
                                    Frontend Developer
                                </div>
                            </div>
                            <div className='lower-box'>
                                <a href="https://www.linkedin.com/in/savannah-fletcher-a56174251/">
                                    <FontAwesomeIcon icon={faLinkedin} color={"#7CA871"} style={{ height: "100px" }} />
                                </a>
                                <a href="https://github.com/savannahfletcher">
                                    <FontAwesomeIcon icon={faGithub} color={"#7CA871"} style={{ height: "100px" }} />
                                </a>
                                <a href="mailto:sfletcher7772@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} color={"#7CA871"} style={{ height: "100px" }} />
                                </a>

                            </div>

                        </div>
                    </div>
                    <div className='d-box'>
                        <img src={require('../../assets/images/rachelAvatar.png')} alt="logo" height='300' />
                        <div className='desc-box'>
                        <div className='upper-box'>
                                <div className='developer-body'>
                                    Rachel Ponce
                                </div>
                                <div className='developer-sub'>
                                    Backend Developer
                                </div>
                            </div>
                            <div className='lower-box'>
                            <a href="https://www.linkedin.com/in/racheleponce/">
                                <FontAwesomeIcon icon={faLinkedin} color={"#7CA871"} style={{ height: "100px" }} />
                            </a>
                            <a href="https://github.com/rachelponce">
                                <FontAwesomeIcon icon={faGithub} color={"#7CA871"} style={{ height: "100px" }} />
                            </a>
                            <a href="mailto:racheleponce2@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} color={"#7CA871"} style={{ height: "100px" }} />
                            </a>
                            </div>
                        </div>

                    </div>
                    <div className='d-box'>
                        <img src={require('../../assets/images/sarahAvatar.png')} alt="logo" height='300' />
                        <div className='desc-box'>
                        <div className='upper-box'>
                                <div className='developer-body'>
                                    Sarah Tran
                                </div>
                                <div className='developer-sub'>
                                    Backend Developer
                                </div>
                            </div>
                        <div className='lower-box'>

                            <a href="https://www.linkedin.com/in/sarah-tran1029/">
                                <FontAwesomeIcon icon={faLinkedin} color={"#7CA871"} style={{ height: "100px" }} />
                            </a>
                            <a href="https://github.com/PotatoCorn001">
                                <FontAwesomeIcon icon={faGithub} color={"#7CA871"} style={{ height: "100px" }} />
                            </a>
                            <a href="mailto:sarah.tran1029@proton.me">
                                <FontAwesomeIcon icon={faEnvelope} color={"#7CA871"} style={{ height: "100px" }} />
                            </a>
                            </div>
                        </div>

                    </div>
                </div>


            </header>
        </div>
    )
};

export default About; 