import bookLogic from '../businessLogic/bookLogic.mjs';

const addBook = async (req, res) => {
  try {
    const result = await bookLogic.addBook(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const getAllBooks = async (req, res) => {
  try {
    const books = await bookLogic.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await bookLogic.getBookById(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { addBook, getAllBooks, getBookById };