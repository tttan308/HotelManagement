import ServiceItem from "../components/ServiceItem";

const Service = () => {
  return (
    <div className="mx-auto max-w-[1000px] font-semibold my-10 ">
      <p className="text-main text-center text-2xl">Đặt dịch vụ</p>
      <p className="text-main text-xl mt-8">Danh sách dịch vụ</p>
      <div className="bg-[#f6f6f6] rounded-xl mt-4 px-4 py-6">
        {[1, 2, 3].map((item, index) => {
          if (index < [1, 2, 3].length - 1)
            return (
              <>
                <ServiceItem />
                <hr className="my-6 border-[#cccccc]" />
              </>
            );
          else return <ServiceItem />;
        })}
      </div>

      <div className="flex flex-col items-end mt-8">
        <p className="flex text-main text-2xl">
          Tổng tiền:&nbsp;<span className="font-bold"> 80.000 đ</span>
        </p>
        <button className="bg-main text-white mt-8 text-xl  font-semibold py-3 px-5 rounded-md">
          Đặt ngay nào!
        </button>
      </div>
    </div>
  );
};

export default Service;
