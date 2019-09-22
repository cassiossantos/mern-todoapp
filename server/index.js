require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./config/db");
const routes = require("./routes/index");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/api", routes);
app.listen(process.env.SERVER_PORT, function() {
    console.log("Server running on port:", process.env.SERVER_PORT);
});
