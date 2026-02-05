import { useState } from 'react';
import './RequestView.css';
import normalBearImg from '/images/bear.png';
import angryBearImg from '/images/bear-mad.png';
import excitedBearImg from '/images/bear-excited.png';

const normalBear = normalBearImg;
const angryBear = angryBearImg;
const excitedBear = excitedBearImg;

function RequestView({ onYesClick }) {
	const [bearImage, setBearImage] = useState(normalBear);
	const [heading, setHeading] = useState('Will You Be My Valentine?');
	const [message, setMessage] = useState('I promise to make every day as special as today!');
	const [errorMessage, setErrorMessage] = useState('');
	const [noDisabled, setNoDisabled] = useState(false);
	const [showButtons, setShowButtons] = useState(true);
	const [bearAnimation, setBearAnimation] = useState('');
	const [messageClass, setMessageClass] = useState('');
	const [headingClass, setHeadingClass] = useState('');

	const handleNoClick = () => {
		setBearAnimation('shake');
		setBearImage(angryBear);
		setErrorMessage('Dem No Born You Well! Oya click yes!');
		setNoDisabled(true);

		setTimeout(() => {
			setBearAnimation('');
		}, 500);
	};

	const handleYesClick = () => {
		setBearAnimation('bounce');
		setBearImage(excitedBear);
		setHeading('Yaaaay!!! 🎉');
		setHeadingClass('success');
		setMessage('Thank you baby! Please stay at your house Saturday morning on the 14th 💝✨');
		setMessageClass('success');
		setShowButtons(false);
		setErrorMessage('');

		setTimeout(() => {
			setBearAnimation('shake-forever');
		}, 600);

		onYesClick();
	};

	return (
		<div className='view request-view'>
			<div className='card-wrapper'>
				<div className={`bear-container ${bearAnimation}`}>
					<img src={bearImage} alt='Bear' />
				</div>
				<div className='content-card'>
					<h1 className={`main-heading ${headingClass}`}>{heading}</h1>
					<p className={`message ${messageClass}`}>{message}</p>
				</div>
				{showButtons && (
					<div className='button-container'>
						<button className='btn yes-btn' onClick={handleYesClick}>
							Yes!
						</button>
						<button className='btn no-btn' onClick={handleNoClick} disabled={noDisabled}>
							No
						</button>
					</div>
				)}
				{errorMessage && <div className='error-message'>{errorMessage}</div>}
			</div>
		</div>
	);
}

export default RequestView;
