import { IoMdBook } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaStar } from "react-icons/fa";
import AboutCard from "../cards/AboutCard";
import { HiLightBulb } from "react-icons/hi";

function AboutSection() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mx-2">
      <div className="w-full sm:max-w-[50%] flex flex-col">
        <div className="flex items-center gap-1">
          <IoMdBook className="w-[20px] h-[20px]" />
          <h1 className="text-[18px] font-yekan font-medium text-[#494953]">
            درباره‌ی علی جانشاهی
          </h1>
        </div>
        <p className="font-yekan font-extralight leading-6 text-[#494953] text-[14px] mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <div className="flex flex-col gap-12 w-full sm:max-w-[50%]">
        <div className="mx-auto w-full">
          <div className="flex items-center gap-1">
            <FaRegStar className="w-[20px] h-[20px]" />
            <h1 className="text-[18px] font-yekan font-medium text-[#494953]">
              تجربه‌ها
            </h1>
          </div>
          <AboutCard
            text="دیجیتال مارکتر در اسکیل‌هاب"
            icon={<TfiAnnouncement className="text-white w-[15px] h-[15px]" />}
          />
          <AboutCard
            text="پرامپت‌نویس در اسکیل‌هاب"
            icon={<HiLightBulb className="text-white w-[15px] h-[15px]" />}
          />
        </div>
        <div className="mx-auto w-full">
          <div className="flex items-center gap-1">
            <IoSchoolOutline className="w-[20px] h-[20px]" />
            <h1 className="text-[18px] font-yekan font-medium text-[#494953]">
              گواهی‌ها
            </h1>
          </div>
          <AboutCard
            isVerified={true}
            text="5 ستاره در اسکیل‌هاب"
            icon={<FaStar className="text-white w-[15px] h-[15px]" />}
          />
          <AboutCard
            isVerified={true}
            text="گواهی حضور در اسکیل‌هاب"
            icon={<IoSchoolOutline className="text-white w-[15px] h-[15px]" />}
          />
          <AboutCard
            text="کارشناسی ارشد MBA دانشگاه تهران"
            icon={<IoSchoolOutline className="text-white w-[15px] h-[15px]" />}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
