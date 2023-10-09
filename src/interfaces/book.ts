import { Document, Model, Schema } from "mongoose";

export interface IBook {
  title: string;
  authors: string[];
  average_rating: Schema.Types.Decimal128;
  language_code: string;
  num_pages: number;
  ratings_count: number;
  text_reviews_count: number;
}

export interface IBookDoc extends IBook, Document {}

export interface IBookModel extends Model<IBookDoc> {}

export type UpdateBookBody = Partial<IBook>;

export type NewCreatedBook = Partial<IBook>;
