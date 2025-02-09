import { CiHeart } from "react-icons/ci";
import SkillCard from "../cards/SkillCard";

function FavouriteSection() {
  return (
    <div>
      <div className="flex items-center gap-1">
        <CiHeart className="w-[20px] h-[20px]" />
        <h1 className="text-[18px] font-yekan font-medium text-[#494953] ">
          متمایل به یادگیری
        </h1>
      </div>
      <div className="gap-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <div className="bg-[#EDF2F6] p-4 flex flex-col items-center text-center w-[283px] h-[152px] rounded-[10px] mx-auto">
          <h1 className="font-yekan font-semibold  text-[#494953] text-[17px]">
            مهارت دیگری برای علی جانشاهی پیشنهاد دارید؟
          </h1>
          <p className="font-yekan text-[#9795B5] text-[14px] mt-1 mb-4">
            درخواست خود را برای علی جانشاهی بفرستید!
          </p>
          <button className="text-white font-semibold w-[259px] min-h-[32px] font-yekan bg-[#615EFC] border rounded-[5px]">
            درخواست تبادل
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavouriteSection;
