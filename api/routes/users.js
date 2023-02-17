const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.get("/getPoster/:user_id", UsersController.FindUserById);

module.exports = router;
