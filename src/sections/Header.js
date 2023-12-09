import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="h-[85px] flex items-center justify-between border-b border-[#1e293b]">
      <NavLink to={"/"} className="flex items-center gap-3">
        <div className="w-[40px] h-auto object-cover">
          <img src="/logo.svg" alt="logo" />
        </div>
        <span className="text-base font-bold">DevHub</span>
      </NavLink>
      <div className="flex items-center gap-4">
        <NavLink to={"https://www.linkedin.com/in/duchaidev/"} target="_blank">
          <button className="px-6 py-2 text-sm font-medium text-[#1e293b] rounded-md bg-primary">
            Contact
          </button>
        </NavLink>
        {/* <NavLink
          to={"/login"}
          className="text-sm font-medium text-[#1e293b] px-6 py-2 rounded-md bg-primary bg-[#1e293b]"
        >
          Facebook
        </NavLink> */}
      </div>
    </section>
  );
};

export default Header;
