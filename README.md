-- Apllication

Goal this app building a backend REST API using Node.js, Express, MongoDB, and JWT that allows librarians to manage books and users to borrow, return, and review books.

-- How to use apis

// Register
POST -> http://localhost:3000/api/auth/register

// Login
POST -> http://localhost:3000/api/auth/login

// Get Current User
GET -> http://localhost:3000/api/auth/me (Authorization: Bearer <token>)

// Get Current User
GET -> http://localhost:3000/api/auth/me (Authorization: Bearer <admin-token>)

// Add Book
POST -> http://localhost:3000/api/books (Authorization: Bearer <admin-token>)

// Get All Books
GET -> http://localhost:3000/api/books (Authorization: Bearer <token>)

// Borrow Book
POST -> http://localhost:3000/api/borrow/bookId (Authorization: Bearer <token>)

// Return Book
POST -> http://localhost:3000/api/borrow/return/bookId (Authorization: Bearer <token>)

// Add Review
POST -> http://localhost:3000/api/reviews/bookId (Authorization: Bearer <token>)

// Get Book Reviews
GET -> http://localhost:3000/api/reviews/bookId (Authorization: Bearer <token>)
