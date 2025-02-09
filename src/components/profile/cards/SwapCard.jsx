import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ali from "assets/images/ali.jpg";

function SwapCard({ skill, opponentName, opponentPic, opponentSkill }) {
  return (
    <div className="flex items-center">
      <div className="flex w-[290px] h-[50px] bg-[#EDF2F6] rounded-[5px]">
        <div className="flex items-center gap-4 mx-4">
          <img
            src={ali}
            alt="profile"
            className="w-[35px] h-[35px] object-cover rounded-full"
          />
          <p className="font-yekan text-[16px] text-[#494953] font-semibold">
            {skill}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <FaArrowLeft className="text-[#615EFC]" />
        <FaArrowRight className="text-[#615EFC]" />
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
