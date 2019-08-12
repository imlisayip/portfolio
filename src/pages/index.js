import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutConcise from "../components/aboutConcise"
import Archives from "../components/archive"
// import "./index.css"

const IndexPage = () => {



    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div className="home">
                <AboutConcise />

            </div>
            <div className="caseStudy">
                {/* <CaseStudy /> */}
            </div>
            <div className="archives">
                <Archives />
            </div>
            {/* <Link to="/blogposts/">View all posts</Link> */}
        </Layout >
    )
}

export default IndexPage
