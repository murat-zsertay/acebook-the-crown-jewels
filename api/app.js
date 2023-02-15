require("./utils")
const express = require("express");
const path = require("path");
const logger = require("morgan");

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const postsRouter = require("./routes/posts");
const tokensRouter = require("./routes/tokens");
const usersRouter = require("./routes/users");

const {tokenChecker, errorHandler, catch404} = require("./expresssMiddleware");

const app = express();
// setup for receiving JSON
app.use(express.json())
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//function to upload an image to the uploads folder and set the url
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ 'imageUrl': imageUrl });
});

// middleware function to check for valid tokens

// route setup
app.use("/posts", tokenChecker, postsRouter);
app.use("/tokens", tokensRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(catch404);

// error handler
app.use(errorHandler);

module.exports = app;
