import useUserFromParams from "hooks/useUserFromParams";
import AddSkillCard from "../cards/AddSkillCard";
import SkillCard from "../cards/SkillCard";
import { IoColorPaletteSharp, IoHardwareChipSharp } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

function UserSkills({ isMyself, data }) {
  const { job, icon: Icon } = useUserFromParams();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[24px] font-yekan text-[#494953] font-semibold">
          {isMyself ? "مهارت‌ها" : "مهارت‌های برتر"}
        </h1>
        {!isMyself && (
          <p className="text-[#615EFC] cursor-pointer underline text-[18px] font-yekan font-semibold">
            دیدن همه
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 grid-auto-flow-row gap-6 mt-6 w-full">
        {isMyself ? (
          <>
            {data.skills &&
              data.skills
                .slice(0, 3)
                .map((item) => <SkillCard key={item.id} />)}
            <AddSkillCard />
          </>
        ) : (
          <>
            {/* {data.skills &&
                data.skills
                  .slice(0, 4)
                  .map((item) => <SkillCard key={item.id} />)} */}
            <SkillCard
              skill={job}
              tags={["2025", "مهارت"]}
              icon={<Icon className="w-[30px] mx-auto h-[30px] text-white" />}
            />
            <SkillCard
              skill="مهندس سخت افزار"
              tags={["2025", "مهارت"]}
              icon={
                <IoHardwareChipSharp className="w-[30px] mx-auto h-[30px] text-white" />
              }
            />
            <SkillCard
              skill="وبلاگ نویسی"
              tags={["2025", "مهارت"]}
              icon={
                <MdOutlineWeb className="w-[30px] mx-auto h-[30px] text-white" />
              }
            />
            <SkillCard
              skill="گرافیک"
              tags={["2025", "مهارت"]}
              icon={
                <IoColorPaletteSharp className="w-[30px] mx-auto h-[30px] text-white" />
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

export default UserSkills;
