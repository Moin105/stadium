import React from "react";
import searchIcon from '../../assets/svg/search.svg';

const BannerContent = ({title, subTitle, search, className}) => {
  return (
    <div className={`w-full max-w-[500px] text-white text-center ${className}`}>
      <h1 className="text-[40px] font-semibold leading-[50px]">
        {title}
      </h1>
      <p className="leading-[26px] font-normal mt-1">
        {subTitle}
      </p>
      {search === true && <div className="flex items-center pr-5 w-full rounded-full bg-white mt-10 h-[50px] overflow-hidden">
        <input
          className="text-black text-sm w-full border-none bg-transparent px-5 py-1 outline-none focus:outline-none placeholder:text-[#201E1E]"
          type="text"
          name="search"
          placeholder="Search"
        />
        <img src={searchIcon} className="w-5 h-5" alt="search" />
      </div>}
    </div>
  );
};

export default BannerContent;
