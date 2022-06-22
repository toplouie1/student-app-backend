const {
	repeatNTimesWithSpace,
	capitalizeFirstLetter,
} = require("./stringUtils");

describe("take a string and number and repeat string same number of times, seperated by spaces", () => {
	it("handles an empty string", () => {
		expect(repeatNTimesWithSpace("", 0)).toBe("");
		expect(repeatNTimesWithSpace("", 5)).toBe("");
	});
	it("handles a string with 1 or more character", () => {
		expect(repeatNTimesWithSpace("a", 1)).toBe("a");
	});
});

describe("given a string capitalize the first letter and return the rest of the string connected", () => {
	it("handles an empty string", () => {
		expect(capitalizeFirstLetter("")).toBe("");
	});
	it("handles a string with 1 or more character", () => {
		expect(capitalizeFirstLetter("nima")).toBe("Nima");
	});
});
