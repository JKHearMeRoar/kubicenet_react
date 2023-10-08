import React from "react";

/**
 * Animates a number from 0 to the target number over a specified duration.
 * @param {string} targetNumber - The ID of the HTML element that contains the target number.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
const animateNumber = (targetNumber, duration) => {
	const startingNumber = 0;
	const startTime = performance.now();
	const numberElement = document.getElementById(targetNumber);
	const numberElementValue = parseInt(numberElement.textContent, 10);

	function updateNumber(currentTime) {
		const elapsedTime = currentTime - startTime;
		if (elapsedTime >= duration) {
			// Animation finished
			numberElement.textContent = numberElementValue;
			return;
		}

		const progress = elapsedTime / duration;
		const logarithmicProgress = 1 - Math.pow(1 - progress, 4); // Adjust the power (4) for desired effect
		const currentNumber = Math.round(startingNumber + (numberElementValue - startingNumber) * logarithmicProgress);

		numberElement.textContent = currentNumber;

		// Request the next animation frame
		requestAnimationFrame(updateNumber);
	}

	// Start the animation
	requestAnimationFrame(updateNumber);
}

export default animateNumber;