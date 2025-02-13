import { FaRegHeart } from "react-icons/fa6";
import AddSkillCard from "../cards/AddSkillCard";
import SkillCard from "../cards/SkillCard";

function LikeToLearn({ data, setIsAddOpen, setIsNormalSkill }) {
  return (
    <div>
      <div className="bg-[#9795B5] w-full border mb-6 mt-6"></div>
      <div className="flex items-center gap-2">
        <FaRegHeart className="w-[20px] h-[20px]" />
        <h1 className="text-[18px] font-yekan text-[#494953] font-semibold">
          متمایل به یادگیری
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 grid-auto-flow-row gap-6 mt-6 w-full">
        {data.favorite_skills &&
          data.favorite_skills
            .slice(0, 3)
            .map((item) => (
              <SkillCard
                key={item.id}
                skill={item.title}
                icon={<img src={item.logo} className="" />}
                description={item.description}
              />
            ))}
        <AddSkillCard
          setIsAddOpen={setIsAddOpen}
          isNormal={false}
          setIsNormalSkill={setIsNormalSkill}
        />
      </div>
    </div>
  );
}

export default LikeToLearn;
