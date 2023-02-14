const mongoose = require("mongoose");
const addCommendSchema = mongoose.Schema({
  userName: {
    required: true,
    type: String,
    maxLength: 500,
  },
  CommendText: {
    type: String,
    maxLength: 900,
    required: [true, "you must enter email"],
  },
  date: {
    type: String,
    maxLength: 200,
    required: true,
  },
  blogId: {
    type: String,
  },
});
module.exports = mongoose.model("commend", addCommendSchema);
