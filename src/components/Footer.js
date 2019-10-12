
import React from 'react'
import { Link } from 'gatsby'
import Contact from './Contact'
import { FaGithub, FaInstagram, FaLinkedin, FaStrava, FaSwatchbook, } from 'react-icons/fa'

const Footer = () => {

    return (
        <footer className='footer'>
            Think we can create something together? Let's chat!
            <p>
                You can read more{' '}
                <Link activeClassName='active' to='/about'>
                    <span>about me</span>
                </Link>{' '} or you can reach me at: {' '}
                <Contact />
            </p>

            <p className='social'>
                <a href='https://github.com/imlisayip/'><FaGithub size={22} /></a>
                <a href='https://linkedin.com/in/imlisayip/'><FaLinkedin size={22} /></a>
                <a href='https://www.strava.com/athletes/29301237'><FaStrava size={22} /></a>
                <a href='https://instagram.com/imlisayip/'><FaInstagram size={22} /></a>
                <p>@imlisayip on social things</p>
            </p>
            {/* where can I add this? 
                <Link activeClassName='active' to='/style-guide'><FaSwatchbook size={22} />
                    <span>Style Guide</span>
                </Link>
            */}
        </footer >
    )
}

export default Footer