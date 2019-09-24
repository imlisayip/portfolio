import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';

const Archive = ({ data }) => {
    const { id, link, title } = data.contentfulBlogPost;
    return (
        <a id={id} href={link}>{title}</a>
    )
}

export default Archive;

// export const pageQuery = graphql`
//     query($slug: String!) {
//         contentfulArchive(slug: { eq: $slug }) {
//             id
//             link
//             title
//         }
//     }
// `