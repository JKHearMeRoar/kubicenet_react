import React, { useState, useEffect } from 'react';
import Hello from '../components/Hello';

const Home = () => {

	const [language, setLanguage] = useState(
		navigator.language === 'cs-CZ' || navigator.language === 'en' ? navigator.language : 'en'
	);

	useEffect(() => {
		document.documentElement.lang = language;
		document.body.classList.toggle('cs-CZ', language === 'cs-CZ');
		document.body.classList.toggle('en', language === 'en');
	}, [language]);

	return (
		<>
			<Hello />
		</>
	);
};

export default Home;
