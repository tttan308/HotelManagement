import {
  faWifi,
  faBuildingCircleCheck,
  faUtensils,
  faWaterLadder,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <img
          src="./images/home01.png"
          alt=""
          className="object-contain w-full"
        />
        <div className="text-white font-semibold flex items-center justify-center flex-col absolute top-0 right-0 bottom-0 left-0 bg-black/[.1]">
          <p>
            HÃY TẬN HƯỞNG KỲ NGHỈ TUYỆT VỜI CỦA BẠN VỚI TRẢI NGHIỆM SANG TRỌNG
            TUYỆT VỜI!
          </p>
          <p className="text-6xl mt-4">NƠI GIÚP BẠN THƯ GIÃN</p>
          <div className="flex gap-16 mt-8">
            <button className="bg-main  font-semibold py-3 px-5 rounded-md">
              ĐẶT PHÒNG{" "}
            </button>
            <button className="border-2 text-white  font-semibold py-3 px-6 rounded-md">
              GIỚI THIỆU{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-16 gap-10 text-main px-16">
        <div className="flex-1 flex gap-6">
          <div className="flex-1">
            <div className="text-center px-6 py-4 shadow-lg">
              <p className="font-semibold text-lg">Cozy Room</p>
              <p className="text-[#616161] mt-3">
                Phòng khách sạn của chúng tôi thiết kế với sự tinh tế, sang
                trọng giúp tạo nên không gian thoải mái và ấm cúng.
              </p>
            </div>
            <img src="./images/home03.png" alt="" className="mt-6" />
          </div>
          <div className="flex-1 relative">
            <img src="./images/home02.png" alt="" />
            <div className="text-center px-6 py-4 shadow-lg mt-6 absolute bottom-0">
              <p className="font-semibold text-lg">Deluxe Room</p>
              <p className="text-[#616161] mt-3 ">
                Với vị trí đắc địa, chúng tôi tự hào về tầm nhìn tuyệt vời từ
                phòng khách sạn mang lại cho các bạn
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-6">
          <p className="font-semibold text-lg">Giới thiệu</p>
          <p className="font-semibold text-4xl mt-2">
            Thư giãn với hệ thống đặt phòng thông minh
          </p>
          <p className="text-[#616161] text-lg bg-[#F5F5F5] py-2 px-4 rounded-2xl mt-6">
            Chúng tôi cam kết mang đến ưu đãi đặc biệt cho những đặt phòng trực
            tuyến, giúp quý khách tiết kiệm chi phí và đồng thời nhận được nhiều
            quyền lợi hấp dẫn.
          </p>
          <button className="bg-main text-white mt-8  font-semibold py-3 px-5 rounded-md">
            Đặt ngay nào!
          </button>
        </div>
      </div>
      <div className="mt-16 text-main px-16 text-center">
        <p className=" font-semibold text-4xl">
          Khám phá các dịch vụ của chúng tôi
        </p>
        <div className="flex gap-8 justify-center mt-8">
          <div className="rounded-full w-36 h-36 shadow-outer flex flex-col items-center justify-center gap-2">
            <div className="flex-1 flex items-end">
              <FontAwesomeIcon icon={faWifi} className="" size="2xl" />
            </div>
            <p className="flex-1 px-2 font-semibold">Free Wifi</p>
          </div>
          <div className="rounded-full w-36 h-36 shadow-outer flex flex-col items-center justify-center gap-2">
            <div className="flex-1 flex items-end">
              <FontAwesomeIcon
                icon={faBuildingCircleCheck}
                className=""
                size="2xl"
              />
            </div>
            <p className="flex-1 px-2 font-semibold">Đặt phòng dễ dàng</p>
          </div>
          <div className="rounded-full w-36 h-36 shadow-outer flex flex-col items-center justify-center gap-2">
            <div className="flex-1 flex items-end">
              <FontAwesomeIcon icon={faUtensils} className="" size="2xl" />
            </div>
            <p className="flex-1 px-2 font-semibold">Nhà hàng</p>
          </div>
          <div className="rounded-full w-36 h-36 shadow-outer flex flex-col items-center justify-center gap-2">
            <div className="flex-1 flex items-end">
              <FontAwesomeIcon icon={faWaterLadder} className="" size="2xl" />
            </div>
            <p className="flex-1 px-2 font-semibold">Bể bơi</p>
          </div>
          <div className="rounded-full w-36 h-36 shadow-outer flex flex-col items-center justify-center gap-2">
            <div className="flex-1 flex items-end">
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                className=""
                size="2xl"
              />
            </div>
            <p className="flex-1 px-2 font-semibold">Làm đẹp và Sức khoẻ</p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-main px-16 text-center mb-16">
        <p className=" font-semibold text-4xl">Phòng cao cấp</p>
        <div className="flex gap-2 bg-red-300 h-10 mt-10"></div>
      </div>
    </div>
  );
}
