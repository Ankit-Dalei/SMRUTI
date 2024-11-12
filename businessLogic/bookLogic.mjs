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

const getBookCounts = async () => {
  try {
    // Count all books
    const totalBooks = await Book.countDocuments();

    return { totalBooks };
  } catch (error) {
    console.error("Error fetching book counts:", error);
    throw error;
  }
};


export default { addBook, getAllBooks, getBookById, getBookCounts };