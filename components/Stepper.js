import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import ProgressBar from './ProgressBar';

let StepMixin = InnerComponent => class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <InnerComponent triggerNext={this.props.next} triggerPrevious={this.props.previous} />
  }
}

class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };

    this.steps = this.props.steps;
  }

  next() {
    let nextIndex = this.state.activeIndex + 1;

    if (nextIndex < this.steps.length) {
      this.setState({ activeIndex: nextIndex });
    }
  }

  previous() {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    }
  }

  render() {
    let CurrentStep = StepMixin(this.steps[this.state.activeIndex])

    return (
      <div className='stepper box'>
        <ProgressBar numOfSteps={this.steps.length} activeIndex={this.state.activeIndex}/>
        <ReactCSSTransitionReplace transitionName="step"
                                   transitionEnterTimeout={2000}
                                   transitionLeaveTimeout={2000}
                                   component="div"
                                   overflowHidden={false}>
          <CurrentStep key={this.state.activeIndex} next={this.next.bind(this)} previous={this.previous.bind(this)} />
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}

export default Stepper;
