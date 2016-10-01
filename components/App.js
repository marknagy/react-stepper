import React from 'react';
import Stepper from './Stepper';

import PaymentInfoStep from './steps/PaymentInfoStep';
import ConfirmStep from './steps/ConfirmStep';
import FinishStep from './steps/FinishStep'


var STEPS = [PaymentInfoStep, ConfirmStep, FinishStep];

class App extends React.Component {
	render() {
		return <Stepper steps={STEPS} />;
	}
}

export default App;
