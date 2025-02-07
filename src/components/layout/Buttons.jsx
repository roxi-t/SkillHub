import anonymous from "assets/images/anonymous.png";
import { FaSave } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";
import { Link } from "react-router-dom";

function Buttons({ data }) {
  return (
    <div className="hidden gap-4 md:gap-6 items-center lg:flex">
      {data ? (
        <>
          <FaSave className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] cursor-pointer" />
          <LuBellRing className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] cursor-pointer" />
          <img
            src={data.data.Avatar ? data.data.Avatar : anonymous}
            alt="Profile"
            className="w-[36px] h-[36px] md:w-[50px] md:h-[50px] rounded-full cursor-pointer"
          />
        </>
      ) : (
        <Link
          className="bg-[#FF5656] rounded-[8px] w-[140px] h-[45px] md:w-[179px] md:h-[55px] 
                     text-white font-yekan font-bold flex items-center justify-center text-sm md:text-base px-4 py-2"
          to="/auth"
        >
          ورود به حساب کاربری
        </Link>
      )}
    </div>
  );
}

export default Buttons;
