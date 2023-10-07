import React, { useState, useEffect } from 'react';

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
		<div>
			<h1>Jan Kubiče CZ</h1>
		</div>
	);
};

export default Home;
