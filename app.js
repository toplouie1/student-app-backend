const express = require("express");
const cors = require("cors");

// initialize app
const app = express();

// Middle ware
app.use(cors);

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
