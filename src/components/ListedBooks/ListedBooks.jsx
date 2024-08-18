import React, { useEffect, useState } from "react";
import "../../index.css";
import filter_icon from "../../assets/images/filter_icon.png";
import {
  getStoredReadList,
  getStoredWishList,
} from "../../utilities/localStorage";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [datas, setDatas] = useState([]);
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    // Fetch books and set initial data
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        // Set initial data to the read list or wish list, or all books
        const readIds = getStoredReadList();
        const initialData = data.filter((book) =>
          readIds.includes(book.bookId)
        );
        setDatas(initialData);
      });
  }, []);

  const handleReadList = () => {
    setIsTrue(true);
    const readIds = getStoredReadList();
    const readLists = books.filter((book) => readIds.includes(book.bookId));
    setDatas(readLists);
  };

  const handleWishList = () => {
    setIsTrue(false);
    const wishIds = getStoredWishList();
    const wishLists = books.filter((book) => wishIds.includes(book.bookId));
    setDatas(wishLists);
  };

  return (
    <div className="mt-6">
      <div className="bg-[#1313130d] h-24 flex justify-center items-center">
        <h1 className="text-3xl font-bold font-work-sans">Books</h1>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#23BE0A] px-5 py-3 rounded-lg flex items-center gap-1 text-white font-work-sans text-lg">
          Sort by <img src={filter_icon} alt="" />
        </button>
      </div>
      <div>
        {datas.map((data, idx) => (
          <li key={idx}>{data.bookName}</li>
        ))}
        <button onClick={handleReadList}>read</button>
        <br />
        <br />
        <button onClick={handleWishList}>wish</button>
      </div>
    </div>
  );
};

export default ListedBooks;
