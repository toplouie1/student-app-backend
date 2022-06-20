const express = require("express");

// initialize app
const app = express();

// route
app.get("/", (req, res) => {
	res.send("Hello World");
});

// export app
module.exports = app;
