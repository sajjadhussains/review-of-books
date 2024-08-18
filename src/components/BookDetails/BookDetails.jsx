import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./BookDetails.css";
import {
  getStoredReadList,
  savedReadList,
  savedWishList,
} from "../../utilities/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const book = useLoaderData();
  const { id } = useParams();
  const bookDetails = book.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
    rating,
  } = bookDetails;

  const handleReadList = () => {
    if (savedReadList(id)) {
      toast.success("successfully added to read list");
    } else {
      toast.error("Its already been added to the list");
    }
  };
  const handleWishList = () => {
    if (savedWishList(id)) {
      toast.success("Successfully added to the wishlist");
    } else {
      const readLists = getStoredReadList();
      const exist = readLists.find((bookId) => bookId === id);
      if (exist) {
        toast.error("Its already been read");
      } else {
        toast.error("Its already added to wishlist");
      }
    }
  };
  return (
    <div className="mx-10 md:mx-0 md:flex md:justify-start md:gap-12 mt-12">
      <ToastContainer />
      <div className="w-full py-10 md:py-0 md:w-[47%] md:h-[44.44rem] border flex justify-center items-center bg-[#F3F3F3]">
        <figure className="md:w-[26.563rem] md:h-[35.25rem]">
          <img className="w-full" src={image} alt="" />
        </figure>
      </div>
      <div className="w-full md:w-[50%] flex flex-col">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <div>
          <h1 className="font-work-sans text-xl font-medium mt-4 mb-5">
            By:{author}
          </h1>
          <div className="py-4 border-t border-b border-[#13131326] mb-6">
            <p className="font-work-sans font-medium">{category}</p>
          </div>
          <p className="mb-6">
            <span className="font-bold font-work-sans">review:</span>
            {review}
          </p>
          <div className="flex items-center flex-wrap pb-6 mb-6 border-b border-[#13131326] gap-8">
            <p className="font-bold font-work-sans">Tag</p>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-[#23be0a0d] rounded-[1.875rem] font-work-sans text-[#23BE0A]"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="font-work-sans">
            <p className="flex gap-16 mb-3">
              <span className="text-[#131313b3] w-[9rem]">
                Number of Pages:
              </span>
              <span className="font-bold">{totalPages}</span>
            </p>
            <p className="flex gap-16 mb-3">
              <span className="text-[#131313b3] w-[9rem]">Publisher:</span>
              <span className="font-bold">{publisher}</span>
            </p>
            <p className="flex gap-16 mb-3">
              <span className="text-[#131313b3] w-[9rem]">
                Year of Publishing
              </span>
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p className="flex gap-16 mb-8">
              <span className="text-[#131313b3] w-[9rem]">Rating</span>
              <span className="font-bold">{rating}</span>
            </p>

            <button
              onClick={handleReadList}
              className="px-7 py-4 border border-[#1313134d] rounded-lg mr-4 hover:bg-[#23BE0A]"
            >
              Read
            </button>

            <button
              onClick={handleWishList}
              className="px-7 py-4 border border-[#1313134d] rounded-lg bg-[#50B1C9] hover:shadow hover:shadow-cyan-700"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
