import About from "components/profile/About";
import Suggests from "components/profile/Suggests";
import User from "components/profile/User";

function Profile({ isMyself, data }) {
  return (
    <div className="flex flex-col xl:flex-row justify-center md:justify-start px-4 md:px-10 gap-6 md:gap-12">
      <User isMyself={isMyself} data={data} />
      <div className="hidden md:block border bg-[#9795B5]" />
      <About isMyself={isMyself} data={data} />
      <div className="hidden md:block border bg-[#9795B5]" />
      <Suggests />
    </div>
  );
}

export default Profile;
