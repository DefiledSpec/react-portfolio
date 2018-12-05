const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Matches with "/api/imgs"
router.route("/")
  .get(dataController.getBio)
//   .post(imgsController.create);

// Matches with "/api/imgs/:id"
// router
//   .route("/:id")
//   .get(dataController.getImg)
//   .put(imgsController.update)
//   .delete(imgsController.remove);

module.exports = router;