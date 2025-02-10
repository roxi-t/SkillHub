import AddSkillCard from "../cards/AddSkillCard";
import SkillCard from "../cards/SkillCard";

function UserSkills({ isMyself, data }) {
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
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </>
        )}
      </div>
    </div>
  );
}

export default UserSkills;
