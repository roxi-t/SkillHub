function UsersComments() {
  return (
    <section className="text-center px-5 py-16 mb-24 font-yekan">
      <h2 className="text-pattern text-lg text-[#615EFC] font-medium uppercase mb-2">
        - نظرات کاربران
      </h2>
      <h2 className="text-2xl font-bold text-[#615EFC] mb-2.5">
        نظر کاربران ما
      </h2>
      <p className="text-base text-[#7d7d7d] mb-10">
        نظرات کاربران ما را درباره پلتفرم و تجربیاتشان در زمینه تبادل مهارت‌ها
        بخوانید.
      </p>
      <div className="flex justify-center gap-12 px-2 flex-wrap">
        <div className="bg-[#EDF2F6] p-5 rounded-xl max-w-[280px] max-h-[400px] text-left flex flex-col justify-between">
          <p className="text-sm text-[#494953] mb-5 leading-6 p-2 text-right">
            این پلتفرم فرصت استثنایی برای یادگیری گروهی فراهم می‌کند. توانایی به
            اشتراک‌گذاری تجربه‌ها و یادگیری از دیگران بسیار مفید است.
          </p>
          <div className="flex items-center justify-between gap-2.5 mt-2.5">
            <div>
              <h5 className="text-[#494953] font-bold text-sm text-right">
                محمد صادقی
              </h5>
              <p className="text-[#7d7d7d] text-sm text-right">طراح</p>
            </div>
            <img
              className="w-[45px] h-[45px] rounded-full object-cover"
              src={""}
              alt="کاربر"
            />
          </div>
        </div>
        <div className="bg-[#EDF2F6] p-5 rounded-xl max-w-[280px] max-h-[400px] text-left flex flex-col justify-between">
          <p className="text-sm text-[#494953] mb-5 leading-6 p-2 text-right">
            من از این اپلیکیشن برای یادگیری مهارت‌های جدید استفاده کرده‌ام و
            تجربه عالی بوده است. سیستم رابط کاربری آسان و تعامل راحت با دیگر
            کاربران است.
          </p>
          <div className="flex items-center justify-between gap-2.5 mt-2.5">
            <div>
              <h5 className="text-[#494953] font-bold text-sm text-right">
                مریم آقایی
              </h5>
              <p className="text-[#7d7d7d] text-sm text-right">برنامه‌نویس</p>
            </div>
            <img
              className="w-[45px] h-[45px] rounded-full object-cover"
              src={""}
              alt="کاربر"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersComments;
