import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import useUserFromParams from "hooks/useUserFromParams";

function SwapCard({ skill, opponentName, opponentPic, opponentSkill }) {
  const { profile } = useUserFromParams();
  return (
    <div className="flex items-center sm:flex-row flex-col">
      <div className="flex w-[290px] h-[50px] bg-[#EDF2F6] rounded-[5px]">
        <div className="flex items-center gap-4 mx-4">
          <img
            src={profile}
            alt="profile"
            className="w-[35px] h-[35px] object-cover rounded-full"
          />
          <p className="font-yekan text-[16px] text-[#494953] font-semibold">
            {skill}
          </p>
        </div>
      </div>
      <div className="flex-col sm:flex hidden">
        <FaArrowLeft className="text-[#615EFC]" />
        <FaArrowRight className="text-[#615EFC]" />
      </div>
      <div className="flex sm:hidden">
        <FaArrowUp className="text-[#615EFC]" />
        <FaArrowDown className="text-[#615EFC]" />
      </div>
      <div className="flex items-center w-[290px] h-[50px] bg-[#EDF2F6] rounded-[5px]">
        <div className="flex items-center gap-2 mx-4">
          <img
            src={opponentPic}
            alt="profile"
            className="w-[35px] h-[35px] object-cover rounded-full"
          />
          <p className="font-yekan text-[16px] text-[#494953] font-semibold">
            {opponentSkill}
          </p>
          <span className="font-yekan">|</span>
          <p className="font-yekan font-extralight text-[#494953] ">
            {opponentName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SwapCard;
