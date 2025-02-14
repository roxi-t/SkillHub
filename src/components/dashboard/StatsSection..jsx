function StatsSection() {
  return (
    <section className="flex flex-wrap font-yekan justify-center md:justify-around items-center py-14 px-5 bg-white gap-6">
      <div className="flex-1 text-center  w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#494953] mb-2.5">
          ۸۹<span className="text-[#b4b4b4] text-2xl lg:text-4xl">٪</span>
        </h2>
        <p className="text-[24px] font-bold text-[#615EFC] mt-0">
          رضایت کاربران
        </p>
      </div>
      <div className="flex-1 text-center relative w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#494953] mb-2.5">
          ۱٫۲<span className="text-[#b4b4b4] text-2xl lg:text-4xl">M</span>
        </h2>
        <p className="text-[24px] font-bold text-[#615EFC] mt-0">
          کاربران فعال
        </p>
      </div>
      <div className="flex-1 text-center relative w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#494953] mb-2.5">
          +۵۰۰۰
        </h2>
        <p className="text-[24px] font-bold text-[#615EFC] mt-0">دانلودها</p>
      </div>
      <div className="flex-1 text-center relative w-full sm:w-1/2 md:w-1/4 max-w-xs md:max-w-none">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#494953] mb-2.5">
          ۲۴۰<span className="text-[#b4b4b4] text-2xl lg:text-4xl">٪</span>
        </h2>
        <p className="text-[24px] font-bold text-[#615EFC] mt-0">
          دعوت به همکاری
        </p>
      </div>
    </section>
  );
}

export default StatsSection;
