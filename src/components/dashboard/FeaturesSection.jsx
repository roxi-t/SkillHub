import exploreIcon from "assets/images/explore.png";
import trackerIcon from "assets/images/tracker1.png";

function FeaturesSection() {
  return (
    <div className="bg2 w-full pb-12 rounded-[30px] bg-[#EDF2F6] mt-[70px] font-yekan">
      <div className="px-8 md:px-24 py-20 text-right">
        <h3 className="text-[#6A7EFC] md:text-base text-sm mb-3">
          - بهترین ویژگی‌ها
        </h3>
        <h2 className="md:text-4xl text-2xl font-semibold">
          ویژگی‌های کلیدی اپلیکیشن <br />
          <span className="text-[#6a7efc]">
            اسکیل<span className="text-[#615efc]"> هاب</span>
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-6 px-6 md:px-0">
        <div className="bg-white rounded-3xl pt-7 text-center p-6 md:w-1/3">
          <h2 className="text-lg md:text-xl font-semibold">
            اکتشاف مهارت‌های برتر
          </h2>
          <p className="text-[#9795B5] text-sm md:text-base">
            جستجو و پیدا کردن مهارت‌هایی که با مهارت‌های شما تطابق دارد.
          </p>
          <img
            src={exploreIcon}
            alt="اکتشاف مهارت‌ها"
            className="transition-transform duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl w-full md:w-[95%] mx-auto"
          />
        </div>
        <div className="bg-white rounded-3xl pt-7 text-center p-6 md:w-1/3">
          <h2 className="text-lg md:text-xl font-semibold">
            پیگیری فعالیت‌هایتان
          </h2>
          <p className="text-[#9795B5] text-sm md:text-base">
            مشاهده و پیگیری فعالیت‌های خود به ساده‌ترین روش ممکن.
          </p>
          <img
            src={trackerIcon}
            alt="پیگیری فعالیت‌ها"
            className="duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl w-full md:w-[95%] mx-auto"
          />
        </div>
        <div className="bg-white rounded-3xl pt-7 text-center p-6 md:w-1/3">
          <h2 className="text-lg md:text-xl font-semibold">
            یادگیری و راهنمایی
          </h2>
          <p className="text-[#9795B5] text-sm md:text-base">
            با افراد ارتباط برقرار کنید و یاد بگیرید یا راهنمایی کنید.
          </p>
          <img
            src={exploreIcon}
            alt="یادگیری و راهنمایی"
            className="duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl w-full md:w-[95%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
