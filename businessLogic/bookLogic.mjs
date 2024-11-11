import Book from '../models/Book.mjs';

const addBook = async ({ bookId, bookName, author, edition, publisher, image }) => {
  const book = new Book({ bookId, bookName, author, edition, publisher, image });
  await book.save();
  return { message: 'Book added successfully' };
};


const getAllBooks = async () => {
  return await Book.find({});
};


const getBookById = async (bookId) => {
  return await Book.findOne({ bookId });
};

export default { addBook, getAllBooks, getBookById };