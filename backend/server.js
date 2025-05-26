const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const { authenticateUser } = require("./middlewares/authMiddleware");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", authenticateUser, bookRoutes);
app.use("/api/borrow", authenticateUser, borrowRoutes);
app.use("/api/reviews", authenticateUser, reviewRoutes);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() =>
//     app.listen(3000, () => console.log("Server running on port 3000"))
//   )
//   .catch((err) => console.log(err));

connectDB().then(() => {
  app.listen(3000, () => {
    console.log(" Server running on port 3000");
  });
});
