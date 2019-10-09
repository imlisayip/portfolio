import React from 'react'
import { Link } from 'gatsby'
import CaseStudy from '../components/CaseStudy'
import Archives from '../components/Archives'

export default class Work extends React.Component {
    render() {
        return (
            <>
                <div className='home'>
                    <p>
                        Welcome! I'm am a UX engineer constantly on the search to improve process
                         have delivered digital brand experiences at
                        {' '}<a href='http://patreon.com'>Patreon</a>,
                        {' '}<a href='https://dropbox.com'>Dropbox</a>, and
                        {' '}<a href='http://informatica.com'>Informatica</a>.

                        {' '}<Link activeClassName='active' to='/about'><span>Read more.</span></Link>
                    </p>
                </div>
                <div className='showcase'>
                    <div className='block'>
                        <CaseStudy />
                    </div>
                    <div className='block'>
                        <Archives />
                    </div>
                </div>
            </>
        )
    }
}