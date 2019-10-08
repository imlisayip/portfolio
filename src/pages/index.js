import React from 'react'
// import SEO from '../components/seo'

import Layout from '../components/Layout'

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
