import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../utils/Icon";
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const { t } = useTranslation();

	return (
		<>
			<header>
				<Container>
					<NavLink to="/en" className="en">
						<Icon name="english" title={t('english-flag')} />
					</NavLink>
					<NavLink to="/cz" className="cz">
						<Icon name="czech" title={t('czech-flag')} />
					</NavLink>
				</Container>
			</header>
		</>
	);
};

export default Navbar;