import naser from "assets/images/naser.jpg";
import amirali from "assets/images/amirali.jpg";
import mohammad from "assets/images/mohammad.jpg";
import SuggestGuiders from "./SuggestGuiders";
import SuggestPost from "./SuggestPost";
function Suggests() {
  return (
    <div className="flex my-5 flex-col gap-8 mt-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#494953] mb-1 text-[24px] font-yekan font-semibold">
          راهنمایان مشابه
        </h1>
        <SuggestGuiders
          name="ناصر محمودی"
          skill="متخصص هوش‌مصنوعی"
          profile={naser}
        />
        <SuggestGuiders name="امیرعلی نیازی" skill="دیجیتال مارکتر جنرالیست" profile={amirali} />
        <SuggestGuiders name="علی شهبازی" skill="متخصص محتوا" />
        <SuggestGuiders
          name="محمد کریمی"
          skill="طراح گرافیک"
          profile={mohammad}
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[#494953] text-[24px] font-yekan font-semibold">
            بخوانید
          </h1>
          <p className="text-[#615EFC] cursor-pointer underline text-[18px] font-yekan font-semibold">
            دیدن همه
          </p>
        </div>
        <div className="flex flex-col gap-4">
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
