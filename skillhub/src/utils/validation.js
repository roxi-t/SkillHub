export const validations = (fields) => {
  const errors = {};

  Object.keys(fields).forEach((field) => {
    if (!fields[field]) {
      errors[field] = "این فیلد نمی‌تواند خالی باشد.";
    }
  });

  return errors;
};
