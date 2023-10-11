import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hello from '../components/Hello';
import ToggleLanguage from '../utils/ToggleLanguage';

const Home = () => {

	const { i18n } = useTranslation();

	const [language, setLanguage] = useState(
		navigator.language === 'cs-CZ' ? 'cz' : navigator.language === 'en' ? 'en' : 'cz'
	);

	useEffect(() => {
		ToggleLanguage(language, i18n);
	}, [language]);

	return (
		<>
			<Hello />
		</>
	);
};

export default Home;
