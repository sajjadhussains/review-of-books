import React, { useEffect, useState } from "react";
import "../../index.css";
import filter_icon from "../../assets/images/filter_icon.png";
import {
  getStoredReadList,
  getStoredWishList,
} from "../../utilities/localStorage";
import ReadBtn from "../ReadBtn/ReadBtn";
import WishBtn from "../WishBtn/WishBtn";

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
      {isTrue ? (
        <div className="flex items-center font-work-sans h-12 mt-12">
          <button
            onClick={handleReadList}
            className="px-3 py-3 rounded-t-lg rounded-b-sm border-t border-l border-r border-t-[#1313134d] border-l-[#1313134d] border-r-[#1313134d] w-[14rem] h-full text-[#131313cc]"
          >
            Read Books
          </button>
          <div className="border-b border-b-[#1313134d] w-full">
            <button
              className="px-3 py-3 text-[#13131380]"
              onClick={handleWishList}
            >
              Wishlist Books
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center font-work-sans h-12 mt-12">
          <button
            onClick={handleReadList}
            className="px-3 py-3 rounded-t-lg w-[14rem] border-b border-b-[#1313134d] text-[#13131380]"
          >
            read Books
          </button>
          <button
            className="px-3 py-3 text-[#131313cc] rounded-t-lg border-t border-l border-r border-t-[#1313134d] border-l-[#1313134d] border-r-[#1313134d] w-[14rem]"
            onClick={handleWishList}
          >
            Wishlist Books
          </button>
          <div className="w-full h-full border-b border-b-[#1313134d]"></div>
        </div>
      )}
    </div>
  );
};

export default ListedBooks;
