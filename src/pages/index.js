import React from 'react'
import SEO from '../components/SEO'

import Layout from '../components/Layout'
import Work from './work'

export default () => (
    <Layout>
        <SEO title='Work' keywords={[`gatsby`, `work`, `react`]} />
        <Work />
    </Layout>
)
