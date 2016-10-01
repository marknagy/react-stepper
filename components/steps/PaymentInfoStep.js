import React from 'react';

class PaymentInfoStep extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stepper__step">
				<h3 className="step__title">Payment</h3>
				<div className="step__content card card--shadow">
					<button onClick={this.props.triggerNext}>Next</button>
				</div>
			</div>
		)
	}
}

export default PaymentInfoStep;