import React from 'react';

class ConfirmStep extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stepper__step">
				<h3 className="step__title">Confirm</h3>
				<div className="step__content card card--shadow">
					<button onClick={this.props.triggerPrevious}>Previous</button>
					<button onClick={this.props.triggerNext}>Next</button>
				</div>
			</div>
		)
	}
}

export default ConfirmStep;
