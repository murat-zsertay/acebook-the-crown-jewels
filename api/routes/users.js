const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
// Added route for the image saving
router.post("/image", UsersController.SaveImage);

module.exports = router;
