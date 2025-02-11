import { FaArrowLeft } from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";

function ActiveSearchBar() {
  return (
    <div className="w-full h-auto mt-1 rounded-[5px] p-6 bg-[#EDF2F6]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[14px] text-[#494953]">آخرین جست‌وجوهای شما</h1>
        <div className="flex flex-wrap gap-3">
          {["طراحی لوگو", "پرامپت‌نویسی"].map((item, index) => (
            <button
              key={index}
              className="w-[45%] sm:w-[30%] md:w-[165px] h-[30px] rounded-[5px] bg-white flex items-center justify-between px-2"
            >
              <VscChromeClose className="w-[16px] h-[16px] text-[#FF5656]" />
              {item}
              <FaArrowLeft className="w-[16px] h-[16px] text-[#615EFC]" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <h1 className="text-[14px] text-[#494953]">جست‌وجوهای پرطرفدار</h1>
        <div className="flex flex-wrap gap-3">
          {["مدیریت محصول", "مدیریت مالی", "پرامپت‌نویسی"].map(
            (item, index) => (
              <button
                key={index}
                className="w-[45%] sm:w-[30%] md:w-[155px] h-[30px] rounded-[5px] bg-white flex items-center justify-between px-2"
              >
                {item}
                <FaArrowLeft className="w-[16px] h-[16px] text-[#615EFC]" />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveSearchBar;
