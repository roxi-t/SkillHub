import amirali from "assets/images/amirali.jpg";
import { FaStar } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { CiShare2 } from "react-icons/ci";
import { TbDeviceAnalytics } from "react-icons/tb";

function User() {
  return (
    <div className="flex my-5 flex-col items-center mt-6">
      <img
        src={amirali}
        alt="profile"
        className="w-[180px] h-[180px] object-cover rounded-full"
      />
      <h1 className="font-yekan text-[25px] font-semibold mt-7 text-[#494953]">
        علی جانشاهی
      </h1>
      <p className="font-yekan text-[22px] mt-4 text-[#494953] font-light">
        دیجیتال مارکتر
      </p>
      <div className="flex mt-7">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-[20px] h-[19px] text-[#615EFC]" />
        ))}
      </div>
      <div className="flex gap-7 mt-12">
        <div className="w-[48px] h-[48px] rounded-full bg-[#EDF2F6] flex justify-center cursor-pointer items-center">
          <TbDeviceAnalytics className="w-[20px] h-[20px] text-[#615EFC]" />
        </div>
        <div className="w-[48px] h-[48px] rounded-full bg-[#EDF2F6] flex justify-center cursor-pointer items-center">
          <CiShare2 className="w-[20px] h-[20px] text-[#615EFC]" />
        </div>
        <div className="w-[48px] h-[48px] rounded-full bg-[#EDF2F6] flex justify-center cursor-pointer items-center">
          <SlCalender className="w-[20px] h-[20px] text-[#615EFC]" />
        </div>
      </div>
      <div className="mt-9 w-full flex flex-col gap-3">
        <button className="w-full h-[40px] bg-[#FF5656] rounded-[5px] font-yekan text-white">
          تبادل مهارت
        </button>
        <button className="w-full h-[40px] border border-[#494953] rounded-[5px] font-yekan text-[#494953]">
          صحبت کنید
        </button>
      </div>
    </div>
  );
}

export default User;
