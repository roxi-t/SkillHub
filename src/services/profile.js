import api from "configs/api";

const getProfile = async () => {
  try {
    const response = await api.get("api/user/profile");
    return { response };
  } catch (error) {
    return { error };
  }
};

export { getProfile };
