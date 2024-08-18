import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {books.map((book) => (
        <BookCard key={book.bookId} book={book}></BookCard>
      ))}
    </div>
  );
};

export default Books;
