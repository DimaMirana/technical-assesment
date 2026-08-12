const express = require("express");

const navigationController = require("../controllers/navigation.controller");

const router = express.Router();

router.route("/").get(navigationController.getNavigation);


module.exports = router;