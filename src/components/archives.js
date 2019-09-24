import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MARKS } from '@contentful/rich-text-types';


const Archives = () => {
    const data = useStaticQuery(graphql`
        query ArchiveQuery {
            allContentfulArchive  {
                edges {
                    node {
                        id
                        link
                        title
                    }
                }
            }
        }
    `)

    const archives = data.allContentfulArchive.edges

    return (
        <>
            <div className="header">Archives</div>
            <div className="archives">
                {archives.map(({ node: archive }) => (
                    <div id={archive.id} className="archive">
                        <a href={archive.link}>{archive.title}</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Archives