const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");
const multer = require('multer')
const path = require('path')

const upload = multer({
	dest: path.join(__dirname, '/assets/img')
})

// Matches with "/api/projects"
router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(upload.single('img'), (req, res) => {
	  console.log(req.body)
  })
  .delete(projectsController.remove);

module.exports = router;
