const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
