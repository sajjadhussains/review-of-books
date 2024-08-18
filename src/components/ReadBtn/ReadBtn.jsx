import React from "react";

const ReadBtn = ({ handleReadList, handleWishList }) => {
  return (
    <div className="flex items-center font-work-sans">
      <button
        onClick={handleReadList}
        className="px-3 py-4 rounded-t-lg rounded-b-sm border-t border-l border-r w-[8.563rem]"
      >
        read Books
      </button>
      <div className="border-b w-full">
        <button className="px-3 py-4 text-[#13131380]" onClick={handleWishList}>
          Wishlist Books
        </button>
      </div>
    </div>
  );
};

export default ReadBtn;
