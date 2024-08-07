import { useEffect } from "react";
import { useState } from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
      );
      const allBooks = await response.json();
      setBooks(allBooks);
    };

    getBooks();
  }, []);

  return (
    <>
      <h2>All Books</h2>
      {books.map((singleBook) => {
        return (
          <section key={singleBook.id}>
            <h2>{singleBook.title}</h2>
            <img src="url" alt="book image" />
          </section>
        );
      })}
    </>
  );
};

export default AllBooks;
