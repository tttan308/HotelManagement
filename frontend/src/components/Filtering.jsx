import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import InputFiltering from "./InputFiltering";

const Filtering = (props) => {
  const options = props.options;
  const title = props.title;
  const [select, setSelect] = useState(false);

  function handleClick() {
    setSelect(!select);
  }


  return (
    <div className="inline-block hover:cursor-pointer relative">
      <button
        onClick={handleClick}
        className="px-2 py-1 rounded-2xl border-[1px] border-[#1AACAC]"
      >
        {title}
        <FaCaretDown className="inline ml-1" />
      </button>
      <div
        className={
          !select
            ? "hidden"
            : "w-[700px] h-[110px] absolute top-full shadow-lg shadow-slate-600/50 mt-4 rounded-md"
        }
      >
        <div className=" w-full gap-x-3 gap-y-2 h-3/5 bg-slate-100">
          {options.map((option, index) => {
            return (
              <InputFiltering option={option} key={index} />
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center gap-x-8 h-2/5">
          <button className="border-[1px] rounded-md border-[#1AACAC] p-1 font-semibold" onClick={handleClick}>Bỏ chọn</button>
          <button className="border-[1px] rounded-md bg-[#1AACAC] p-1 text-white font-semibold">Xem kết quả</button>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
