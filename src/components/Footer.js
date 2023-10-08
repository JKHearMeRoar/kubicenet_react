import React from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const year = new Date().getFullYear();
	const { t } = useTranslation();

	return (
		<>
			<footer>
				<Container>
					{t('footer-copy')} &copy; {year}
				</Container>
			</footer>
		</>
	);
};

export default Footer;