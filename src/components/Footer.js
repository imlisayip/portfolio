
import React from 'react'
import { Link } from 'gatsby'
import Contact from './contact'
import { FaGithub, FaInstagram, FaLinkedin, FaSwatchbook } from 'react-icons/fa'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='text'>
                <p>
                    Think we can create something together? Let's chat!
               </p>
                <p> You can read more{' '}
                    <Link activeClassName='active' to='/about'>
                        <span>about me</span>
                    </Link>{' '} or you can reach me at: {' '}
                    <a className='active' href='mailto:hello@lisayip.com'><span>hello@lisayip.com</span></a>.
                <Contact />
                </p>
            </div>
            <div>

                {/* <p>
                    I'm <span>@imlisayip</span> on social things.
                </p> */}

                <div>
                    <FaGithub size={22} />
                    <a href='https://github.com/imlisayip/'>Github</a>

                </div>
                <div>
                    <FaInstagram size={22} />
                    <a href='https://instagram.com/imlisayip/'>Instagram</a>

                </div>
                <div>
                    <FaLinkedin size={22} />
                    <a href='https://linkedin.com/in/imlisayip/'>Linkedin</a>
                </div>
                <div>
                    <FaSwatchbook size={22} />
                    <Link activeClassName='active' to='/style-guide'><span>Style Guide</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Footer