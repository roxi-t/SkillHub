import { Link } from "react-router-dom";
import downloadsIcon from "assets/images/downloads.svg";
import totalIncomeIcon from "assets/images/total-income.svg";
import bannerImage from "assets/images/big-banner-HighQ.svg";
import swappedSkillsIcon from "assets/images/swapped-skills.svg";
import usersIcon from "assets/images/users.svg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStore } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="flex font-yekan flex-col items-center pt-0 bg-[#EDF2F6] text-center px-4 md:px-8">
      <div className="flex gap-2 items-center justify-between bg-white px-3 py-1.5 rounded-full mb-7 mt-8 shadow-lg transition-transform duration-500 hover:scale-105">
        <div className="flex justify-center items-center p-1 bg-[#EDF2F6] rounded-full">
          <MdOutlineVerifiedUser className="w-8 md:w-10 h-4 md:h-10 text-[#6A7EFC]" />
        </div>
        <span className="text-sm md:text-base text-[#494953]">
          مهارت‌های هوشمند، ارتباطات قوی
        </span>
      </div>
      <h1 className="text-2xl md:text-4xl font-extrabold text-[#494953] mb-5">
        <span className="text-[#6A7EFC]">
          اسکیل<span className="text-[#615efc]"> هاب</span>
        </span>
        ، محلی برای یادگیری و آموزش مهارت‌ها!
      </h1>
      <p className="text-sm md:text-base text-[#7d7d7d] mb-10 max-w-xs md:max-w-lg mx-auto leading-relaxed">
        با راهکارهای نوآورانه، همکاری را متحول کرده‌ایم.
        <br className="hidden md:block" />
        ما ارتباطاتی برای آینده‌ای روشن‌تر و کارآمدتر ایجاد می‌کنیم.
      </p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-base justify-center w-full md:w-auto">
        <Link
          to="/download"
          className="px-4 md:px-8 py-2 md:py-4 rounded-full flex gap-3 items-center text-white font-bold text-sm md:text-base no-underline transition-colors duration-300 ease-in-out bg-[#FF5656] hover:bg-[#e13b3d] w-full md:w-auto"
        >
          <FaAppStore className="w-4 md:w-5 md:h-5 h-4" />
          دانلود برای iOS
        </Link>
        <Link
          to="/download"
          className="px-4 md:px-8 py-2 md:py-4 rounded-full flex gap-3 items-center text-white font-bold text-sm md:text-base no-underline transition-colors duration-300 ease-in-out bg-[#6A7EFC] hover:bg-[#5940cf] w-full md:w-auto"
        >
          <FaGooglePlay className="w-4 md:w-5 md:h-5 h-4" />
          دانلود برای اندروید و iOS
        </Link>
      </div>

      <div className="mt-12 flex justify-center relative">
        <img
          className="relative bottom-20 right-72 w-16 md:w-48 lg:w-auto transition-transform duration-500 hover:scale-105 hidden sm:block"
          src={downloadsIcon}
          alt="آیکون دانلود"
        />
        <img
          className="relative top-16 right-36 w-16 md:w-48 lg:w-auto transition-transform duration-500 hover:scale-105 hidden sm:block"
          src={totalIncomeIcon}
          alt="آیکون مجموع درآمد"
        />
        <div className="flex justify-center w-full">
          <img
            className="w-80 md:w-96 lg:w-auto"
            src={bannerImage}
            alt="بنر اصلی برنامه"
          />
        </div>
        <img
          className="relative bottom-12 left-12 w-16 md:w-48 lg:w-auto transition-transform duration-500 hover:scale-105 hidden sm:block"
          src={swappedSkillsIcon}
          alt="آیکون مهارت‌های جابجا شده"
        />
        <img
          className="relative top-24 left-96 w-16 md:w-48 lg:w-auto transition-transform duration-500 hover:scale-105 hidden sm:block"
          src={usersIcon}
          alt="آیکون کاربران"
        />
      </div>
    </section>
  );
};

export default HeroSection;
