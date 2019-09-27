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
                    }
                }
            }
        }
    `)

    const archives = data.allContentfulArchive.edges

    return (
        <>
            <Project blurbs={archives} block="Archive" orientation="reverse" />
            <p>Additional work samples available on request</p>
        </>
    )
}

export default Archives