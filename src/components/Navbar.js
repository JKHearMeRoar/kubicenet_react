import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import enFlag from "../assets/images/english.svg";
import czFlag from "../assets/images/czech.svg";
import Container from "react-bootstrap/Container";

const Nav = styled.header``;

const NavLink = styled(Link)`
img {
	width: 2rem;
	height: auto;
}
`;

const Navbar = () => {
	return (
		<>
			<Nav>
				<Container>
					<NavLink to="/en" className="en">
						<img src={enFlag} alt="English flag"/>
					</NavLink>
					<NavLink to="/cz" className="cz">
						<img src={czFlag} alt="Czech flag"/>
					</NavLink>
				</Container>
			</Nav>
		</>
	);
};

export default Navbar;