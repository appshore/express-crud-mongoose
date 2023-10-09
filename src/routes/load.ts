import express from "express";
import Book from "../models/book";

import { readCSVToJSON } from "../utils/readCSV.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await readCSVToJSON("books.csv");
    console.log(`books: ${JSON.stringify(books)}`);

    books?.forEach((book: any) => {
      console.log(`book: ${JSON.stringify(book)}`);
      Book.create(book);
    });

    res.json(books);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
