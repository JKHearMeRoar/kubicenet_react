import React from 'react';
import styled from 'styled-components';
import check from "../assets/images/check.png";

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
		height: 5rem;
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

	ul {
		li {
			display: block;
			padding-left: 30px;
			background: url(${check}) no-repeat 0% 20%;

			@include media-breakpoint-down(sm) {
				padding: 0;
				background: transparent;
			}
		}
	}
`;

const Section = ({ link, image, alt, title, subheader = false, date = false, responsibilities = false }) => {

	return (
		<StyledSection className="col d-flex align-items-start pb-4">
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
				{responsibilities && (
					<ul>
						{Object.keys(responsibilities).map((key) => (
							<li key={key}>{responsibilities[key]}</li>
						))}
					</ul>
				)}
			</div>
		</StyledSection>
	);
}

export default Section;