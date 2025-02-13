import { user } from "constants/users";
import { useParams } from "react-router-dom";

const useUserFromParams = () => {
  const { name } = useParams();
  const userData = user.find((u) => u.nickname === name);
  return userData || null;
};

export default useUserFromParams;
