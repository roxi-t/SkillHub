import naser from "assets/images/naser.jpg";
import amirali from "assets/images/amirali.jpg";
import sina from "assets/images/sina.jpg";
import mohammad from "assets/images/mohammad.jpg";
import SuggestGuiders from "./suggests/SuggestGuiders";
import SuggestPost from "./suggests/SuggestPost";

function Suggests() {
  return (
    <div className="flex my-5 flex-col gap-8 mt-6 p-6 w-full xl:w-[20%]">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#494953] mb-1 text-[22px] md:text-[24px] font-yekan font-semibold">
          راهنمایان مشابه
        </h1>
        <SuggestGuiders
          name="ناصر محمودی"
          skill="متخصص هوش‌مصنوعی"
          profile={naser}
        />
        <SuggestGuiders
          name="امیرعلی نیازی"
          skill="دیجیتال مارکتر جنرالیست"
          profile={amirali}
        />
        <SuggestGuiders name="علی شهبازی" skill="متخصص محتوا" profile={sina} />
        <SuggestGuiders
          name="محمد کریمی"
          skill="طراح گرافیک"
          profile={mohammad}
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[#494953] text-[22px] md:text-[24px] font-yekan font-semibold">
            بخوانید
          </h1>
          <p className="text-[#615EFC] cursor-pointer underline text-[16px] md:text-[18px] font-yekan font-semibold">
            دیدن همه
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <SuggestPost />
          <SuggestPost />
          <SuggestPost />
          <SuggestPost />
        </div>
      </div>
    </div>
  );
}

export default Suggests;
