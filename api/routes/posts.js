const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/:post_id", PostsController.FindPostById);
router.get("/", PostsController.Index);
router.post("/:post_id/comment", PostsController.CreateComment);
router.post("/:post_id/likes", PostsController.AddLike);
router.post("/",PostsController.FormHandler,PostsController.Create);


module.exports = router;
