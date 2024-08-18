import React from "react";
import banner_img from "../../assets/images/banner_img.png";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="my-12 bg-[#1313130d]">
      <div className="py-6 px-8 md:py-20 md:px-28">
        <div className="flex md:items-center md:flex-row flex-col-reverse">
          <div className="md:w-3/5 text-center md:text-start">
            <h1 className="font-bold text-3xl md:text-5xl md:leading-[5.25rem]">
              Books to freshen <br />
              up your bookshelf
            </h1>
            <NavLink
              to={"/listed-books"}
              className="btn bg-[#23BE0A] text-white mt-10 hover:text-black"
            >
              View the List
            </NavLink>
          </div>
          <div className="md:w-2/5">
            <img src={banner_img} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
