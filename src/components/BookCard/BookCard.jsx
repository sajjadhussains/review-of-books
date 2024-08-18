import React from "react";
import { CiStar } from "react-icons/ci";
import "./BookCard.css";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="p-6 border border-[#13131326] rounded-2xl">
        <div className="md:w-80 flex justify-center bg-[#F3F3F3] rounded-2xl items-center h-56">
          <img src={image} alt="" />
        </div>
        <div className="pt-6">
          {tags.map((tag, idx) => (
            <button
              href=""
              className="px-4 py-2 bg-[#23be0a0d] rounded-[1.875rem] mr-3 font-work-sans"
              key={idx}
            >
              {tag}
            </button>
          ))}
          <h1 className="text-2xl font-bold mt-4">{bookName}</h1>
          <p className="text-[#131313cc] mt-4 font-work-sans">By:{author}</p>
          <div className="flex justify-between font-work-sans mt-10">
            <p>{category}</p>
            <h1 className="flex items-center">
              <span>{rating}</span>
              <CiStar />
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
