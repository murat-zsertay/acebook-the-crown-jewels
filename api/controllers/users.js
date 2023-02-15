const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }
    });
  },

  // Save image to user, again we need userId from the token so need to figure out
  SaveImage: (req, res) => {
    let userId = req.userId
    let imageUrl = req.imageUrl
    User.findById({_id: userId}, async (err, user) => {
      if (err) {
        throw err;
      }
      user.image = imageUrl
      await post.save();
      const token = await TokenGenerator.jsonwebtoken(userId)
      res.status(201).json({message: 'Image added to user', token});
    })
  }
};

module.exports = UsersController;
