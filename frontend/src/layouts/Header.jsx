import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="h-[80px] bg-main flex justify-between items-center px-8">
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
      <div className="flex gap-4">
        <button className="bg-white text-main  font-semibold py-3 px-5 rounded-md">
          Đăng nhập
        </button>
        <button className="border-2 text-white  font-semibold py-3 px-6 rounded-md">
          Đăng ký
        </button>
        <button className="bg-[#d9d9d9] rounded-full font-semibold w-12 h-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />
        </button>
        {/* {openProfile ? (
          <button
            onClick={() => setOpenProfile(false)}
            className="rounded-full bg-[#d9d9d9] font-semibold w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        ) : (
          <button
            onClick={() => setOpenProfile(true)}
            className="rounded-full bg-[#d9d9d9] font-semibold w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
        )} */}
      </div>
      {/* {openProfile && (
        <div className="shadow-outer absolute right-8 top-20 bg-white rounded-lg z-10 px-4 pt-2 font-semibold">
          <div className="flex shadow-outer p-2 items-center gap-2 rounded-3xl">
            <div className="rounded-full bg-[#d9d9d9] font-semibold w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size="md" />
            </div>
            <p className="text-lg mr-2">Mai Văn Minh</p>
          </div>
          <hr className="mt-3 border-[#CCCCCC]" />
          <div className="flex flex-col text-lg mt-2 gap-4 mb-4 px-4">
            <Link>Phòng đã đặt</Link>
            <Link to="/profile" onClick={() => setOpenProfile(false)}>
              Quản lý tài khoản
            </Link>
            <Link to="/service" onClick={() => setOpenProfile(false)}>
              Dịch vụ phòng
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
};


export default Header;

