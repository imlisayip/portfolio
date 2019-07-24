import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "./index.css"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="home">
            <h1>Hello There</h1>
            <p>Welcome my awesome blog</p>
            <div>
                <p>
                    Welcome! I'm Lisa. UX Engineer. Intrepid. Book lover. World traveler. Free spirit. Triathlete.
                        <span>Read more</span> Previously delivered digital brand experiences at {' '}
                    <a href="https://www.patreon.com/">
                        <span>Patreon</span>
                    </a>
                    ,{' '}
                    <a href="https://www.bounteous.com/">
                        <span>Bounteous</span>
                    </a>
                    , and{' '}
                    <a href="http://informatica.com">
                        <span>Informatica</span>
                    </a>
                    .
                    Welcome to my portfolio. Read more.
                    </p>
                <Image />
            </div>
            <Link to="/blogposts/">View all posts</Link>
        </div>
    </Layout>
)

export default IndexPage
