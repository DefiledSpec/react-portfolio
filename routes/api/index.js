require('dotenv').config()
const router = require("express").Router();
const projectsRoutes = require("./projects");
const imgRoutes = require("./imgs");
const bioRoutes = require("./bio");

router.use("/projects", projectsRoutes);
router.use('/img', imgRoutes)
router.use('/bio', bioRoutes)
router.post('/login', (req, res) => {
	console.log(req.body)
})
router.post('/register', (req, res) => {
	console.log(req.body)
})
router.use('/admin/:secret', (req, res) => {
	// console.log(req.params.secret === process.env.AUTHSECRET)
	res.send(req.params.secret === process.env.AUTHSECRET)
})

module.exports = router;
