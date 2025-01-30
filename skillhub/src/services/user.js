import api from "configs/api";

const getProfile = () => api.get("user/profile").then((res) => res || false);

export { getProfile };
