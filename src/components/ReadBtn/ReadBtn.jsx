import React from "react";
import "../../index.css";

const ReadBtn = ({ handleReadList, handleWishList }) => {
  return (
    <div className="flex items-center font-work-sans h-12 mt-12">
      <button
        onClick={handleReadList}
        className="px-3 py-3 rounded-t-lg rounded-b-sm border-t border-l border-r border-t-[#1313134d] border-l-[#1313134d] border-r-[#1313134d] w-[14rem] h-full text-[#131313cc]"
      >
        Read Books
      </button>
      <div className="border-b border-b-[#1313134d] w-full">
        <button className="px-3 py-3 text-[#13131380]" onClick={handleWishList}>
          Wishlist Books
        </button>
      </div>
    </div>
  );
};

export default ReadBtn;
