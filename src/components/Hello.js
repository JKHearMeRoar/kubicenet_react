import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculateAge from "../utils/CalculateAge";
import AnimateNumber from "../utils/AnimateNumber";
import Icon from "./Icon";
import Jan_1024 from "../assets/images/jan_600.jpg";
import Jan_600 from "../assets/images/jan_1024.jpg";
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Heading2 = styled.h2`
	padding-left: 0.5rem !important;
	border-left: 5px solid ${({theme}) => theme.colors.primary} !important;
`;

const StyledIcon = styled(Icon)`
	color: ${({theme}) => theme.colors.white};
	transition: color 0.5s;
	&:hover {
		color: ${({theme}) => theme.colors.primary};
	}
`;

const Hello = () => {
	const { t } = useTranslation();
	const age = CalculateAge('1991-08-13');

	useEffect(() => {
		AnimateNumber('age', 3000);
	}, []);

	return (
		<>
			<Container className="hello">
				<Row className="align-items-center py-5">
					<Col>
						<h1>{t('jan-kubice')}</h1>
						<Heading2>{t('frontend-developer')}</Heading2>
						<p>
							<Trans i18nKey='my-name-is'>
								<span id="age">{{age}}</span>
							</Trans>
						</p>
						<div className="d-flex gap-2">
							<a href="mailto:jan@kubice.net" className="btn p-0">
								<StyledIcon name="email" title={t('email-me')} size='2em'/>
							</a>
							<a href="https://www.linkedin.com/in/jan-kubice-09479370/" className="btn p-0">
								<StyledIcon name="linkedin" title={t('linkedin-profile')} size='2em'/>
							</a>
						</div>
					</Col>
					<Col id="my-gallery">
						<a href={Jan_1024} data-pswp-width="1024" data-pswp-height="1023" target="_blank" rel="noreferrer">
							<img src={Jan_600} alt={t('profile-photo')} width="300" height="300" className="halo rounded-circle"/>
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Hello;