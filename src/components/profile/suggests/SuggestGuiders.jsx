import anonymous from "assets/images/anonymous.png";

function SuggestGuiders({ profile, name, skill }) {
  return (
    <div className="w-[245px] h-[72px] mx-auto flex gap-5 items-center bg-[#EDF2F6] rounded-[10px] p-3">
      <div>
        <img src={profile ? profile : anonymous} alt="profile" className="w-[50px] object-cover h-[50px] rounded-full"/>
      </div>
      <div>
        <h1 className="text-[#494953] text-[18px] font-semibold font-yekan">
          {name}
        </h1>
        <p className="text-[#494953] text-[14px] font-extralight font-yekan">
          {skill}
        </p>
      </div>
    </div>
  );
}

export default SuggestGuiders;
