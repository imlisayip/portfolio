import React from 'react'
// import SEO from '../components/seo'

import Layout from '../components/Layout'
// import Work from './Work'
import AboutConcise from '../components/AboutConcise'
import CaseStudy from '../components/CaseStudy'
import Archives from '../components/Archives'

export default () => (
    <Layout>
        <div className='home'>
            <AboutConcise />
        </div>
        <div className='showcase'>
            <div className='block'>
                <CaseStudy />
            </div>
            <div className='block'>
                <Archives />
            </div>
        </div>
    </Layout>
)
