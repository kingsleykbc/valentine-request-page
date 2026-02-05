import { useState } from 'react';
import './EnvelopeView.css';

function EnvelopeView({ onClick }) {
	const [isOpening, setIsOpening] = useState(false);

	const handleClick = () => {
		setIsOpening(true);
		setTimeout(() => {
			onClick();
		}, 700);
	};

	return (
		<div className='view envelope-view'>
			<div className={`envelope ${isOpening ? 'opening' : ''}`} onClick={handleClick}>
				<div className='envelope-flap' />
				<div className='envelope-flap-bg' />
				<div className='envelope-body'></div>
			</div>
			<p onClick={handleClick} className='prompt'>
				Click to open
			</p>
		</div>
	);
}

export default EnvelopeView;
