import React from 'react'
import PropTypes from 'prop-types'
import { Router, Link } from '@reach/router'
// imoprt About from '../pages/about'


const Header = ({ siteTitle }) => (
    <header role="banner">
        {/* <h1 style={{ margin: 0 }}> */}
        <Link
            to="/"
            style={{
                // color: `white`,
                textDecoration: `none`,
            }}>
            <h2>{siteTitle}</h2>
        </Link >


        <div className="navigation">
            <Link to="/">Work</Link>
            <Link to="about">About</Link>
            {/* <Link to="travel"><span>Travel</span></Link> */}
            <Link to="contact">Contact</Link>
            <Link to="now">Now</Link>
        </div>
        {/* <Router>
                <Work path="/" />
                <About path="about" />
                <Travel path="travel" />
                <Contact path="contact" />
                <Now path="now" />
            </Router> */}

        {/* TODO: perhaps indicate the page I'm on with bold? */}
    </header >
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
