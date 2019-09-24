import React from 'react'
import { FaExternalLinkAlt, FaClone } from 'react-icons/fa'

const Contact = () => {

    function handleEmail() {
        /* Get the text field */
        let copyText = 'hello@lisayip.com';

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand('copy');

        /* Alert the copied text */
        alert('Copied the text: ' + copyText.value);
    }

    return (
        <>
            <div className='contact'>
                <div className='contact-molecule'>
                    <button onClick={() => handleEmail()}>
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
        </>


    )
}

export default Contact