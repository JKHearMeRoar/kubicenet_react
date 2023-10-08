import React from "react";

/**
 * Calculates the age based on the given birthday.
 * @param {string} birthday - The birthday in the format "YYYY-MM-DD".
 * @returns {number} The age in years.
 */
const CalculateAge = birthday => {
	const birthDate = new Date(birthday)
	const today = new Date()
	let age = today.getFullYear() - birthDate.getFullYear()
	const month = today.getMonth() - birthDate.getMonth()
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
		age--
	}
	return age
}

export default CalculateAge;