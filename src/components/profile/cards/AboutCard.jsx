import { IoIosLink } from "react-icons/io";
import { MdVerified } from "react-icons/md";

function AboutCard({ text, icon, isVerified }) {
  return (
    <div className="w-[290px] flex justify-between items-center h-[44px] bg-[#EDF2F6] mt-4 rounded-[5px] p-1">
      <div className="flex items-center gap-2">
        <div className="w-[36px] h-[36px] bg-[#615EFC] rounded-[3px] flex justify-center items-center">
          {icon}
        </div>
        <p className="text-[13px] font-yekan text-[#494953] font-normal">
          {text}
        </p>
      </div>
      <div className="ml-2 flex gap-2">
        {isVerified && (
          <button className="w-[26px] h-[26px] bg-white rounded-full flex justify-center items-center">
            <MdVerified className="w-[14px] h-[14px] text-[#615EFC]" />
          </button>
        )}
        <button className="w-[26px] h-[26px] bg-white rounded-full flex justify-center items-center">
          <IoIosLink className="w-[14px] h-[14px] text-[#615EFC]" />
        </button>
      </div>
    </div>
  );
}

export default AboutCard;
