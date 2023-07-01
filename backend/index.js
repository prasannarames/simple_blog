const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
let server;
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect with DB"));

server = app.listen(config.port, () => {
  console.log(`listening server on the port ${config.port}`);
});
