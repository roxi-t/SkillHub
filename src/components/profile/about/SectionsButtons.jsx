import AboutSection from "../sections/AboutSection";
import FavouriteSection from "../sections/FavouriteSection";
import PostSection from "../sections/PostSection";
import SwapSection from "../sections/SwapSection";

function SectionsButtons({ setActiveTab, activeTab }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-fit flex items-center flex-wrap border-b-[0.5px] pb-3 border-[#afaec4] mx-auto justify-center gap-6 mt-6">
        {["درباره", "علاقه‌مندی‌ها", "مبادله‌ها", "پست‌ها"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-[137px] h-[32px] flex justify-center items-center rounded-[5px] font-yekan p-1 font-bold transition-all
            ${
              activeTab === tab
                ? "bg-[#615EFC] text-[#EDF2F6]"
                : "bg-[#EDF2F6] text-[#615EFC]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full border-red-400 border">
        {activeTab === "درباره" && <AboutSection />}
        {activeTab === "علاقه‌مندی‌ها" && <FavouriteSection />}
        {activeTab === "مبادله‌ها" && <SwapSection />}
        {activeTab === "پست‌ها" && <PostSection />}
      </div>
    </div>
  );
}

export default SectionsButtons;
