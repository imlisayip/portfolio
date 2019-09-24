import React from "react"
import { FaExternalLinkAlt, FaClone } from 'react-icons/fa'

const Contact = () => {
    return (
        <React.Fragment>
            {/* <div classname="nav-contact">Contact</div> */}
            <div className="contact">
                <div className="contact-molecule">
                    <button onClick="copyEmail()">
                        <FaClone color="darkolivegreen" size={22} />
                    </button>
                    <a href="mailto:hello@lisayip.com">
                        <FaExternalLinkAlt color="darkolivegreen" size={22} />
                        {/* <img className="external-icon" src="https://image.flaticon.com/icons/svg/133/133937.svg" /> */}
                    </a>
                </div>

                <div className="word">
                    Contact
                </div>
                <div className="email">
                    hello@lisayip.com
                </div>
            </div>
        </React.Fragment>


    )
}

export default Contact