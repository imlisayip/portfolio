import React from "react"
import "./contact.scss"


const Contact = () => {
    return (
        <React.Fragment>
            {/* <div classname="nav-contact">Contact</div> */}
            <div className="contact">
                <div className="contact-molecule">
                    {/* <button onClick="copyEmail()">
                        <img className="copy-icon" src="https://image.flaticon.com/icons/svg/860/860787.svg" />
                    </button> */}
                    <a href="mailto:hello@lisayip.com">
                        <img className="external-icon" src="https://image.flaticon.com/icons/svg/133/133937.svg" />
                    </a>
                </div>

                <div className="word">
                    contact
                </div>
                <div className="email">
                    hello@lisayip.com
            </div>

            </div>
        </React.Fragment>


    )
}

export default Contact