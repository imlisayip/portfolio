import React from 'react'
import PropTypes from 'prop-types';


function Project({ blurbs, block, orientation }) {
    return (
        <>
            <h3>{block}</h3>
            {
                blurbs.map(({ node: blurb }, index) => (
                    <div key={index} className="project">
                        <div className={orientation === 'reverse' && index % 2 === 0 ? 'info reverse' : 'info'} >
                            <img
                                alt={Array.isArray(blurb.image) ? blurb.image[0].description : blurb.image.description}
                                src={Array.isArray(blurb.image) ? blurb.image[0].file.url : blurb.image.file.url}
                            />
                            <div className="text">
                                <h4>
                                    {/* <span> */}
                                    <a className="title" href={blurb.link}>{blurb.title}</a>
                                    {/* </span> */}
                                </h4>
                                <div className="blurb">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
                                <div className="caption">role · company · year, ui/ux</div>
                            </div>
                        </div>
                        <button>View {block}</button>
                    </div>
                ))
            }

        </>
    )
}

Project.propTypes = {
    blurbs: PropTypes.array.isRequired,
    block: PropTypes.string.isRequired
}

export default Project