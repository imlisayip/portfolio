
import React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaInstagram, FaLinkedin, FaSwatchbook } from 'react-icons/fa'

const Footer = () => {

    return (
        <>
            <p> Want to learn more about my process? </p>
            {/* TODO: link about me and email */}
            <p>You can read more about me or you can reach me at: hello@lisayip.com.</p>
            <Link activeClassName='active' to='/style-guide'>Style Guide</Link>
            <FaGithub color='darkolivegreen' size={22} />
            <FaInstagram color='darkolivegreen' size={22} />
            <FaLinkedin color='darkolivegreen' size={22} />
            <FaSwatchbook color='darkolivegreen' size={22} />
        </>
    )
}

export default Footer