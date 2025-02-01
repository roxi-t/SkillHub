import api from "configs/api";

const authLogin = async (username, password) => {
  try {
    const response = await api.post("api/token/", { username, password });
    return { response };
  } catch (error) {
    return { error };
  }
};

const authRegister = async (username, email, password) => {
  try {
    const response = await api.post("api/user/register/", {
      username,
      email,
      password,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { authLogin, authRegister };
