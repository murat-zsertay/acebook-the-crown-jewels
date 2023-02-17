const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const LikeSchema = new mongoose.Schema({
    user_id: String
},{timestamps:true});


module.exports = {LikeSchema};