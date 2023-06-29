const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;

//database

// routes
app.get("/", (req, res) => res.send("API RUNNING WELL"));

// listener
app.listen(PORT, () => console.log(`server running on port ${PORT}`.bgCyan));
