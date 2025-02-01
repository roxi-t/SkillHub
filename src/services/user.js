import api from "configs/api";

const getProfile = () => api.get("api/user/profile").then((res) => res || false);

export { getProfile };
