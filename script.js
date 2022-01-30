"use strict";

window.addEventListener("DOMContentLoaded", () => {

	const btn = document.querySelector('.btn-primary'),
		hexCodeValue = document.querySelector('#hex-code');



	function changeColor() {
		const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
		let hexCode = '';

		for (let i = 0; i < 6; i++) {
			const randomIndex = Math.floor(Math.random() * hexNumbers.length);
			hexCode += hexNumbers[randomIndex];
		}

		hexCodeValue.innerHTML = hexCode;
		document.body.style.backgroundColor = '#' + hexCode;
	}

	btn.addEventListener('click', changeColor);

});