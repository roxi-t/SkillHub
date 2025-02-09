import { VscTerminalCmd } from "react-icons/vsc";

function SkillCard() {
  return (
    <div className="bg-[#EDF2F6] p-2 w-[283px] h-[152px] rounded-[10px]">
      <div className="flex gap-6 items-center mb-6">
        <div className="flex items-center w-[75px] h-[75px] bg-[#6A7EFC] rounded-md">
          <VscTerminalCmd className="w-[30px] mx-auto h-[30px] text-white" />
        </div>
        <div>
          <h1 className="font-yekan font-semibold text-[#494953] text-[18px] sm:text-[20px]">
            دیجیتال مارکتینگ
          </h1>
          <div className="flex gap-2 mt-2">
            <p className="font-yekan text-[#9795B5] text-[14px] sm:text-[15px]">
              #tag
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <button className="text-[#494953] flex items-center justify-center w-[142px] h-[32px] font-yekan border-[#494953] border rounded-[5px]">
          درباره این مهارت
        </button>
        <button className="bg-[#FF5656] w-[108px] h-[32px] rounded-[5px] font-yekan text-[16px] text-white font-normal">
          تبادل مهارت
        </button>
      </div>
    </div>
  );
}

export default SkillCard;
