import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  bookId: String,
  bookName: String,
  author: String,
  edition: String,
  publisher: String,
  image: String,
});

export default mongoose.model('Book', bookSchema);