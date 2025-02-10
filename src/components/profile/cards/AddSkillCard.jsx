import { FaPlus } from "react-icons/fa";

function AddSkillCard() {
  return (
    <div className="bg-[#EDF2F6] p-2 w-[283px] h-[152px] rounded-[10px] mx-auto flex justify-center items-center">
      <div className="w-[78px] h-[78px] rounded-full cursor-pointer bg-white flex justify-center items-center">
        <FaPlus className="w-[38px] h-[38px] text-[#6A7EFC]" />
      </div>
    </div>
  );
}

export default AddSkillCard;
