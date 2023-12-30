import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdFlag } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { BsFillTagsFill } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import { IoChatbubbleSharp } from "react-icons/io5";
import { TbArrowBigDownFilled } from "react-icons/tb";

const RoomDetail = (props) => {
  const room = props.room; // Biến lưu thông tin của phòng.
  const featured = room.featured;
  const subFeatured = featured.slice(0, 3);
  const utils = featured.length - subFeatured.length;
  const star = [];
  for (let index = 0; index < room.star; index++) {
    star.push(index);
  }
  const voteAvg = room.vote_average;
  const classify = voteAvg < 8 ? "Khá" : voteAvg < 9 ? "Tốt" : "Thượng hạng";

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const basePriceString = room.basePrice.toLocaleString();
  const salePriceString = room.salePrice.toLocaleString();

  return (
    <div className="w-full h-[300px] shadow-lg shadow-slate-400/100 rounded-2xl hover:cursor-pointer duration-300 flex flex-row">
      <img
        src={room.src}
        className="basis-2/5 h-full object-cover rounded-l-2xl"
      />
      <div className="p-4 basis-2/5 h-ful flex flex-col items-start justify-around">
        <p className="text-[24px]">
          <span className="font-bold text-[#1AACAC]">( </span> 2023
          <span className="font-bold text-[#1AACAC]">) </span> {room.name}
        </p>
        <div className="flex flex-row gap-x-2">
          {star.map((element, index) => {
            return <FaStar size={24} key={index} className="text-[#1AACAC]" />;
          })}
        </div>
        <p>Phòng này cung cấp:</p>
        <div className="flex flex-row w-full">
          <div className="flex flex-row basis-3/4 gap-x-2">
            {/* Danh sách 3 dịch vụ đầu tiên mà phòng cung cấp */}
            {featured.map((element, index) => {
              return (
                <p
                  key={index}
                  className="px-2 py-1 text-sm rounded-xl border-[1px] border-[#1AACAC]"
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
        <div className="text-sm text-[#362FD9] font-bold">
          <MdFlag className="inline mr-2" />
          {room.descriptions[0]}
        </div>
        <div className="text-sm text-[#362FD9] font-bold">
          <FaCreditCard className="inline mr-2" />
          {room.descriptions[1]}
        </div>
        <div className="text-sm text-[#DD2525] font-bold">
          <BsFillTagsFill className="inline mr-2" />
          {room.descriptions[2]}
        </div>
        <Link
          className="text-[#1AACAC] font-semibold text-2xl flex flex-row items-center hover:text-[#2E97A7] duration-300"
          to={`/detail/${room.id}`}
        >
          <TbHandClick className="inline" />
          Xem phòng ngay
        </Link>
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
              {salePriceString} <span className="text-sm">đ</span>
            </div>
          </div>
        ) : (
          <div>{basePriceString}</div>
        )}
        <p className="font-semibold text-[#362FD9]">+ Huỷ miễn phí</p>
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <div className="flex flex-col items-end font-semibold">
            <p>{classify}</p>
            <p>{room.reviewCount} đánh giá</p>
          </div>
          <div className="relative">
            <IoChatbubbleSharp
              size={32}
              className="absolute text-[#362FD9] top-2/4 left-2/4  -translate-y-2/4"
            />
            <p className="absolute text-sm bottom-2/4 left-1 text-white translate-y-2/4">
              {voteAvg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
