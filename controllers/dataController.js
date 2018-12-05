const bio = require('../models/bio')

// Defining methods for the dataController
module.exports = {
	getBio: function (req, res) {
		console.log('finding bio', bio)

		res.send(bio)
	},
};
