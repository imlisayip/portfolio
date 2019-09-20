import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutConcise from "../components/aboutConcise"
import Archives from "../components/archives"
import CaseStudy from "../components/casestudy"
import Work from "../pages/work"
// import "./index.css"

class App extends React.Component {
    render() {
        return (
            <Work />
            // <Layout>
            //     <div className="home">
            //         <AboutConcise />
            //     </div>
            //     <div className="caseStudy">
            //         <CaseStudy />
            //     </div>
            //     <div className="archives">
            //         <Archives />
            //     </div>
            // </Layout >
        )
    }
}


export default App

