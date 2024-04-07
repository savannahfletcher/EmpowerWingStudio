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
                            <div className="circle"></div>
                            <div className='name-text'>{user.name}</div>
                        </div>
                        <div className="lower">
                            <div className='bio-text'>{user.biography}</div>
                            <div className='link-text'>{user.link1}</div>
                            {user.link2 !== '' &&
                                <div className='link-text'>{user.link2}</div>

                            }
                            {user.link3 !== '' &&
                                <div className='link-text'>{user.link3}</div>
                            }

                        </div>

                    </div>
                    {/* Right half of feature: artwork images */}
                    <div className="right-box">


                    </div>

                </div>
            </div>
        </div>
    )
};

export default Feature; 