import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
	position: relative;

	&:after {
		content: "";
		position: absolute;
		width: 2px;
		height: 100%;
		background-color: ${({ theme }) => theme.colors.white};
		top: 0;
		left: 40px;
		margin: 2.5rem 0 0 0;
	}

	&:last-child:after {
		display: none;
	}

	a {
		outline: 0;
		display: block;
		font-size: 30%;

		&:hover img {
			box-shadow:
				0 0 3em 1.5em ${({ theme }) => theme.colors.white},
				0 0 3em 1.5em ${({ theme }) => theme.colors.violet},
				0 0 4em 2em ${({ theme }) => theme.colors.green};
		}
	}

	img {
		width: 5rem;
		height: auto;
		display: block;
		background: #F7F7FF;
		padding: 5px;
		position: relative;
		z-index: 10;
		transition: all 1s;

		@include media-breakpoint-down(sm) {
			margin: 0 auto 15px auto;
		}
	}
`;

const Section = ({ link, image, alt, title, subheader = false, date = false }) => {
	return (
		<StyledSection className="col d-flex align-items-start">
			<a href={link} className="flex-shrink-0 me-4">
				<img src={image} alt={alt} width="125" height="125" className="rounded-circle" />
			</a>
			<div>
				<h4>{title}</h4>
				{subheader && (
					<h5>{subheader}</h5>
				)}
				{date && (
					<p>{date}</p>
				)}
			</div>
		</StyledSection>
	);
}

export default Section;