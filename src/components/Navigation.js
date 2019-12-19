import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { graphql, useStaticQuery } from 'gatsby'

const Navigation = ({ siteTitle = 'Lisa Yip' }) => {

    const data = useStaticQuery(graphql` 
        query MyQuery {
            allContentfulAsset {
                edges {
                    node {
                        title
                            file {
                                url
                        }
                    }
                }
            }
        }
    `)

    function checkbox() {
        if (window.innerWidth < 736) {
            document.getElementById("menu-btn").checked = false;
            document.body.style.overflow = 'auto';
        }
    }

    function handleNav() {
        document.getElementById("menu-btn").checked === false
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto'
    }

    const nodes = data.allContentfulAsset.edges.filter(node => {
        let title = node.node.title
        if (title === 'Lisa Yip Resume') {
            return node.node.file.url

        }
    })
    const resume = nodes[0].node.file.url

    return (
        <Headroom>
            <header className="header">
                <div className='site-title'>
                    <Link onClick={checkbox} activeClassName='' className="site-title" to='/' >
                        {siteTitle}
                    </Link>
                </div>

                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn" onClick={handleNav}>
                    <span className="navicon"></span>
                </label>
                <ul className='menu'>
                    <li>
                        <Link onClick={checkbox} activeClassName='active' to='/'>Work</Link>
                    </li>
                    <li>
                        <Link onClick={checkbox} activeClassName='active' to='/about'>About</Link>
                    </li>
                    {/* <li>
                        <Link onClick={checkbox} activeClassName='active' to='/aio'>Case Study</Link>
                    </li> */}
                    <li>
                        <a onClick={checkbox} href={resume} target='_blank' rel="noopener noreferrer">Resume</a>
                    </li>
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