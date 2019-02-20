const bio = require('../models/bio')

// Defining methods for the dataController
module.exports = {
	getBio: (req, res) => res.send(bio)
};
