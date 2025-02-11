import api from "configs/api";

const editProfile = async (formData) => {
  try {
    const response = await api.put("api/user/profile/update/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { editProfile };
