const borrowingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  bookId: mongoose.Schema.Types.ObjectId,
  borrowedAt: Date,
  dueDate: Date,
  returned: Boolean,
});
module.exports = mongoose.model("Borrowing", borrowingSchema);
