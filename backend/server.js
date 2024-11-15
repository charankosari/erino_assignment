// const app = require("./app");
// require("dotenv").config();
// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const app = require("./app");
require("dotenv").config();
// const { config } = require("dotenv");
// const connectDatabase = require("./config/database");
require("dotenv").config();
// handling uncaught error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to uncaught error...........");
  process.exit(1);
});

// env config
// config({ path: "config/config.env" });

// database connection
// connectDatabase();

// app listening at port
const server = app.listen(process.env.PORT, () =>
  console.log(`app is running at port ${process.env.PORT}`)
);

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    "shutting down the server due to Unhandled promise rejection..........."
  );
  server.close(() => {
    process.exit(1);
  });
});
