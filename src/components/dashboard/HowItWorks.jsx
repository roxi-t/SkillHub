import { IoIosRocket } from "react-icons/io";
import { MdOutlineCloudDownload } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { IoMdSwap } from "react-icons/io";

const HowItWorks = () => {
  return (
    <section className="text-center px-0 py-14 bg-white relative z-10 font-yekan">
      <h2 className="text-base text-[#6A7EFC] font-semibold mb-3">
        – چگونه کار می‌کند
      </h2>
      <h3 className="md:text-4xl text-2xl font-bold text-[#494953] mb-4">
        با نحوه انجام کارها آشنا شوید
      </h3>
      <p className="md:text-base text-sm text-[#7d7d7d] mb-10 max-w-[600px] mx-auto my-0">
        یاد بگیرید چگونه پلتفرم ما کاربران را برای تبادل مهارت‌ها به هم متصل
        می‌کند و همکاری و رشد متقابل را به‌راحتی تسهیل می‌کند.
      </p>
      <div className="flex flex-wrap justify-around items-center gap-2.5 mt-12 mx-12">
        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <MdOutlineCloudDownload className="w-[30px] h-[30px] text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">
            دانلود اپلیکیشن
          </h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            اپلیکیشن رایگان ما را از این سایت دانلود و نصب کنید.
          </p>
        </div>
        <div className="hidden sm:block w-[150px] h-[3px] bg-[#FF5656] mt-[-45px]" />
        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <BiLogIn className="w-[30px] h-[30px] text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">ثبت‌نام</h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            یک حساب کاربری رایگان بسازید یا اگر حساب دارید وارد شوید.
          </p>
        </div>
        <div className="hidden sm:block w-[150px] h-[3px] bg-[#FF5656] mt-[-45px]" />
        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <IoMdSwap className="w-[30px] h-[30px] text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">
            تبادل مهارت‌ها
          </h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            مهارت‌هایی را که دوست دارید یاد بگیرید، پیدا کنید و آنچه که
            می‌توانید آموزش دهید را به اشتراک بگذارید.
          </p>
        </div>
        <div className="hidden sm:block w-[150px] h-[3px] bg-[#FF5656] mt-[-45px]" />
        <div className="flex flex-col items-center max-w-[180px]">
          <div className="bg-[#6A7EFC] rounded-full p-7 mb-4 flex justify-center items-center transition-transform duration-500 hover:scale-110">
            <IoIosRocket className="w-[30px] h-[30px] text-white" />
          </div>
          <h4 className="text-lg font-bold text-[#494953] mb-2.5">
            از مهارت‌های جدید لذت ببرید!
          </h4>
          <p className="text-sm text-[#7d7d7d] text-center">
            با یادگیری مهارت‌های بیشتر، رتبه‌بندی خود را افزایش دهید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
