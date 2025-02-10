import { Link } from "react-router-dom";
import DownloadCards from "./DownloadCards";

const StatsSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center p-20 bg-white font-yekan mb-12">
      <div className="flex-1 text-right md:mr-12 hidden xl:block lg:mb-28">
        <h2 className="text-gray-700 text-4xl mb-6 font-semibold">
          آمار ما به زبان اعداد
        </h2>
        <p className="text-gray-400 text-base leading-relaxed">
          ارائه راهکارهایی برای رشد مهارت‌ها، افزایش تعامل و موفقیت کاربران.
        </p>
        <div className="flex mt-16 gap-40">
          {[
            { label: "رضایت کاربران", value: "89%", link: "#" },
            { label: "کاربران فعال", value: "1.2M", link: "#" },
            { label: "تعداد دانلودها", value: "+5,000", link: "#" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-right ${index > 0 ? "border-r-2 pr-4" : ""}`}
            >
              <h3 className="text-4xl font-semibold text-gray-700">
                {stat.value}
              </h3>
              <p>
                <Link to={stat.link} className="text-blue-500 text-sm">
                  {stat.label}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <DownloadCards />
      </div>
    </section>
  );
};

export default StatsSection;
