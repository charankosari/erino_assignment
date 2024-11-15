const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();
connectDB();
app.use(cors({ credentials: true, origin: true }));
// cookie parser
app.use(cookieParser());
// morgan logger [to show the request details in console]
app.use(logger("tiny"));
// body parser
app.use(express.json());
app.use("/api", contactRoutes);

module.exports = app;
