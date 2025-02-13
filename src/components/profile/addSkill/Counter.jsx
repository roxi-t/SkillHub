import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div className="mt-6 flex flex-col gap-2">
      <p className="font-yekan text-[14px] font-light text-[#494953] ">
        سقف افراد
      </p>
      <div className="flex items-center gap-6 mb-3">
        <div className="w-[158px] h-[35px] select-none px-2 bg-white rounded-[5px] flex items-center justify-between">
          <button
            className="w-[18px] h-[18px] text-[#615EFC]"
            onClick={() =>
              setNumber((number) => (number !== 0 ? number - 1 : number))
            }
          >
            <FaMinus />
          </button>
          <p className="font-yekan text-[14px] font-light text-[#494953]">
            {number} نفر
          </p>
          <button
            className="w-[18px] h-[18px] text-[#615EFC]"
            onClick={() => setNumber((number) => number + 1)}
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex gap-">
          <IoMdInformationCircleOutline className="w-[12px] h-[12px] text-[#615EFC]" />
          <p className="font-yekan font-light text-[11px] text-[#615EFC]">
            بعداً می‌توانید با مراجعه به قسمت «ویرایش مهارت» این سقف را تغییر
            دهید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
