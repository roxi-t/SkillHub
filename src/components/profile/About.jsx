import { useState } from "react";
import LikeToLearn from "./about/LikeToLearn";
import Posts from "./about/Posts";
import SectionsButtons from "./about/SectionsButtons";
import UserSkills from "./about/UserSkills";
import EditAbout from "./edit/EditAbout";
import AddSkillForm from "./about/AddSkillForm";

function About({ isMyself, data, isEditAbout, setIsEditAbout }) {
  const [activeTab, setActiveTab] = useState("درباره");
  const [isNormalSkill, setIsNormalSkill] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <div className="flex flex-col items-center xl:w-[60%] gap-3 p-6 my-5 mt-6">
      {isEditAbout && isMyself ? (
        <EditAbout setIsEditAbout={setIsEditAbout} about={data.bio} />
      ) : (
        <>
          {isAddOpen ? (
            <AddSkillForm isNormalSkill={isNormalSkill} />
          ) : (
            <>
              <UserSkills
                data={data}
                isMyself={isMyself}
                setIsNormalSkill={setIsNormalSkill}
                setIsAddOpen={setIsAddOpen}
              />
              <div>
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
                    <LikeToLearn
                      data={data}
                      setIsNormalSkill={setIsNormalSkill}
                      setIsAddOpen={setIsAddOpen}
                    />
                    <Posts data={data} />
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default About;
