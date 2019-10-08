import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Project from './Project'

const Archives = () => {
    const data = useStaticQuery(graphql`
        query ArchiveQuery {
            allContentfulArchive  {
                edges {
                    node {
                        id
                        link
                        title
                        image {
                            file {
                                url
                            }
                            description
                        }
                        blurb {
                            json
                        }
                        role
                    }
                }
            }
        }
    `)

    const archives = data.allContentfulArchive.edges

    return (
        <>
            <Project projects={archives} block="Archive" orientation="reverse" site />
            {/* <p>Additional work samples available on request</p> */}
        </>
    )
}

export default Archives