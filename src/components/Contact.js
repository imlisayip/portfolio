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

    // {/* TODO: copy email button */ }
    const copy = () => {
        console.log('button copy clicked')
    }
    const mailto = () => {
        console.log('button mailto clicked')
    }
    return (
        <span className='contact'>
            <div className='contact-molecule'>
                <button className='button--contact' onClick={copy}> copy</button>
                <button className='button--contact' onClick={mailto}>mailto</button>
            </div>
            hello@lisayip.com
            {/* whatdotoonmobile */}
        </span>
    )
}

export default Contact