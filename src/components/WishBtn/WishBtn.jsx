import React from "react";
import "../../index.css";

const WishBtn = ({ handleWishList, handleReadList }) => {
  return (
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
  );
};

export default WishBtn;
