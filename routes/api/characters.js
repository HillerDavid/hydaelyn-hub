const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

router.route("/")
    .get(charactersController.findAll)
//     .post(characterController.create);

// router.route("/:name")
//     .get(charactersController.search)
    // .put(characterController.update)
    // .delete(characterController.remove);

module.exports = router;