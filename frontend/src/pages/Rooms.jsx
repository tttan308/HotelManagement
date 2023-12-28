import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { RxDropdownMenu } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import RoomCard from "../components/RoomCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import Filtering from "../components/Filtering";

const Rooms = () => {
  const [page, setPage] = useState(1);
  const rooms = [
    {
      id: 1,
      year: 2023,
      name: "Premium King Room",
      src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
      star: 3,
      saving: true,
      priceString: "2.000.000",
      price: "1.740.000",
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      reviewCount: 102,
      vote_average: 8.2,
    },
    {
      id: 2,
      year: 2023,
      saving: true,
      priceString: "1.399.000",
      price: "1.119.200",
      name: "Deluxe Room",
      src: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb21zfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 2,
      descriptions: [
        "Cung cấp không gian phòng hiện đại, đầy đủ tiện nghi.!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 120,
      discount: 13,
      vote_average: 7.9,
    },
    {
      id: 3,
      year: 2023,
      saving: true,
      name: "Room With View",
      src: "https://images.unsplash.com/photo-1559414059-34fe0a59e57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
      star: 4,
      priceString: "2.000.000",
      discount: 13,
      price: "1.740.000",
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 2,
      descriptions: [
        "Tầm nhìn tuyệt vời từ căn phòng của quý khách, mang đến cho quý khách không gian thoải mái để tận hưởng cuộc sống!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 209,
      vote_average: 8.7,
    },
    {
      id: 4,
      year: 2023,
      saving: true,
      name: "Double Room",
      src: "https://images.unsplash.com/photo-1560185893-d9680d601385?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG91YmxlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      star: 3,
      priceString: "2.000.000",
      price: "1.740.000",
      featured: ["2 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 4,
      descriptions: [
        "Đang  thu hút nhiều lượt đặt, lần đặt gần nhất 1 giờ trước!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      discount: 13,
      reviewCount: 310,
      vote_average: 8.5,
    },
    {
      id: 5,
      year: 2023,
      saving: true,
      discount: 13,
      name: "Standard Room",
      src: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D",
      priceString: "2.000.000",
      price: "1.740.000",
      star: 3,
      featured: ["1 phòng ngủ", "1 phòng tắm"],
      utils: 2,
      save: true,
      descriptions: [
        "Phòng tiêu chuẩn với các tiện nghi cơ bản, thích hợp cho những người muốn trải nghiệm thoải mái và tiện ích đơn giản!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 155,
      vote_average: 7.6,
    },
    {
      id: 6,
      year: 2023,
      saving: true,
      name: "Queen Room",
      priceString: "2.000.000",
      price: "1.740.000",
      src: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 view biển"],
      utils: 4,
      discount: 13,
      descriptions: [
        "Phòng với giường lớn hơn so với giường đôi thông thường, tạo ra không gian thoải mái và sang trọng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 254,
      vote_average: 8.8,
    },
    {
      id: 7,
      year: 2023,
      saving: true,
      priceString: "2.000.000",
      price: "1.740.000",
      name: "Family Suite",
      src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww",
      star: 3,
      featured: ["2 phòng ngủ", "2 phòng tắm", "1 ban công"],
      utils: 3,
      discount: 13,
      descriptions: [
        "Phòng phù hợp cho gia đình, có thể bao gồm nhiều phòng ngủ và không gian chung, tạo điều kiện thuận lợi cho việc du lịch gia đình!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 189,
      vote_average: 8.3,
    },
    {
      id: 8,
      year: 2023,
      priceString: "2.000.000",
      price: "1.740.000",
      saving: true,
      name: "Presidential Suite",
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      star: 4,
      featured: ["1 phòng ngủ", "1 phòng tắm", "1 ban công"],
      utils: 5,
      discount: 20,
      descriptions: [
        "Phòng cao cấp nhất trong khách sạn, thường có diện tích rộng lớn, cảnh đẹp ngoại ô, và nhiều tiện ích sang trọng như phòng tập gym và bếp riêng!",
        "Không cần thẻ tín dụng",
        "Giảm giá 10% cho lần đặt phòng đầu tiên",
      ],
      reviewCount: 298,
      vote_average: 8.2,
    },
  ];
  const [filtering, setFiltering] = useState(false);

  function handlePagination(event) {
    const value = Number.parseInt(event.target.value);
    if (value === 1 || value === 2) {
      alert(value);
      setPage(value);
    } else if (event.target.value == "next") {
      alert(page + 1);
      setPage(page + 1);
    } else {
      alert(page - 1);
      setPage(page - 1);
    }
  }

  function handleClick(event) {
    setFiltering(!filtering);
  }

  function closeFiltering(event) {
    setFiltering(!filtering);
  }

  function escFunction(event) {
    if (event.key === "Escape") {
      setFiltering(!filtering);
    }
  }

  const roomType = [
    "Standard",
    "Family",
    "Deluxe",
    "Queen",
    "Presidential",
    "Double Room",
    "Room View",
  ];
  const capacity = [1, 2, 3, 4, 5];

  return (
    <div
      onKeyDown={escFunction}
      className="w-4/5 max-w-screen-xl mx-auto relative"
    >
      {filtering ? (
        <div className="fixed w-4/5 h-[500px] rounded-2xl bg-[#F5F5F5] bg-opacity-90 hover:shadow-lg hover:shadow-cyan-500/100 -translate-x-2/4 left-2/4">
          <button
            onClick={closeFiltering}
            className="p-2 bg-[#2E97A7] absolute -right-8 -top-8 rounded-full hover:bg-[#1AACAC]"
          >
            <FaXbox size={20} className="text-white" />
          </button>
        </div>
      ) : null}
      <h1 className="my-[20px] text-[40px] text-[#2E97A7] w-full text-center">
        Danh sách phòng
      </h1>
      <div className="filter w-full mb-[80px]">
        <div className="flex flex-row gap-x-16 justify-start items-center mb-4">
          <button
            onClick={handleClick}
            className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC] flex flex-row items-center"
          >
            <FiFilter className="inline mr-1" />
            Bộ lọc
          </button>
          <div className="flex flex-row gap-x-4">
            <Filtering options={roomType} title="Loại phòng" />
            <Filtering options={capacity} title="Số lượng người" />
            <div className="">
              <button className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC]">
                Giá phòng
                <FaCaretDown className="inline ml-1" />
              </button>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <button className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC] flex flex-row items-center">
            <RxDropdownMenu className="inline mr-1" />
            Xếp theo
          </button>
        </div>
      </div>
      <div className="list-rooms w-full flex flex-col gap-y-10">
        {rooms.map((room, index) => {
          return <RoomCard key={index} room={room} />;
        })}
      </div>
      <div className="pagination w-full flex flex-row justify-center items-center gap-x-4 my-[50px]">
        <button
          onClick={handlePagination}
          value={"prev"}
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] flex flex-row justify-center items-center hover:bg-[#2E97A7] hover:text-white duration-300"
        >
          <FaLongArrowAltLeft className="inline mr-2" />
          Back
        </button>
        <button
          value={1}
          onClick={handlePagination}
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] hover:bg-[#2E97A7] hover:text-white duration-300"
        >
          1
        </button>
        <button
          value={2}
          onClick={handlePagination}
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] hover:bg-[#2E97A7] hover:text-white duration-300"
        >
          2
        </button>
        <button
          onClick={handlePagination}
          value={"next"}
          className="py-1 px-3 border-[1px] rounded-md border-[#2E97A7] flex flex-row justify-center items-center hover:bg-[#2E97A7] hover:text-white duration-300"
        >
          Next
          <FaLongArrowAltRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Rooms;
