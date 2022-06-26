const app = require("../../app.js");
const supertest = require("supertest");

describe("return json data for all stundents", () => {
	it("return an object with all students", async () => {
		await supertest(app)
			.get("/students")
			.expect(200)
			.then((response) => {
				expect(response.body.students).toBeInstanceOf(Array);
			});
	});

	it("returns an object with a number of students equal to or less than a limit", async () => {
		await supertest(app)
			.get("/students?limit=10")
			.expect(200)
			.then((response) => {
				expect(response.body.students).toBeInstanceOf(Array);
				expect(response.body.students.length).toBe(10);
			});
	});
});
