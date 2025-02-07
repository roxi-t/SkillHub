import { FiSave } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Card() {
  return (
    <div className="bg-[#EDF2F6] p-5 md:w-[400px] w-full h-auto rounded-[10px]">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center mb-6">
          <div className="flex items-center w-[75px] h-[75px] bg-[#6A7EFC] rounded-md">
            <MdOutlineKeyboardVoice className="w-[30px] mx-auto h-[30px] text-white" />
          </div>
          <div>
            <h1 className="font-yekan font-semibold text-[#494953] text-[18px] sm:text-[20px]">
              دیجیتال مارکتینگ
            </h1>
            <div className="flex gap-2 mt-2">
              <p className="font-yekan text-[#9795B5] text-[14px] sm:text-[15px]">
                #دیجیتال
              </p>
              <p className="font-yekan text-[#9795B5] text-[14px] sm:text-[15px]">
                #محتوا
              </p>
            </div>
          </div>
        </div>
        <div>
          <FiSave className="w-[19px] cursor-pointer h-[23px] text-[#615EFC]" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center gap-3">
          <CgProfile className="w-[27px] h-[27px] text-[#615EFC]" />
          <div className="flex gap-2 font-yekan text-[#9795B5] text-[14px] sm:text-[15px]">
          <span>علی جانشاهی</span>
          <span>|</span>
          <span>دیجیتال مارکتر</span>
        </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-[15px] h-[14px] text-[#615EFC]" />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-end sm:flex-row gap-2">
        <button className="text-[#494953] w-full sm:w-[108px] h-[40px] font-yekan text-[16px] border-[#494953] border rounded-[5px]">
          دیدن پروفایل
        </button>
        <button className="bg-[#FF5656] w-full sm:w-[108px] h-[40px] rounded-[5px] font-yekan text-[16px] text-white font-normal">
          تبادل مهارت
        </button>
      </div>
    </div>
  );
}

export default Card;
