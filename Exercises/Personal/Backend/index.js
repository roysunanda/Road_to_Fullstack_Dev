import express from "express";

const app = express();
const PORT = 3000;

const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
  },
  { id: 2, title: "Clean Code", author: "Robert C. Martin" },
  { id: 3, title: "You Don’t Know JS Yet", author: "Kyle Simpson" },
  { id: 4, title: "Introduction to Algorithms", author: "Thomas H. Cormen" },
  {
    id: 5,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma et al.",
  },
  { id: 6, title: "Refactoring", author: "Martin Fowler" },
  { id: 7, title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  { id: 8, title: "Effective Java", author: "Joshua Bloch" },
  {
    id: 9,
    title: "Head First Design Patterns",
    author: "Eric Freeman, Elisabeth Robson",
  },
  {
    id: 10,
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
  },
];

app.use(express.json());

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(404).json({ error: `id must be type number.` });
  }

  const book = books.find((e) => {
    e.id === id;
  });

  if (!book) {
    return res.status(404);
  }
});
