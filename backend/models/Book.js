const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  genre: String,
  stock: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});
module.exports = mongoose.model("Book", bookSchema);
