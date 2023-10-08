import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import CalculateAge from "../utils/CalculateAge";
import AnimateNumber from "../utils/AnimateNumber";

const Hello = () => {
	const age = CalculateAge('1991-08-13');
	
	useEffect(() => {
		AnimateNumber('age', 3000);
	}, []);
	

	return (
		<>
			<Container>
				<h1>Jan Kubiče</h1>
				<h2 className="border-start border-primary border-5 ps-2">Frontend Developer</h2>
				<p>Jmenuji se Honza, je mi <span id="age">{age}</span>&nbsp;let a jsem frontend vývojář z Prahy. </p>
			</Container>
		</>
	);
};

export default Hello;