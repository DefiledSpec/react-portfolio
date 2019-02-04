require('dotenv').config()
const router = require("express").Router();
const projectsRoutes = require("./projects");
const imgRoutes = require("./imgs");
const bioRoutes = require("./bio");




router.use("/projects", projectsRoutes);
router.use('/img', imgRoutes)
router.use('/bio', bioRoutes)
router.use('/admin/:secret', (req, res) => {
	res.send(req.params.secret === process.env.AUTHSECRET)
})

module.exports = router;
