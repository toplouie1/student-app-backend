const express = require("express");

// initialize app
const app = express();

const studentsController = require("./controllers/studentscontroller");
const nameController = require("./controllers/nameController");

app.use("/students", studentsController);
app.use("/names", nameController);

// route
app.get("/", (req, res) => {
	res.send("Hello World");
});

// export app
module.exports = app;
