// Select the HTML element to manipulate the first date
const date1 = document.querySelector("#date1");
// Try to complete the method with options
try {
	const options = {
		year: "numeric"
	};
	date1.innerHTML = `${new Date().toLocaleDateString("en-UK", options)}`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}

// Select the HTML element to manipulate the second date
document.querySelector("#date2");
// Try to complete the method with options
try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date2.innerHTML = `${new Date().toLocaleDateString("en-UK", options)}`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}