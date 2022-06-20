const express = require("express");

// initialize app
const app = express();

const studentsController = require("./controllers/studentscontroller");

app.use("/students", studentsController);

// route
app.get("/", (req, res) => {
	res.send("Hello World");
});

// export app
module.exports = app;
