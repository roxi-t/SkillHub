export const validations = (fields) => {
  const errors = {};

  Object.keys(fields).forEach((field) => {
    if (!fields[field]) {
      errors[field] = "این فیلد نمی‌تواند خالی باشد.";
    }

    if (field === "password" && fields[field].length < 8) {
      errors[field] = "رمز باید بالاتر از 8 کاراکتر باشد";
    }
  });

  return errors;
};
