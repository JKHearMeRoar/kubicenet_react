import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer>
				<Container>
					Created by Jan Kubiče &copy; {year}
				</Container>
			</footer>
		</>
	);
};

export default Footer;