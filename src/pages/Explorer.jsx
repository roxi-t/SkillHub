import { useQuery } from "@tanstack/react-query";
import CompleteProfile from "components/explorer/CompleteProfile";
import FamousSkills from "components/explorer/FamousSkills";
import SkillsForYou from "components/explorer/SkillsForYou";
import TopGuiders from "components/explorer/TopGuiders";
import { getProfile } from "services/user";

function Explorer() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  return (
    <div>
      {data && <CompleteProfile data={data.data} />}
      {data && <SkillsForYou />}
      <FamousSkills />
      <TopGuiders />
    </div>
  );
}

export default Explorer;
