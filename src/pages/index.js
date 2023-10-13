import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../pages/Layout';
import ToggleLanguage from '../utils/ToggleLanguage';

const Home = () => {

	const { i18n } = useTranslation();

	const language = navigator.language === 'cs-CZ' ? 'cz' : navigator.language === 'en' ? 'en' : 'cz';

	useEffect(() => {
		ToggleLanguage(language, i18n);
	}, [language, i18n]);

	return (
		<>
			<Layout />
		</>
	);
};

export default Home;
