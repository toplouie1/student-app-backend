// write a function that takes a string and number , and repeats the strign
// n times with a space in the middle of each time .

function repeatNTimesWithSpace(string, n) {
	if (!string) return "";
	return new Array(n).fill(string).join(" ");
}

function capitalizeFirstLetter(string) {
	if (!string) return "";
	return string[0].toUpperCase() + string.slice(1);
}

module.exports = { repeatNTimesWithSpace, capitalizeFirstLetter };
