import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hello from '../components/Hello';

const En = () => {

	const { i18n } = useTranslation();

	const [language, setLanguage] = useState('en');

	useEffect(() => {
		document.documentElement.lang = language;
		document.body.classList.toggle('cz', language === 'cz');
		document.body.classList.toggle('en', language === 'en');
		i18n.changeLanguage(language);
	}, [language]);

	return (
		<>
			<Hello />
		</>
	);
};

export default En;
