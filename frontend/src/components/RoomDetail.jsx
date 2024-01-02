import React from "react";
import { Link } from "react-router-dom";
import { MdFlag } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { BsFillTagsFill } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import { TbArrowBigDownFilled } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineFreeCancellation } from "react-icons/md";

const RoomDetail = (props) => {
  const room = props.room; // Biến lưu thông tin của phòng.
  const features = room.features;
  const subFeatured = features.slice(0, 3);
  const utils = features.length - subFeatured.length;
  const booked = room.status.toLowerCase() === "đã được đặt";
  if (room.salePrice < room.basePrice) {
    room.saving = true;
    room.discount = ((room.basePrice - room.salePrice) / room.basePrice) * 100;
  } else room.saving = false;

  const basePriceString = room.basePrice.toLocaleString();
  const salePriceString = room.salePrice.toLocaleString();

  const exist = [];
  function randomEmoji() {
    let index = -1;
    index = Math.ceil(Math.random() * 3);
    while (exist.includes(index)) index = Math.ceil(Math.random() * 3);
    exist.push(index);
    if (index == 1) return <MdFlag className="inline mr-2" />;
    else if (index == 2) return <FaCreditCard className="inline mr-2" />;
    else return <BsFillTagsFill className="inline mr-2" />;
  }

  return (
    <div className="w-full lg:h-[300px] shadow-lg shadow-slate-400/100 rounded-2xl flex flex-row">
      <img
        src={room.roomImage == null ? "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb21zfGVufDB8fDB8fHww": null}
        className="basis-2/5 h-full object-cover rounded-l-2xl"
      />
      <div className="px-2 py-1 basis-2/5 h-ful flex flex-col items-start justify-around">
        <p className="text-[28px] font-bold text-center w-full text-[#2E97A7]">
          {room.roomName}
        </p>
        <div className="flex flex-row w-full">
          <div className="flex flex-row basis-3/4 gap-x-2">
            {/* Danh sách 3 dịch vụ đầu tiên mà phòng cung cấp */}
            {subFeatured.map((element, index) => {
              return (
                <p
                  key={index}
                  className="px-2 py-1 text-sm rounded-md border-[1px] border-[#1AACAC]"
                >
                  {element}
                </p>
              );
            })}
          </div>
          <div className="flex flex-row justify-start items-center basis-1/4">
            <p className="px-2 py-1 text-sm rounded-xl border-[1px] border-[#1AACAC]">
              + {utils}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around lg:h-2/4 overflow-x-hidden scroll-smooth scrollbar-hide">
          {room.descriptions[0] && (
            <div className="text-sm text-[#362FD9] font-bold">
              {randomEmoji()}
              {room.descriptions[0]}
            </div>
          )}
          {room.descriptions[1] && (
            <div className="text-sm text-[#362FD9] font-bold">
              {randomEmoji()}
              {room.descriptions[1]}
            </div>
          )}
          {room.descriptions[2] && (
            <div className="text-sm text-[#DD2525] font-bold">
              {randomEmoji()}
              {room.descriptions[2]}
            </div>
          )}
        </div>
        {!booked ? (
          <div className="w-full flex flex-row justify-around pt-1 border-t-[1px] ">
            <div className="text-2xl font-semibold text-[#362FD9] flex flex-row items-center justify-center gap-x-1">
              <MdEventAvailable />
              <p>{room.status}</p>
            </div>
            <Link
              className="relative text-[#1AACAC] font-semibold text-2xl flex flex-row items-center hover:text duration-300 room-detail px-2 py-1"
              to={`/detail/${room.id}`}
            >
              <TbHandClick className="inline" />
              Xem phòng ngay
            </Link>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-around pt-1 border-t-[1px]">
            <div className="text-2xl font-semibold text-[#DD2525] flex flex-row items-center justify-center gap-x-1">
              <MdOutlineFreeCancellation />
              <p>{room.status}</p>
            </div>
            <Link
              className="relative text-[#1AACAC] font-semibold text-2xl flex flex-row items-center hover:text-[#F6F6F6] duration-300 room-detail px-2 py-1"
              to={`/detail/${room.roomId}`}
            >
              <TbHandClick className="inline" />
              Xem phòng ngay
            </Link>
          </div>
        )}
      </div>
      <div className="w-[1px] h-[90%] bg-[#CCC] mt-[1.25%] "></div>
      <div className="basis-1/5 h-full rounded-r-2xl p-4 flex flex-col justify-center gap-y-4">
        {room.saving ? (
          <p className="w-full bg-red-600 py-1 text-white font-bold text-center">
            GIẢM {room.discount}% HÔM NAY
          </p>
        ) : null}
        {room.saving ? (
          <p className="bg-red-500 bg-opacity-60 text-white text-center font-bold">
            <span>
              <TbArrowBigDownFilled className="inline text-red-600 mr-2" />
            </span>
            SIÊU TIẾT KIỆM
          </p>
        ) : null}
        <p className="text-[#1AACAC]">Giá rẻ nhất mỗi đêm chỉ từ</p>
        {room.saving ? (
          <div>
            <p className="line-through">{basePriceString} đ</p>
            <div className="text-red-600 text-[24px] font-semibold">
              {salePriceString} <span className="text-[24px]">đ</span>
            </div>
          </div>
        ) : (
          <div>{basePriceString}</div>
        )}
        <p className="font-semibold text-[#362FD9]">+ Huỷ miễn phí</p>
      </div>
    </div>
  );
};

export default RoomDetail;
