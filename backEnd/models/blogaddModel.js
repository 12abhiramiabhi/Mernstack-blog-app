const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
    maxLength: 500,
  },
  discription: {
    type: String,
    maxLength: 900,
    required: [true, "you must enter email"],
  },
  date: {
    type: String,
    maxLength: 200,
    required: true,
  },
});
module.exports = mongoose.model("blog", blogSchema);
