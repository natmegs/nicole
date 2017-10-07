import React from 'react';
import Link from 'gatsby-link';
import {Helmet} from 'react-helmet';
import './index.scss';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import "animate.css/animate.min.css";
import favicon from '../images/favicon.ico';

import TopNav from '../components/top-nav';

export default ({children}) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Nicole</title>
            <link rel="shortcut icon" href={favicon} />
            <link href="https://fonts.googleapis.com/css?family=Lato:300|Vollkorn" rel="stylesheet" />
        </Helmet>
        <TopNav />
        {children()}
    </div>
);
    

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`