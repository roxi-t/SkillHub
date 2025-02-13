import Select from "react-select";

function Options({
  allSkills,
  allAreas,
  setSelectedAreas,
  selectedAreas,
  selectedSkill,
  setSelectedSkill,
}) {
  const allSkillsOptions = allSkills.map((item) => ({
    value: item.id,
    label: (
      <div className="items-center flex cursor-pointer">
        <img
          src={item.logo}
          alt="icon"
          className="w-[21px] h-[21px] mr-[10px] object-cover"
        />
        <span className="mr-1">{item.title}</span>
      </div>
    ),
  }));

  const allAreasOption = allAreas.map((item) => ({
    value: item.id,
    label: (
      <div className="items-center flex cursor-pointer">
        <span className="mr-1">{item.title}</span>
      </div>
    ),
  }));

  return (
    <>
      <div className="mb-3 flex flex-col gap-1">
        <label className="text-[#494953] text-right text-[14px] font-yekan">
          عنوان مهارت*
        </label>
        <Select
          options={allSkillsOptions}
          value={selectedSkill}
          onChange={(selectedOption) => setSelectedSkill(selectedOption)}
          formatOptionLabel={(option) => option.label}
          className="w-full cursor-pointer font-yekan"
          placeholder="مثال: طراحی گرافیک"
        />
      </div>
      <div className="mb-3 flex flex-col gap-1">
        <label className="text-[#494953] text-right text-[14px] font-yekan">
          حیطه مهارت*
        </label>
        <Select
          options={allAreasOption}
          value={selectedAreas}
          onChange={(selectedOption) => setSelectedAreas(selectedOption)}
          formatOptionLabel={(option) => option.label}
          className="w-full cursor-pointer font-yekan"
          placeholder="مثال: کسب و کار"
        />
      </div>
    </>
  );
}

export default Options;
