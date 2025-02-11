import About from "components/profile/About";
import Suggests from "components/profile/Suggests";
import User from "components/profile/User";
import { useState } from "react";

function Profile({ isMyself, data }) {
  const [isEditUser, setIsEditUser] = useState(false);
  const [isEditAbout, setIsEditAbout] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row justify-center md:justify-start px-4 md:px-10 gap-6 md:gap-12">
      <User
        isMyself={isMyself}
        data={data}
        isEditUser={isEditUser}
        setIsEditUser={setIsEditUser}
        setIsEditAbout={setIsEditAbout}
      />
      <div className="hidden md:block border bg-[#9795B5]" />
      <About
        isMyself={isMyself}
        data={data}
        isEditAbout={isEditAbout}
        setIsEditAbout={setIsEditAbout}
      />
      <div className="hidden md:block border bg-[#9795B5]" />
      <Suggests />
    </div>
  );
}

export default Profile;
