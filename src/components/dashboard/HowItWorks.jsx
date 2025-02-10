import downloadIcon from "assets/images/download.svg";
import signupIcon from "assets/images/signup.svg";
import swapIcon from "assets/images/swap.svg";
import enjoyIcon from "assets/images/enjoy.svg";
import exploreIcon from "assets/images/explore.svg";
import trackerIcon from "assets/images/tracker1.svg";
import chatIcon from "assets/images/chat1.svg";

const HowItWorks = () => {
  return (
    <section className="text-center px-0 py-14 bg-white relative z-10 font-yekan">
      <h2 className="text-base text-[#6A7EFC] font-semibold mb-3">
        – نحوه عملکرد
      </h2>
      <h3 className="md:text-4xl text-2xl font-bold text-[#494953] mb-4">
        آشنا شوید با نحوه کار
      </h3>
      <p className="md:text-base text-sm text-[#7d7d7d] mb-10 max-w-[600px] mx-auto my-0">
        یاد بگیرید چگونه پلتفرم ما کاربران را برای تبادل مهارت‌ها به هم متصل
        می‌کند و همکاری و رشد متقابل را به‌راحتی تسهیل می‌کند.
      </p>
      <div className="flex flex-wrap justify-around items-center gap-2.5 mt-12 mx-12">
        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <img
              src={downloadIcon}
              alt="آیکن دانلود اپلیکیشن"
              className="w-[30px]"
            />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">
            دانلود اپلیکیشن
          </h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            اپلیکیشن رایگان ما را از این سایت دانلود و نصب کنید.
          </p>
        </div>

        <div className="hidden sm:block">
          <span className="block w-[150px] h-[3px] bg-[#FF5656] mt-[-45px]"></span>
        </div>

        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <img src={signupIcon} alt="آیکن ثبت‌نام" className="w-[30px]" />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">ثبت‌نام</h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            یک حساب کاربری رایگان بسازید یا اگر حساب دارید وارد شوید.
          </p>
        </div>

        <div className="hidden sm:block">
          <span className="block w-[150px] h-[3px] bg-[#FF5656] mt-[-45px]"></span>
        </div>

        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <img
              src={swapIcon}
              alt="آیکن تبادل مهارت‌ها"
              className="w-[30px]"
            />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">
            تبادل مهارت‌ها
          </h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            مهارت‌هایی را که دوست دارید یاد بگیرید، پیدا کنید و آنچه که
            می‌توانید آموزش دهید را به اشتراک بگذارید.
          </p>
        </div>

        <div className="hidden sm:block">
          <span className="block w-[150px] h-[3px] bg-[#FF5656] mt-[-45px]"></span>
        </div>

        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <img
              src={enjoyIcon}
              alt="آیکن لذت بردن از مهارت‌های جدید"
              className="w-[30px]"
            />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">
            از مهارت‌های جدید لذت ببرید!
          </h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            با یادگیری مهارت‌های بیشتر، رتبه‌بندی خود را افزایش دهید.
          </p>
        </div>
      </div>

      <div className="features">
        <div className="bg2 w-full pb-12 rounded-[30px] bg-[#EDF2F6] mt-[70px]">
          <div className="text-left px-8 md:px-24 py-20">
            <h3 className="text-[#6A7EFC] md:text-base text-sm">
              - بهترین ویژگی‌ها
            </h3>
            <h2 className="md:text-4xl text-2xl font-semibold">
              ویژگی‌های کلیدی اپلیکیشن <br />
              <span style={{ color: "#6a7efc" }}>
                SKILL<span style={{ color: "#615efc" }}>HUB</span>
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
                src={chatIcon}
                alt="یادگیری و راهنمایی"
                className="duration-500 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-xl w-full md:w-[95%] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full h-auto md:h-[150px] flex items-center justify-center px-6 md:px-10 bg-gradient-to-r from-[#6A7EFC] to-[#EDF2F6] text-white mt-[90px] text-center md:text-left py-6 md:py-0">
        <div className="flex flex-row items-center gap-6 md:gap-8 flex-wrap justify-center">
          <h2 className="text-xl md:text-2xl font-semibold leading-snug md:leading-normal max-w-md">
            امروز حساب خود را ایجاد کنید و به‌صورت رایگان شروع کنید!
          </h2>
          <a
            href="./login.html"
            target="_blank"
            className="cta-button bg-[#615EFC] text-white px-6 md:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#4c4ae8] shadow-md hover:shadow-lg"
          >
            دریافت اپلیکیشن
          </a>
        </div>
      </section>

      <section className="testimonials-section text-center px-5 py-16">
        <h2 className="text-pattern text-lg text-[#615EFC] font-medium uppercase mb-2">
          - نظرات کاربران
        </h2>
        <h2 className="section-title text-2xl font-bold text-[#615EFC] mb-2.5">
          نظر کاربران ما
        </h2>
        <p className="section-description text-base text-[#7d7d7d] mb-10">
          نظرات کاربران ما را درباره پلتفرم و تجربیاتشان در زمینه تبادل مهارت‌ها
          بخوانید.
        </p>

        <div className="testimonials-container flex justify-center gap-12 px-2 flex-wrap">
          <div className="testimonial-card bg-[#EDF2F6] p-5 rounded-xl max-w-[280px] max-h-[400px] text-left flex flex-col justify-between">
            <p className="text-sm text-[#494953] mb-5 leading-6 p-2">
              این پلتفرم فرصت استثنایی برای یادگیری گروهی فراهم می‌کند. توانایی
              به اشتراک‌گذاری تجربه‌ها و یادگیری از دیگران بسیار مفید است.
            </p>
            <div className="testimonial-profile flex items-center gap-2.5 mt-2.5">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={""}
                alt="کاربر"
              />
              <div>
                <h5 className="text-[#494953] font-bold text-sm">محمد صادقی</h5>
                <p className="text-[#7d7d7d] text-sm">طراح</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card bg-[#EDF2F6] p-5 rounded-xl max-w-[280px] max-h-[400px] text-left flex flex-col justify-between">
            <p className="text-sm text-[#494953] mb-5 leading-6 p-2">
              من از این اپلیکیشن برای یادگیری مهارت‌های جدید استفاده کرده‌ام و
              تجربه عالی بوده است. سیستم رابط کاربری آسان و تعامل راحت با دیگر
              کاربران است.
            </p>
            <div className="testimonial-profile flex items-center gap-2.5 mt-2.5">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={""}
                alt="کاربر"
              />
              <div>
                <h5 className="text-[#494953] font-bold text-sm">مریم آقایی</h5>
                <p className="text-[#7d7d7d] text-sm">برنامه‌نویس</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
