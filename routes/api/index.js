const router = require("express").Router();
const projectsRoutes = require("./projects");
const imgRoutes = require("./imgs");
const bioRoutes = require("./bio");




router.use("/projects", projectsRoutes);
router.use('/img', imgRoutes)
router.use('/bio', bioRoutes)
router.use('/admin', (req, res) => {
	res.send({auth: req.connection._peername.address === '::1'})
})

module.exports = router;
