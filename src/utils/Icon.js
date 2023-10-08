import React from "react";
import Icons from "../assets/images/icons.svg";
import PropTypes from 'prop-types';

const Icon = ({ name, color, size, title }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <title>{title}</title>
	<use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string
};

export default Icon;