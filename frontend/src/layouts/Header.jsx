import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[100px] bg-main flex justify-between items-center px-8">
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
      </div>
    </div>
  );
};

export default Header;