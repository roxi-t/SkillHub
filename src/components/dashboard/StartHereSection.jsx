import { Link } from "react-router-dom";

function StartHereSection() {
  return (
    <section className="w-full font-yekan h-auto md:h-[150px] flex items-center justify-center px-6 md:px-10 bg-gradient-to-r to-[#6A7EFC] from-[#EDF2F6] text-white mt-[90px] text-center md:text-left py-6 md:py-0">
      <div className="flex flex-row items-center gap-6 md:gap-8 flex-wrap justify-center">
        <h2 className="text-xl md:text-2xl font-semibold leading-snug md:leading-normal max-w-md text-right">
          امروز حساب خود را ایجاد کنید و به‌صورت رایگان شروع کنید!
        </h2>
        <Link
          to="/auth"
          className="cta-button bg-[#615EFC] text-white px-6 md:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#4c4ae8] shadow-md hover:shadow-lg"
        >
          دریافت اپلیکیشن
        </Link>
      </div>
    </section>
  );
}

export default StartHereSection;
