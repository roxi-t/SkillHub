import ali from "assets/images/ali.jpg";
import amir from "assets/images/amir.jpg";

function UsersComments() {
  return (
    <section className="text-center px-5 py-16 mb-24 font-yekan">
      <h2 className="text-[40px] font-bold text-[#494953] mb-2">
        مشتریان ما چه می‌گویند
      </h2>
      <p className="text-base text-[#7d7d7d] mb-10">
        کشف کنید که کاربران ما درباره پلتفرم ما و تجربیاتشان با تبادل مهارت چه
        نظری دارند.
      </p>
      <div className="flex justify-center gap-12 px-2 flex-wrap">
        <div className="bg-[#EDF2F6] p-5 rounded-xl max-w-[280px] max-h-[400px] text-left flex flex-col justify-between">
          <p className="text-sm text-[#494953] mb-5 leading-6 p-2 text-right">
            این پلتفرم فرصت استثنایی برای یادگیری گروهی فراهم می‌کند. توانایی به
            اشتراک‌گذاری تجربه‌ها و یادگیری از دیگران بسیار مفید است.
          </p>
          <div className="flex items-center justify-between gap-2.5 mt-2.5">
            <div className="flex gap-3 items-center">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={ali}
                alt="کاربر"
              />
              <div className=" flex flex-col">
                <h5 className="text-[#494953] font-bold text-sm text-right">
                  علی جانشاهی
                </h5>
                <p className="text-[#7d7d7d] text-sm text-right">
                  دیجیتال مارکتر
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EDF2F6] p-5 rounded-xl max-w-[280px] max-h-[400px] text-left flex flex-col justify-between">
          <p className="text-sm text-[#494953] mb-5 leading-6 p-2 text-right">
            من از این اپلیکیشن برای یادگیری مهارت‌های جدید استفاده کرده‌ام و
            تجربه عالی بوده است. سیستم رابط کاربری آسان و تعامل راحت با دیگر
            کاربران است.
          </p>
          <div className="flex items-center justify-between gap-2.5 mt-2.5">
            <div className="flex gap-3 items-center">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover"
                src={amir}
                alt="کاربر"
              />
              <div className=" flex flex-col">
                <h5 className="text-[#494953] font-bold text-sm text-right">
                  امیرمحمد ملازمی
                </h5>
                <p className="text-[#7d7d7d] text-sm text-right">برنامه‌نویس</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersComments;
