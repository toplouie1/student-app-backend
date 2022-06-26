const express = require("express");
const controller = express.Router();

const studentData = require("../studentData.json");

// getting student data depending on limit

controller.get("/", (req, res) => {
	// how do i hanle a query string ?
	let { limit = 25 } = req.query;
	limit = Number(limit);
	let studentDataForDelivery = { ...studentData };

	studentDataForDelivery.students = studentDataForDelivery.students.slice(
		0,
		limit
	);

	res.json({ studentDataForDelivery });
});

//  student depending on their id

controller.get("/:id", (req, res) => {
	try {
		const studentId = req.params.id;
		if (!/[0-9]/.test(studentId)) {
			res.send("Student id must be a number");
			return;
		}
		const singleStudent = studentData.students.find((student) => {
			return student.id === studentId;
		});
		if (singleStudent) {
			res.json(singleStudent);
		} else {
			res.send("Student not found");
		}
	} catch (err) {
		res.status(500).send("An error occurred");
	}
});

// write a route to get a student by their full nam
module.exports = controller;
