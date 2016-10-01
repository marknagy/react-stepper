import React from 'react';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activeIndex = this.props.activeIndex;
        let stepIndicators = Array.apply(null, {length: this.props.numOfSteps}).map(
            function(_, index) {
                return <li key={index} className={'progress-bar__step progress-bar__step--animated ' + (index <= activeIndex ? 'progress-bar__step--completed': 'progress-bar__step--remaining')}></li>;
            });

        return (
            <ul className='stepper__progress-bar'>
            {stepIndicators}
            </ul>
            );
    }
}

ProgressBar.propTypes = {
    numOfSteps: React.PropTypes.number,
};

export default ProgressBar;
