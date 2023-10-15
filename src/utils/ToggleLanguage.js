const toggleLanguage = (language, i18n) => {

	document.documentElement.lang = language;
	document.body.classList.toggle('cz', language === 'cz');
	document.body.classList.toggle('en', language === 'en');
	document.querySelector('header').classList.toggle('cz', language === 'cz');
	document.querySelector('header').classList.toggle('en', language === 'en');
	i18n.changeLanguage(language);
}

export default toggleLanguage;