import { Link, NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <div className="h-[100px] bg-main flex justify-between items-center px-8 border-black bg-[#1AACAC] w-full">
      <Link
        to="/"
        className="flex items-center gap-2 text-white font-semibold text-3xl"
      >
        <span>BORN</span>
        <div className="rounded-full bg-white h-3 w-3"></div>
        <span>PINK</span>
      </Link>
      <div className="flex items-center text-white font-semibold text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Tìm phòng
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Về chúng tôi
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Liên hệ
        </NavLink>
      </div>
      {authenticated ? (
        <div className="flex flex-row gap-x-4">
          <button className="p-3 rounded-full bg-[#D9D9D9] hover:bg-[#F6F6F6]">
            <FaFacebookMessenger size={20} />
          </button>
          <button className="p-3 rounded-full bg-[#D9D9D9] hover:bg-[#F6F6F6]">
            <IoPerson size={20} />
          </button>
        </div>
      ) : (
        <div className="">
          <button className="bg-white text-main  font-semibold py-3 px-5 rounded-md">
            Đăng nhập
          </button>
          <button className="border-2 text-white  font-semibold py-3 px-6 rounded-md">
            Đăng ký
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
