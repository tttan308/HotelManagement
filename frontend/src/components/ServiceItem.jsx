import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const ServiceItem = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="">
          <img src="/images/home01.png" alt="" className="w-20 h-16" />
          <div className="flex items-center gap-1 mt-1 justify-center">
            <FontAwesomeIcon icon={faCircleInfo} color="#2E97A7" />
            <p>Chi tiết</p>
          </div>
        </div>
        <div className="text-lg">
          <p>Dịch vụ cung cấp hồ bơi.</p>
          <p>Thời gian: 05:00 - 21:00</p>
          <p>Địa điểm: Sảnh sau khách sạn</p>
        </div>
      </div>
      <div className=" text-lg">
        <p className="text-main text-end mr-2">50.000 đ</p>
        <div className="flex border items-center bg-white rounded-2xl mt-4">
          <button
            className={
              count === 0
                ? "text-[#cccccc] py-2 px-5 text-xl"
                : "py-2 px-5 text-xl"
            }
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <p className="border-x px-6 py-2 text-xl">{count}</p>
          <button
            className="py-2 px-4 text-xl"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
