const router = require("express").Router();
const projectsRoutes = require("./projects");
const imgRoutes = require("./imgs");

// Book routes
router.use("/projects", projectsRoutes);
router.use('/img', imgRoutes)

module.exports = router;
