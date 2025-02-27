import api from "configs/api";

const getAllSkills = async () => {
  try {
    const response = await api.get("api/skills/?pagination=false");
    return { response };
  } catch (error) {
    return { error };
  }
};

const getAllAreas = async () => {
  try {
    const response = await api.get("api/skills/areas/?pagination=false");
    return { response };
  } catch (error) {
    return { error };
  }
};

const addSkills = async (data) => {
  const { isNormalSkill, skill_id } = data;
  try {
    const response = await api.post(
      `api/user/${
        isNormalSkill ? "skills" : "favorite-skills"
      }/add/${skill_id}/`,
      {
        skill_id,
      }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};

// const addFavouriteSkills = async (skill_id) => {
//   try {
//     const response = await api.post(
//       `api/user/favourite-skills/add/${skill_id}/`,
//       {
//         skill_id,
//       }
//     );
//     return { response };
//   } catch (error) {
//     return { error };
//   }
// };

export { getAllSkills, getAllAreas, addSkills };
