import AppStoreIcon from "assets/images/appstore.png";
import GooglePlayIcon from "assets/images/googleplay.png";
import User1 from "assets/images/first.svg";
import User2 from "assets/images/second.svg";
import User3 from "assets/images/third.svg";
import User4 from "assets/images/fourth.svg";
import User5 from "assets/images/fifth.svg";
import MockupImage from "assets/images/real-img.svg";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";

const DownloadSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 pb-8 lg:p-16  font-yekan justify-between">
      <div className="pt-10 p-6 lg:w-full text-center lg:text-right">
        <div className="flex w-fit mx-auto lg:mx-0 gap-2 items-center bg-white py-1 px-3 rounded-full mb-10 shadow-md transition-transform transform hover:scale-105">
          <div className="flex justify-center items-center rounded-full bg-[#EDF2F6] p-1">
            <AiOutlineGlobal className="w-8 h-8 text-[#6A7EFC]" />
          </div>
          <span className="text-sm font-medium text-[#494953]">
            نسل جدید، تعاملات هوشمند!
          </span>
        </div>
        <h1 className="text-2xl lg:text-5xl font-extrabold text-[#494953] mb-5">
          اپلیکیشن ما را دانلود کنید!
        </h1>
        <p className="mt-12 text-[#9795B5]">
          هم‌اکنون اپلیکیشن را دانلود کنید و به امکانات سریع و ناوبری روان در هر
          زمان دسترسی داشته باشید!
        </p>
        <div className="lg:w-3/5 py-16 flex flex-col lg:flex-row justify-center items-center gap-6">
          <Link to="#">
            <img src={AppStoreIcon} alt="App Store" className="w-auto" />
          </Link>
          <Link to="#">
            <img src={GooglePlayIcon} alt="Google Play" className="w-auto" />
          </Link>
        </div>
        <div className="lg:w-full flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="flex -space-x-5">
            {[User1, User2, User3, User4, User5].map((user, index) => (
              <img
                key={index}
                className="w-16 h-16 rounded-full border border-white"
                src={user}
                alt={`User ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-2xl lg:text-3xl flex flex-col text-[#494953]">
            <span className="font-semibold">50 هزار+</span>
            <span className="text-xl text-[#6A7EFC] font-medium">
              دانلود در سراسر جهان
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end lg:w-full lg:mb-10">
        <img className="w-auto" src={MockupImage} alt="App Mockup" />
      </div>
    </section>
  );
};

export default DownloadSection;
