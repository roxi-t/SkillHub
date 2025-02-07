import About from "components/profile/About";
import Suggests from "components/profile/Suggests";
import User from "components/profile/User";

function Profile() {
  return (
    <div className="flex px-4 md:px-10 gap-12">
      <User />
      <div className="border bg-[#9795B5]" />
      <About />
      <div className="border bg-[#9795B5]" />
      <Suggests />
    </div>
  );
}

export default Profile;
