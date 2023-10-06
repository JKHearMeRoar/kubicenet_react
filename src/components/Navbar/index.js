import React from "react";
import { Nav, NavLink, NavMenu, Logo }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Logo/>
				<NavMenu>
					<NavLink to="/en">
						En
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
