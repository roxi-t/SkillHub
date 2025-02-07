import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function GuideCard({ name, skill, image, user }) {
  return (
    <div className="bg-[#EDF2F6] p-5 md:w-[400px] w-full h-auto rounded-[10px]">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center mb-6">
          <img
            src={image}
            alt="profile picture"
            className="w-[75px] h-[75px] rounded-full object-cover"
          />
          <div>
            <h1 className="font-yekan font-semibold text-[#494953] text-[18px] sm:text-[20px]">
              {name}
            </h1>
            <div className="flex gap-2 mt-2">
              <p className="font-yekan text-[#9795B5] text-[14px] sm:text-[15px]">
                {skill}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-[15px] h-[14px] text-[#615EFC]" />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-end sm:flex-row gap-2">
        <Link
          to={`/profile/${user}`}
          className="text-[#494953] w-full flex justify-center items-center sm:w-[108px] h-[40px] font-yekan text-[16px] border-[#494953] border rounded-[5px]"
        >
          دیدن پروفایل
        </Link>
        <button className="bg-[#FF5656] w-full sm:w-[108px] h-[40px] rounded-[5px] font-yekan text-[16px] text-white font-normal">
          تبادل مهارت
        </button>
      </div>
    </div>
  );
}

export default GuideCard;
