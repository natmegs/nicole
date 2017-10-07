import React from "react"
import ImageContainer from '../components/image-container';
import ProfilePhoto from '../components/profile-photo';
import ProfileDescription from '../components/profile-desc';
import ContactLinks from '../components/contact-links';

export default ({data}) =>
    <div className="profile-container">
            <ProfilePhoto />
            <ProfileDescription />
            <ContactLinks />
    </div>
