import React, { useState } from "react";

const InputFiltering = (props) => {
  const option = props.option;
  const [checked, setChecked] = useState(false);

  const style="p-1 rounded-md mx-2 bg-[#1AACAC] border-[1px] text-white hover:cursor-pointer"
  function handleClick(event) {
    if(event.target.checked)  
      setChecked(true);
    else  setChecked(false);
  }
  
  return (
    <div className="inline-block mt-[1%] group">
      <label
        className={checked? style: "p-1 border-[1px] border-[#1AACAC] rounded-md mx-2 hover:cursor-pointer"}
        for={option}
      >
        {option}
      </label>
      <input onClick={handleClick} className="w-0" id={option} type="checkbox" value={option} />
    </div>
  );
};

export default InputFiltering;
