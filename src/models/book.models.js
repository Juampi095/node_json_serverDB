import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    publication_date: String
})

const bookModel = mongoose.model('Book',bookSchema);

export default bookModel;