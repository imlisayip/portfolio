import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ScrollButton from '../components/ScrollButton'

import '../index.scss'

export default ({ children }) => (
    <>
        <Navigation siteTitle='Lisa Yip' />
        <div className='container'>
            {children}
            <Footer />
        </div>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </>

)

// social media on side vertically