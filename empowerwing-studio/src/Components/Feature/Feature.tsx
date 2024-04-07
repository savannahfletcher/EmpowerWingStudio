import React from 'react';
import "./Feature.css";

interface User {
    id: number;
    name: string;
    biography: string;
    link1: string;
    link2: string;
    link3: string;
    created_at: Date;
    profile_image: string;
    art1: string;
}

interface FeatureProps {
    user: User;
}

const Feature: React.FC<FeatureProps> = ({ user }) => {
    return (
        <div className="feature">
            <div className="flex-container">
                <div className="flex-item">
                    {/* Left half of feature: profile, name, bio */}
                    <div className="left-box">
                        <div className="upper">
                            <div className="profile-picture">
                                <img src={user.profile_image} alt="logo" height='165' />
                            </div>
                            <div className='name-text'>{user.name}</div>
                        </div>
                        <div className="lower">
                            <div className='bio-text'>{user.biography}</div>
                            <div className='link-text'>
                                <a href={user.link1} style={{ color: "#7CA871" }}>
                                    {user.link1}
                                </a>
                            </div>

                            {user.link2 !== '' &&
                                <div className='link-text'>
                                    <a href={user.link2} style={{ color: "#7CA871" }}>
                                        {user.link2}
                                    </a></div>
                            }
                            {user.link3 !== '' &&
                                <div className='link-text'>
                                    <a href={user.link3} style={{ color: "#7CA871" }}>
                                        {user.link3}
                                    </a>
                                </div>
                            }

                        </div>
                        <p></p>

                    </div>
                    {/* Right half of feature: artwork images */}
                    <div className="right-box">
                        <img src={user.art1} alt="logo" height='300' />
                    </div>

                </div>
            </div>
        </div>
    )
};


export default Feature; 