import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';

export default ({ src }) => {

    return (
        <div className="image-box h1">
            <img src={src} />
        </div>
    );
}