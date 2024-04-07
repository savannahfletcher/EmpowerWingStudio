import React, { Component, useState, useEffect} from 'react';
import "./Apply.css";
import { createClient } from '@supabase/supabase-js'
import { Icon } from '@iconify/react';
import Background from '../../assets/images/dotted_background.png'

const supabase = createClient('https://xxwhazdjkktjoklafuio.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4d2hhemRqa2t0am9rbGFmdWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNjQ3MjAsImV4cCI6MjAyNzk0MDcyMH0.kZIu3kBSqPFaCAeOe-6_T6AbwKyyITmU8STbz3O60Cw')

interface User {
    id: number;
    name: string;
    biography: string;
    link1: string;
    link2: string;
    link3: string;
    created_at: string;
}

const Apply = () => {
    const [name, setName] = useState('');
    const [biography, setBio] = useState('');
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!(name === '') && !(biography === '') && !(link1 === '')){
            try {
                const { data, error } = await supabase
                    .from('users')
                    .insert([{ name, biography, link1, link2, link3 }]);
                    
                    
                if (error) {
                    throw error;
                }
                
                console.log('Data inserted:', data);
                // Reset form fields after successful submission
                setName('');
                setBio('');
                setLink1('');
                setLink2('');
                setLink3('');
            } 
            
            catch (error) {
                console.error('Error inserting data:', error);
            }
        }
    };

    return (
        <div className="apply">
            <header className="apply-header" style={{backgroundImage: `url(${Background})`}}>
                <p></p>
                <div className='apply-container'>
                    <div className='apply-item'>
                        <div className='inner-box'>
                            <div className='top-text'>
                            Are you an artist, business owner, or creator looking to gain more 
                            exposure? Apply here to be featured on our website!
                            </div>
                            {/* <p></p> */}
                            <form onSubmit={handleSubmit}>
                                <div className="coolinput">
                                    <label htmlFor="name" className="text">Name:*</label>
                                    <input type="text" placeholder="Write here..." id="name" value={name} onChange={(e) => setName(e.target.value)} className="input" />
                                </div>
                                <div className="coolinput">
                                    <label htmlFor="biography" className="text">Bio:*</label>
                                    <input type="text" placeholder="Write here..." id="biography" value={biography} onChange={(e) => setBio(e.target.value)} className="input" />
                                </div>
                                <div className="coolinput">
                                    <label htmlFor="link1" className="text">Link 1:*</label>
                                    <input type="text" placeholder="Write here..." id="link1" value={link1} onChange={(e) => setLink1(e.target.value)} className="input" />
                                </div>
                                <div className="coolinput">
                                    <label htmlFor="link2" className="text">Link 2:</label>
                                    <input type="text" placeholder="Write here..." id="link2" value={link2} onChange={(e) => setLink2(e.target.value)} className="input" />
                                </div>
                                <div className="coolinput">
                                    <label htmlFor="link3" className="text">Link 3:</label>
                                    <input type="text" placeholder="Write here..." id="link3" value={link3} onChange={(e) => setLink3(e.target.value)} className="input" />
                                </div>
                                <p></p>

                                {/* Image Uploads: profile & works */}
                                <div style={{ fontWeight: 700 }}>Profile Picture:*</div>
                                <div className='upload-container'>
                                    <input type="file" id="file" />
                                    <label htmlFor="file"> Upload Files
                                        <Icon icon="ion:cloud-upload-outline" />
                                    </label>
                                </div>
                                <p></p>

                                <div style={{ fontWeight: 700 }}>Work:*</div>
                                <div className='upload-container'>
                                    <input type="file" id="file" />
                                    <label htmlFor="file"> Upload Files
                                        <Icon icon="ion:cloud-upload-outline" />
                                    </label>
                                </div>

                                <p></p>
                                <div className="button-box">
                                <input type="submit" className="button primary block" style={{ fontWeight: 700 }}/>
                                </div>
                                <p></p>

                            </form>
                        </div>
                    </div>
                </div>
                <p></p>
            </header>
        </div>
    );
};

export default Apply; 