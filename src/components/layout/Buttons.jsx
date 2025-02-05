import anonymous from "assets/images/anonymous.png";
import { FaSave } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";
import { Link } from "react-router-dom";

function Buttons({ data }) {
  return (
    <div className="flex gap-4 md:gap-6 items-center">
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
          className="text-[#FF5656] border border-[#FF5656] rounded-[8px] px-3 py-1 md:px-4 md:py-2 text-sm md:text-base flex items-center justify-center"
          to="/auth"
        >
          ورود به حساب کاربری
        </Link>
      )}
    </div>
  );
}

export default Buttons;
