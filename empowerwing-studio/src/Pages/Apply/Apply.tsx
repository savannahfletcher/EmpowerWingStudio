import React, { Component, useState } from 'react';
import "./Apply.css";
import { Icon } from '@iconify/react';
import Background from '../../assets/images/dotted_background.png'


const Apply = () => {
    return (
        <div className="apply">
            <header className="apply-header" style={{backgroundImage: `url(${Background})`}}>
                {/* Update this text once we choose a font */}
                <p style={{color: '#5e3901', fontWeight: 'bold'}}>
                    Are you an artist, business owner, or creator looking to gain more exposure? Apply here to be featured on our website!
                </p>
                <div className='apply-container'>
                    <div className='apply-item'>
                        <div className='inner-box'>
                            <p></p>
                            <div className="coolinput">
                                <label htmlFor="input" className="text">Name:</label>
                                <input type="text" placeholder="Write here..." name="input" className="input" />
                            </div>
                            <div className="coolinput">
                                <label htmlFor="input" className="text">Bio:</label>
                                <input type="text" placeholder="Write here..." name="input" className="input" />
                            </div>

                            <div className="coolinput">
                                <label htmlFor="input" className="text">Link 1:</label>
                                <input type="text" placeholder="Write here..." name="input" className="input" />
                            </div>

                            <div className="coolinput">
                                <label htmlFor="input" className="text">Link 2:</label>
                                <input type="text" placeholder="Write here..." name="input" className="input" />
                            </div>

                            <div className="coolinput">
                                <label htmlFor="input" className="text">Link 3:</label>
                                <input type="text" placeholder="Write here..." name="input" className="input" />
                            </div>
                            <p></p>

                            {/* Image Uploads: profile & works */}
                            <div style={{ fontWeight: 700 }}>Profile Picture:</div>
                            <div className='upload-container'>
                                <input type="file" id="file" />
                                <label htmlFor="file"> Upload Files
                                    <Icon icon="ion:cloud-upload-outline" />
                                </label>
                            </div>
                            <p></p>
                            <div style={{ fontWeight: 700 }}>Work:</div>
                            <div className='upload-container'>
                                <input type="file" id="file" />
                                <label htmlFor="file"> Upload Files
                                    <Icon icon="ion:cloud-upload-outline" />
                                </label>
                            </div>

                            <p></p>
                            <div className="button-box">
                            <input type="button" value="Submit" style={{ fontWeight: 700 }} />
                                <label htmlFor="button"></label>
                            </div>
                            <p></p>
                            
                        </div>
                    </div>
                </div>
                <p></p>
            </header>
        </div>
    )
};

export default Apply; 