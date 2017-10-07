import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import profilePhoto from '../images/nicole.jpg';

export default () => {
    
    return (
        <div className="profile-photo">
                <img src={profilePhoto} />
        </div>
    );
}