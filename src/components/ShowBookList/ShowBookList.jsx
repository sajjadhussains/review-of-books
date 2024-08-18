import React from "react";
import "../../index.css";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ShowBookList = ({ data }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = data;
  return (
    <div className="border rounded-2xl mb-6">
      <div className="m-6 md:flex gap-6">
        <div className="md:w-[230px]  flex items-center justify-center bg-[#1313130d] rounded-2xl">
          <img className="w-[129px] h-[172px] mx-12 my-7" src={image} alt="" />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-2xl font-bold mb-4">{bookName}</h1>
          <p className="font-work-sans text-base text-[#131313cc] mb-4">
            By:{author}
          </p>
          <div className="flex flex-wrap items-center gap-5 font-work-sans mb-4">
            <p className="font-bold">Tag:</p>
            {tags.map((tag, idx) => (
              <button
                className="px-4 py-2 bg-[#23be0a0d] rounded-[1.875rem] font-work-sans text-[#23BE0A]"
                key={idx}
              >
                # {tag}
              </button>
            ))}
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p>year of publishing: {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex items-center font-work-sans gap-4 border-b pb-4 mb-4 flex-wrap">
            <h1 className="flex items-center gap-1">
              <IoPeopleOutline />
              <p>Publisher: {publisher}</p>
            </h1>
            <h1 className="flex items-center gap-1">
              <MdOutlineContactPage />
              <p>Page: {totalPages}</p>
            </h1>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrinks">
            <button className="px-4 py-2 bg-[#328eff26] rounded-[1.875rem] font-work-sans text-[#328EFF]">
              Category:{category}
            </button>
            <button className="px-4 py-2 bg-[#328eff26] rounded-[1.875rem] font-work-sans text-[#328EFF]">
              Rating:{rating}
            </button>
            <NavLink to={`/book/${bookId}`}>
              <button className="px-4 py-2 bg-[#23BE0A] rounded-[1.875rem] font-work-sans text-white">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookList;
