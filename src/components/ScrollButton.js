import React from 'react'
import { FaLevelUpAlt } from 'react-icons/fa'

export default class ScrollButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return <button title='Back to top' className='button--scroll'
            onClick={() => { this.scrollToTop(); }}>
            <FaLevelUpAlt color='darkolivegreen' size={35} />
        </button>;
    }
}