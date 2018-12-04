const db = require("../models");
const fs = require('fs')

// Defining methods for the booksController
module.exports = {
	getImg: function (req, res) {
		console.log('finding', req.params.id)
		var img = fs.readFileSync(__dirname + '/../assets/img/' + req.params.id);
		res.writeHead(200, { 'Content-Type': 'image' });
		res.end(img, 'binary');

	},
	findById: function (req, res) {
		db.Portfolio
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Portfolio
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Portfolio
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Portfolio
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
