const express = require("express");
const logger = require('morgan')
// const schedule = require('node-schedule')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const http = require('http')

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/mysite`);

// Start the API server
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT}`);

  // Helps to keep the deployment live on Heroku
	setInterval(function() {
		http.get("http://jesse-harrah.herokuapp.com");
	}, 600000); // every 10 minutes
});
