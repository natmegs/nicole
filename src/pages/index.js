import React from "react"
import Link from "gatsby-link"

import TopNav from '../components/top-nav';
import NameContainer from '../components/name-container';
import ImageContainer from '../components/image-container';
import Image from '../components/image';

import p1 from '../images/1.jpg';
import p2 from '../images/2.jpg';
import p3 from '../images/3.jpg';
import p4 from '../images/4.jpg';
import p5 from '../images/5.jpg';
import p6 from '../images/6.jpg';
import p7 from '../images/7.jpg';
import p8 from '../images/8.jpg';
import p9 from '../images/9.jpg';
import p10 from '../images/10.jpg';
import p11 from '../images/11.jpg';
import p12 from '../images/12.jpg';
import p13 from '../images/13.png';
import p14 from '../images/14.jpg';

const ListLink = props => 
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({children, data}) =>
    <div>
        <NameContainer />
        <ImageContainer>
            <Image src={p2} />
            <Image src={p4} />
            <Image src={p3} />
            <Image src={p1} />
            <Image src={p7} />
            <Image src={p8} />
            <Image src={p6} />
            <Image src={p12} />
            <Image src={p9} />
            <Image src={p10} />
            <Image src={p5} />
            <Image src={p11} />
            <Image src={p13} />
            <Image src={p14} />
        </ImageContainer>
    </div>