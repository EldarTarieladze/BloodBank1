const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  histroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "historys",
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
