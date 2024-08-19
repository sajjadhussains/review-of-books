import React, { useEffect, useState } from "react";
import "../../index.css";
import filter_icon from "../../assets/images/filter_icon.png";
import {
  getStoredReadList,
  getStoredWishList,
} from "../../utilities/localStorage";
import ReadBtn from "../ReadBtn/ReadBtn";
import WishBtn from "../WishBtn/WishBtn";
import ShowBookList from "../ShowBookList/ShowBookList";

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
        // console.log(data);
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
  const handleBooksFilter = (filter) => {
    let sortedData = [...datas];
    if (filter === "rating") {
      sortedData.sort((a, b) => b.rating - a.rating);
    } else if (filter === "pages") {
      sortedData.sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === "publish") {
      sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    setDatas(sortedData);
  };
  return (
    <div className="mt-6">
      <div className="bg-[#1313130d] h-24 flex justify-center items-center">
        <h1 className="text-3xl font-bold font-work-sans">Books</h1>
      </div>
      <div className="flex justify-center mt-8">
        <div className="dropdown">
          <div
            tabIndex={0}
            className="bg-[#23BE0A] px-5 py-3 rounded-lg flex items-center gap-1 text-white font-work-sans text-lg cursor-pointer hover:shadow-lg"
          >
            Sort by <img src={filter_icon} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="font-work-sans dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleBooksFilter("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBooksFilter("pages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleBooksFilter("publish")}>
              <a>Published Year</a>
            </li>
          </ul>
        </div>
      </div>
      {isTrue ? (
        <ReadBtn
          handleReadList={handleReadList}
          handleWishList={handleWishList}
        ></ReadBtn>
      ) : (
        <WishBtn
          handleReadList={handleReadList}
          handleWishList={handleWishList}
        ></WishBtn>
      )}
      <div className="mt-8">
        {datas.map((data, idx) => (
          <ShowBookList key={idx} data={data}></ShowBookList>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
