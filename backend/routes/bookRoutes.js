const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

router.post("/", async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

router.put("/:id", async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(book);
});

router.delete("/:id", async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
