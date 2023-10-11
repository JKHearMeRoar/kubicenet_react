import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledHeader = styled.header`
	&.cz {
		.cz {
			display: none;
		}
	}

	&.en {
		.en {
			display: none;
		}
	}
`;

const Navbar = () => {
	const { t } = useTranslation();

	return (
		<>
			<StyledHeader>
				<Container className='text-end'>
					<NavLink to="/en" className="en">
						<Icon name="english" title={t('english-flag')} size='2em' />
					</NavLink>
					<NavLink to="/cz" className="cz">
						<Icon name="czech" title={t('czech-flag')} size='2em' />
					</NavLink>
				</Container>
			</StyledHeader>
		</>
	);
};

export default Navbar;