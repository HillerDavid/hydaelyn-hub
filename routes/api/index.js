const router = require("express").Router();
const characterRoutes = require("./characters");

// Routes
router.use("/characters", characterRoutes)

module.exports = router;