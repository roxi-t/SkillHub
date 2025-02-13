import { FaPlus } from "react-icons/fa";

function AddSkillCard({ setIsAddOpen, setIsNormalSkill, isNormal }) {
  const clickHandler = () => {
    setIsNormalSkill(isNormal);
    setIsAddOpen(true);
  };

  return (
    <div className="bg-[#EDF2F6] p-2 w-[283px] h-[152px] rounded-[10px] mx-auto flex justify-center items-center">
      <button
        className="w-[78px] h-[78px] rounded-full cursor-pointer bg-white flex justify-center items-center"
        onClick={clickHandler}
      >
        <FaPlus className="w-[38px] h-[38px] text-[#6A7EFC]" />
      </button>
    </div>
  );
}

export default AddSkillCard;
