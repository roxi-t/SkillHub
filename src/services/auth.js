import api from "configs/api";

const authLogin = async (data) => {
  try {
    const response = await api.post("api/token/", data);
    return { response };
  } catch (error) {
    return { error };
  }
};

const authRegister = async (data) => {
  try {
    const response = await api.post("api/user/register/", data);
    return { response };
  } catch (error) {
    return { error };
  }
};

export { authLogin, authRegister };
