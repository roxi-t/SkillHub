import api from "configs/api";

const authLogin = async (email, password) => {
  try {
    const response = await api.post("api/token/", {
      username: email,
      password,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { authLogin };
