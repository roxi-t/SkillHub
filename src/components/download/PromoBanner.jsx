import AppStoreIcon from "assets/images/appstore.png";
import GooglePlayIcon from "assets/images/googleplay.png";

const PromoBanner = () => {
  return (
    <section className="flex justify-center items-center relative z-10 w-full sm:text-center sm:bg-transparent font-yekan">
      <div className="bg-[#6A7EFC] lg:w-3/4 h-[450px] lg:rounded-3xl flex flex-col justify-center items-center relative md:-mt-24 rounded-[30px]">
        <p className="text-[#EDF2F6] lg:text-[28px] font-bold text-sm mb-12 text-center">
          راه‌حل نهایی شما برای تبادل مهارت!
        </p>
        <h2 className="lg:text-[60px] text-3xl text-[#EDF2F6] font-extrabold text-center mb-12">
          همین حالا اسکیل‌هاب را دانلود کنید
        </h2>
        <p className="text-white md:text-[20px] text-sm text-center">
          همین حالا به جامعه ما بپیوندید! اپلیکیشن را دانلود کنید و مهارت‌های
          خود را به اشتراک بگذارید و یاد بگیرید.
        </p>
        <div className="flex lg:flex-row flex-col gap-2 pt-10 items-center">
          <img src={AppStoreIcon} className="lg:w-full w-3/4" alt="App Store" />
          <img
            src={GooglePlayIcon}
            className="lg:w-full w-3/4"
            alt="Google Play"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
