import api from "configs/api";
import { getCookie } from "utils/cookie";

const getNewTokens = async () => {
  const refreshToken = await getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await api.post("api/token/refresh/", {
      refresh: refreshToken,
    });
    return { response , refreshToken };
  } catch (error) {
    return { error };
  }
};

export { getNewTokens };
