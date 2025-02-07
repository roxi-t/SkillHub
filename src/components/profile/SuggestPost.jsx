import { CiClock2 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

function SuggestPost() {
  return (
    <div className="bg-[#EDF2F6] flex flex-col gap-2 p-1 w-[245px] h-[97px] rounded-[10px]">
      <div className="flex gap-3 items-center">
        <div className="w-[60px] h-[60px] bg-[#6A7EFC] rounded-[5px]"></div>
        <p className="text-[14px] text-[#494953] font-yekan ">
          مهارت‌هایی که در 2025 به آنها نیاز پیدا خواهید کرد!
        </p>
      </div>
      <div className="flex justify-start gap-12 items-center mx-1">
        <div className="flex items-center gap-1">
          <FaRegUser className="text-[#494953] w-[10px] h-[10px]" />
          <span className="font-yekan text-[11px] font-extralight text-[#494953] ">
            علی جانشاهی
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CiClock2 className="text-[#494953] w-[10px] h-[10px]" />
          <span className="font-yekan text-[11px] font-extralight text-[#494953] ">
            6 دقیقه
          </span>
        </div>
      </div>
    </div>
  );
}

export default SuggestPost;
