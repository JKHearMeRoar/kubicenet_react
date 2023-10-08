import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../utils/Icon";
import Container from "react-bootstrap/Container";

const Navbar = () => {
	return (
		<>
			<header>
				<Container>
					<NavLink to="/en" className="en">
						<Icon name="english" title="English flag" />
					</NavLink>
					<NavLink to="/cz" className="cz">
						<Icon name="czech" title="Czech flag" />
					</NavLink>
				</Container>
			</header>
		</>
	);
};

export default Navbar;