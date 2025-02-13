import { LuRefreshCw } from "react-icons/lu";
import SwapCard from "../cards/SwapCard";
import amirali from "assets/images/amirali.jpg";
import naser from "assets/images/naser.jpg";
import mohammad from "assets/images/mohammad.jpg";

function SwapSection() {
  
  return (
    <div>
      <div className="flex items-center gap-1 mt-5">
        <LuRefreshCw className="w-[20px] h-[20px]" />
        <h1 className="text-[18px] font-yekan font-medium text-[#494953] ">
          مبادله‌شده با دیگران
        </h1>
      </div>
      <div className="flex flex-col w-full sm:gap-4 gap-8 mt-8">
        <SwapCard
          opponentName="ناصر محمودی"
          skill="دیجیتال مارکتینگ"
          opponentSkill="پرامپت‌نویسی"
          opponentPic={naser}
        />
        <SwapCard
          opponentName="محمد کریمی"
          skill="مقاله‌نویسی"
          opponentSkill="طراحی لوگو"
          opponentPic={mohammad}
        />
        <SwapCard
          opponentName="امیرعلی نیازی"
          skill="تولید محتوا"
          opponentSkill="طراحی محصول"
          opponentPic={amirali}
        />
        <SwapCard
          opponentName="امیرعلی نیازی"
          skill="سئو"
          opponentSkill="مدیریت پروژه"
          opponentPic={amirali}
        />
      </div>
    </div>
  );
}

export default SwapSection;
