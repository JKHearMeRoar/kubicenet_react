import React, { useState, useEffect } from 'react';

const En = () => {
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		document.documentElement.lang = language;
		document.body.classList.toggle('cs-CZ', language === 'cs-CZ');
		document.body.classList.toggle('en', language === 'en');
	}, [language]);

	return (
		<div>
			<h1>Jan Kubiče EN</h1>
		</div>
	);
};

export default En;
