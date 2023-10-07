import React from "react";

// Function calculateAge return age in years based on input in 1991-08-13 format
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