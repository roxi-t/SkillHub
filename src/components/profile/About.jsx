import { useState } from "react";
import SkillCard from "./cards/SkillCard";
import AboutSection from "./sections/AboutSection";
import FavouriteSection from "./sections/FavouriteSection";
import SwapSection from "./sections/SwapSection";
import PostSection from "./sections/PostSection";

function About() {
  const [activeTab, setActiveTab] = useState("درباره");

  return (
    <div className="flex flex-col items-center w-full gap-12 p-6 my-5 mt-6">
      <div>
        <div className="flex justify-between">
          <h1 className="text-[24px] font-yekan text-[#494953] font-semibold">
            مهارت‌های برتر
          </h1>
          <p className="text-[#615EFC] cursor-pointer underline text-[18px] font-yekan font-semibold">
            دیدن همه
          </p>
        </div>
        <div className="grid-cols-2 grid gap-12 mt-8">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
      <div>
        <div className="flex gap-6">
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
        <div className="bg-[#9795B5] w-full border mt-3"></div>
        <div className="mt-6">
          {activeTab === "درباره" && <AboutSection />}
          {activeTab === "علاقه‌مندی‌ها" && <FavouriteSection />}
          {activeTab === "مبادله‌ها" && <SwapSection />}
          {activeTab === "پست‌ها" && <PostSection />}
        </div>
      </div>
    </div>
  );
}

export default About;
