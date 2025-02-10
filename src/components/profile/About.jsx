import { useState } from "react";
import PostSection from "./sections/PostSection";
import SwapSection from "./sections/SwapSection";
import AboutSection from "./sections/AboutSection";
import FavouriteSection from "./sections/FavouriteSection";
import LikeToLearn from "./about/LikeToLearn";
import Posts from "./about/Posts";
import SectionsButtons from "./about/SectionsButtons";
import UserSkills from "./about/UserSkills";

function About({ isMyself, data }) {
  const [activeTab, setActiveTab] = useState("درباره");
  return (
    <div className="flex flex-col items-center xl:w-[60%] gap-3 p-6 my-5 mt-6">
      <UserSkills data={data} isMyself={isMyself} />
      <div className="">
        {!isMyself && (
          <>
            <SectionsButtons
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {isMyself && (
          <>
            <LikeToLearn data={data} />
            <Posts data={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default About;
