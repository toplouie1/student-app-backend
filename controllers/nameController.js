const express = require("express");
const repeatNTimesWithSpace = require("../utils/stringUtils");

const controller = express.Router();

controller.get("/:name/:times", (req, res) => {
	try {
		const name = req.params.name;
		const times = req.params.times;

		const repeatedNames = repeatNTimesWithSpace(name, times);
		res.send(repeatedNames);
	} catch (err) {
		res.send("There was an error.");
	}
});

module.exports = controller;
