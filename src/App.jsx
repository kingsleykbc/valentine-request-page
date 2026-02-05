import { useState } from 'react';
import EnvelopeView from './components/EnvelopeView';
import RequestView from './components/RequestView';
import Confetti from './components/Confetti';
import './App.css';

function App() {
	const [currentView, setCurrentView] = useState('envelope');
	const [showConfetti, setShowConfetti] = useState(false);

	const handleEnvelopeClick = () => {
		setCurrentView('request');
	};

	const handleYesClick = () => {
		setShowConfetti(true);
	};

	return (
		<div className={`app ${showConfetti ? 'purple-bg' : ''}`}>
			<div className='pattern-layer' />
			{showConfetti && <Confetti />}

			{currentView === 'envelope' && <EnvelopeView onClick={handleEnvelopeClick} />}

			{currentView === 'request' && <RequestView onYesClick={handleYesClick} />}
		</div>
	);
}

export default App;
