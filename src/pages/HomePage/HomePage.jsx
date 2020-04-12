import React from 'react';
import NavBar from '../../components/Navbar/NavBar';

const HomePage = (props) => {
    return (
        <div>
            <NavBar 
                user={props.user} 
            />
        </div>
    )
}

export default HomePage;