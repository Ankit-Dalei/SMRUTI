import express from 'express';
import bodyParser from 'body-parser';
import userService from './services/userService.mjs';
import bookService from './services/bookService.mjs';
import mongoose from 'mongoose';
import cors from "cors";

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/smruti', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use(bodyParser.json());

// Routes
app.post('/signup', userService.signup);
app.post('/login', userService.login);
app.post('/addBook', bookService.addBook);



// get
app.get('/books', bookService.getAllBooks);
app.get('/books/count', bookService.getAllBooksCount);
app.get('/users', userService.getAllUsers);
app.get('/userscount', userService.getAllUsersCount);


// Add this route in server.mjs
app.get('/books/:bookId', bookService.getBookById);

// 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});