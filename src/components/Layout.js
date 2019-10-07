import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default ({ children }) => (
    <>
        <Navigation siteTitle='Lisa Yip' />
        <div className='container'>
            {children}
            <Footer />
        </div>
    </>

)

// scroll to top
// social media on side vertically