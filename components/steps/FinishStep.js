import React from 'react';

class FinishStep extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stepper__step">
				<h3 className="step__title">Thank you</h3>
				<div className="step__content card card--shadow">
					<p>Get started now</p>
				</div>
			</div>
		)
	}
}

export default FinishStep;