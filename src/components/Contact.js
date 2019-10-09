import React from 'react'
import { FaExternalLinkAlt, FaClone } from 'react-icons/fa'

const Contact = () => {

    // let emailButton = document.getElementById('button--copy');

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
                <button className='button--copy' onClick={() => { console.log('button clicked') }}>
                    <FaClone color='darkolivegreen' size={22} />
                </button>
                <a className='button--email' href='mailto:hello@lisayip.com'>
                    <FaExternalLinkAlt color='darkolivegreen' size={22} />
                </a>
            </div>
            <span>hello@lisayip.com</span>
        </div>

    )
}

export default Contact