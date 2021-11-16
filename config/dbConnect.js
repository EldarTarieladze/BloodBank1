const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connect");
    });
};
