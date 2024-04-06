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

const Feature : React.FC<FeatureProps> = ({user}) => {
    return(
        <div className = "feature">
            <div className="flex-container">
                <div className="flex-item">
                    <h3 style={{color:'white'}}>{user.name}</h3>
                    <p style={{color:'white'}}>{user.biography}</p>
                    <p style={{color:'white'}}>{user.link1}</p>
                </div>
                    
                <div className="flex-item">c 1</div>
            </div>
        </div>
    )
};

export default Feature; 