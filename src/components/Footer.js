
import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {

    return (
        <>
            <p> Want to learn more about my process? </p>
            {/* TODO: link about me and email */}
            <p>You can read more about me or you can reach me at: hello@lisayip.com.</p>
            <li>
                <Link activeClassName='active' to='/style-guide'>Style Guide</Link>
            </li>
        </>
    )
}

export default Footer