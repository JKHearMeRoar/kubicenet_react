import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculateAge from "../utils/CalculateAge";
import AnimateNumber from "../utils/AnimateNumber";
import Icon from "../utils/Icon";
import Jan_1024 from "../assets/images/jan_600.jpg";
import Jan_600 from "../assets/images/jan_1024.jpg";

const Hello = () => {
	const age = CalculateAge('1991-08-13');

	useEffect(() => {
		AnimateNumber('age', 3000);
	}, []);

	return (
		<>
			<Container className="hello">
				<Row className="align-items-center py-5">
					<Col>
						<h1>Jan Kubiče</h1>
						<h2 className="border-start border-primary border-5 ps-2">Frontend Developer</h2>
						<p>Jmenuji se Honza, je mi <span id="age">{age}</span>&nbsp;let a jsem frontend vývojář z Prahy. </p>
						<div className="d-flex gap-2">
							<a href="mailto:jan@kubice.net" className="btn p-0">
								<Icon name="email" title="Email me"/>
							</a>
							<a href="https://www.linkedin.com/in/jan-kubice-09479370/" className="btn p-0">
								<Icon name="linkedin" title="LinkedIn profile"/>
							</a>
						</div>
					</Col>
					<Col id="my-gallery">
						<a href={Jan_1024} data-pswp-width="1024" data-pswp-height="1023" target="_blank" rel="noreferrer">
							<img src={Jan_600} alt="Jan Kubiče fotka" width="300" height="300" className="halo rounded-circle"/>
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Hello;