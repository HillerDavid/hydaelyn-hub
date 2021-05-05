const router = require("express").Router();
const characterRoutes = require("./characters");

// Routes
router.use("/characters", characterRoutes)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;