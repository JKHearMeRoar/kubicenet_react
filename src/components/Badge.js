import React from "react";
import Icons from "../assets/images/icons.svg";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = ({ name = 'default', size = '2', title = 'default', alt = 'default', className = '', basis = '40%' }) => {
	const finalClass = `icon icon-${name} ${className}`;
	const link = Icons + '#icon-' + name;

	const StyledBadge = styled.div`
		border: 1px solid ${({theme}) => theme.colors.white};
		flex: 1 1 ${basis};
		transition: all 0.5s;
		font-size: 1rem;
		font-weight: 400;
		
		svg {
			height: 2rem;
			width: 2rem;
			margin-right: 0.5rem;
		}

		.icon-react {
			color: #149eca;
			transition: all 0.5s;
		}

		&:hover {
			background-color: ${({theme}) => theme.colors.primary};

			.icon-react {
				color: ${({theme}) => theme.colors.white};
			}
		}
	`;

	return (
		<>
			<StyledBadge className="badge rounded-pill">
				<svg className={finalClass} width={size} height={size}>
					<title>{alt}</title>
					<use xlinkHref={link} />
				</svg>
				<span>{title}</span>
			</StyledBadge>
		</>
	);
};

Badge.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	alt: PropTypes.string,
	size: PropTypes.string,
	title: PropTypes.string
};

export default Badge;