import express from "express";
import Book from "../models/book";
import { IBookDoc } from "../interfaces/book";

const router = express.Router();

const getBookById = async (id: string): Promise<IBookDoc | null> => {
  return await Book.findById(id);
};

router.get("/", async (req, res) => {
  res.json(await Book.find());
});

router.delete("/:bookId", async (req, res) => {
  const id = req.params.bookId;
  res.json(await Book.findByIdAndDelete(id));
});

router.get("/:bookId", async (req, res) => {
  const id = req.params.bookId;
  res.json(await getBookById(id));
});

router.post("/:bookId", async (req, res) => {
  const id = req.params.bookId;
  const book = await getBookById(id);

  if (!(await getBookById(id))) {
    const book = new Book();
    book.title = req.body.title;
    book.authors = req.body.authors;
    book.average_rating = req.body.average_rating;
    book.language_code = req.body.language_code;
    book.num_pages = req.body.num_pages;
    book.ratings_count = req.body.ratings_count;
    book.text_reviews_count = req.body.text_reviews_count;
    await Book.create();

    res.json(book);
  }

  res.status(409).send("Book already exists");
});

router.put("/:bookId", async (req, res) => {
  const id = req.params.bookId;
  const book = await getBookById(id);

  if (book) {
    book.title = req.body.title;
    book.authors = req.body.authors;
    book.average_rating = req.body.average_rating;
    book.language_code = req.body.language_code;
    book.num_pages = req.body.num_pages;
    book.ratings_count = req.body.ratings_count;
    book.text_reviews_count = req.body.text_reviews_count;
    await book.save();

    res.json(book);
  }

  res.status(404).send("Book not found");
});

export default router;
