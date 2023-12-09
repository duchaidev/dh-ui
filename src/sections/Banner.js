import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex items-center justify-center py-[8%] flex-col gap-8 px-[30%]">
      <div className="p-6 border-primaryblack border-[4px]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 9H4M9 1.5V4M5.5 5.5L3.66667 3.66667M12.5 5.5L14.3333 3.66667M5.5 12.5L3.66667 14.3333M9 9L16.5 11.5L13.1667 13.1667L11.5 16.5L9 9Z"
            stroke="#CCCCCC"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h1 className="font-bold text-[40px] text-center">
        Get your free UI components with just few click
      </h1>
      <div>
        <NavLink
          to={"https://github.com/duchaidev"}
          target="_blank"
          className="text-sm font-medium text-white px-6 py-2 rounded-md bg-[#1e293b]"
        >
          View on Github
        </NavLink>
      </div>
    </section>
  );
};

export default Banner;
