const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

router.post("/:bookId", async (req, res) => {
  const review = new Review({
    userId: req.user.id,
    bookId: req.params.bookId,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  await review.save();
  res.json(review);
});

router.get("/:bookId", async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.bookId });
  res.json(reviews);
});

module.exports = router;
