const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  doctorID: {
    type: mongoose.Types.ObjectId,
    ref: "doctors",
    required: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("historys", historySchema);
