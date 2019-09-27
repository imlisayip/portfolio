import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Contact from './contact'
import Headroom from 'react-headroom'


const Navigation = ({ siteTitle = 'Lisa Yip' }) => {

    return (
        <Headroom >
            <header>
                <NavLink activeClassName='' to='/' ><h1>{siteTitle}</h1> </NavLink>
                <ul className='navigation'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>Work</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <a href='http://lisayip.com/Yip_Lisa_Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a>
                    </li>
                    {/* <li>
                    <Contact />
                </li> */}
                </ul>
            </header>
        </Headroom>
    )
}

Navigation.propTypes = {
    siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
    siteTitle: ``,
}

export default Navigation

// scroll to top
// social media on side vertically