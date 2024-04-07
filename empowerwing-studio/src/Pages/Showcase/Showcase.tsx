/* import React, { Component, useState } from 'react'; */
import "./Showcase.css";
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from "react";
import Feature from '../../Components/Feature/Feature';
import Background from '../../assets/images/dotted_background.png'

const supabase = createClient('https://xxwhazdjkktjoklafuio.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4d2hhemRqa2t0am9rbGFmdWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNjQ3MjAsImV4cCI6MjAyNzk0MDcyMH0.kZIu3kBSqPFaCAeOe-6_T6AbwKyyITmU8STbz3O60Cw')

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

const Showcase = () => {
    const [users, setUsers] = useState<User[] | null>(null);

	useEffect(() => {
		loadUsers();
	}, []);

	// Get all data from the todos table
	const loadUsers = async () => {
		let { data, error } = await supabase
			.from('users')
			.select();

        if (error) {
            console.error("Error loading users", error);
            return;
        }

        console.log('Fetched data:', data);
        setUsers(data);
	};

    return (
		<div className="showcase">
            <header className="showcase-header" style={{backgroundImage: `url(${Background})`}}>
            {users && (
                <div className="users" >
                    {users.map(user => (
                        <Feature key={user.id} user={user}/>
                    ))}
                </div>
            )}
            </header>
        </div>
	);
}

export default Showcase; 