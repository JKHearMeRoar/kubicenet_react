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

const ProfileLink = styled.a`
	&:hover .halo {
		box-shadow:
			0 0 3em 1.5em ${({theme}) => theme.colors.white},
			0 0 3em 1.5em ${({theme}) => theme.colors.violet},
			0 0 4em 2em ${({theme}) => theme.colors.green};
	}
`;

const ProfileImage = styled.img`
	transition: all 1s;
	border: 0.25em solid ${({theme}) => theme.colors.primary};
	padding: 0.15em;
	box-shadow:
		0 0 2em 1em ${({theme}) => theme.colors.primary},
		0 0 3em 2em ${({theme}) => theme.colors.violet},
		0 0 4em 3em ${({theme}) => theme.colors.green};
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
					<Col id="my-gallery" className="text-sm-center" md={{span: 4, order: 'last'}}>
						<ProfileLink href={Jan_1024} data-pswp-width="1024" data-pswp-height="1023" target="_blank" rel="noreferrer">
							<ProfileImage src={Jan_600} alt={t('Hello.profile-photo')} width="300" height="300" className="halo rounded-circle"/>
						</ProfileLink>
					</Col>
					<Col md="8" className="pe-md-5">
						<h1>{t('Hello.jan-kubice')}</h1>
						<Heading2>{t('Hello.frontend-developer')}</Heading2>
						<p>
							<Trans i18nKey='Hello.my-name-is'>
								<span id="age">{{age}}</span>
							</Trans>
						</p>
						<div className="d-flex gap-2">
							<a href="mailto:jan@kubice.net" className="btn p-0">
								<StyledIcon name="email" title={t('Hello.email-me')} size='2em'/>
							</a>
							<a href="https://www.linkedin.com/in/jan-kubice-09479370/" className="btn p-0">
								<StyledIcon name="linkedin" title={t('Hello.linkedin-profile')} size='2em'/>
							</a>
						</div>
					</Col>
					
				</Row>
			</Container>
		</>
	);
};

export default Hello;