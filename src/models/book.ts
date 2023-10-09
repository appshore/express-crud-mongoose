import mongoose, { Schema } from "mongoose";

import { IBook, IBookDoc, IBookModel } from "../interfaces/book";

const bookSchema = new mongoose.Schema<IBookDoc, IBookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    average_rating: {
      type: Schema.Types.Decimal128,
    },
    language_code: {
      type: String,
    },
    num_pages: {
      type: Number,
    },
    ratings_count: {
      type: Number,
    },
    text_reviews_count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<IBookDoc, IBookModel>("Book", bookSchema);

export default Book;
