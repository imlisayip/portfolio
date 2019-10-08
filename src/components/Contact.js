import React from 'react'
import { FaExternalLinkAlt, FaClone } from 'react-icons/fa'

const Contact = () => {

    // let emailButton = document.getElementById('email-button');

    // emailButton.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     document.execCommand('copy', false, 'hello@lisayip.com');
    // });
    // function copy(text) {
    //     document.execCommand('copy', false, text);
    // }
    return (
        <div className='contact'>
            <div className='contact-molecule'>
                {/* TODO: copy email button */}
                <button className='email-button' onClick={() => { console.log('button clicked') }}>
                    <FaClone color='darkolivegreen' size={22} />
                </button>
                <a href='mailto:hello@lisayip.com'>
                    <FaExternalLinkAlt color='darkolivegreen' size={22} />
                </a>
            </div>

            <div className='word'>
                Contact
                </div>
            <div className='email'>
                hello@lisayip.com
                </div>
        </div>

    )
}

export default Contact