const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const routes = require("./routes/v1")

const app = express();

// to set security http headers
app.use(helmet);

// to parse json request body
app.use(express.json);

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// Reroute all API request starting with "/v1" route
app.use("/v1", routes);

module.exports = app;
