import { FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="w-full border bg-[#9795B5] mb-12" />
      <h1 className="text-[#494953] font-semibold text-center text-[22px]">
        مشترک خبرنامه ما شوید
      </h1>
      <p className="text-[#9795B5] font-yekan text-center text-[18px] mt-6">
        به‌روز بمانید! مشترک خبرنامه ما شوید تا از آخرین اخبار، نکات و پیشنهادات
        ویژه مطلع شوید.
      </p>
      <div className="flex items-center flex-col sm:flex-row justify-center mt-8 gap-3">
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید..."
          className="bg-[#EDF2F6] rounded-[10px] h-[55px] px-2 sm:w-[379px] w-[90%] font-yekan placeholder:text-[#9795B5]"
        />
        <button className="bg-[#FF5656] w-[98px] h-[55px]  rounded-[10px] text-white text-[16px] font-yekan font-bold">
          عضویت
        </button>
      </div>
      <div className="flex gap-4 items-center mb-8 justify-center mt-8">
        <Link
          to="#"
          className="bg-[#6A7EFC] w-[29px] h-[29px] flex items-center justify-center rounded-[8px]"
        >
          <FaLinkedinIn className="text-[#EDF2F6] w-[14px] h-[14px]" />
        </Link>
        <Link
          to="#"
          className="bg-[#6A7EFC] w-[29px] h-[29px] flex items-center justify-center rounded-[8px]"
        >
          <FaInstagram className="text-[#EDF2F6] w-[14px] h-[14px]" />
        </Link>
        <Link
          to="#"
          className="bg-[#6A7EFC] w-[29px] h-[29px] flex items-center justify-center rounded-[8px]"
        >
          <FaTelegram className="text-[#EDF2F6] w-[14px] h-[14px]" />
        </Link>
      </div>
      <div className="w-full border bg-[#9795B5]" />
      <p className="text-center mt-3 text-[#615EFC] font-yekan text-[18px]">
        تمام حقوق اين وب‌سايت متعلق به اسکیل‌هاب می‌باشد.
      </p>
    </footer>
  );
}

export default Footer;
