import React, { useState } from "react";

export const useFormValidation = () => {
  const [validForm, setValidForm] = useState({
    name: true,
    password: true,
    email: true,
  });

  const validateField = (
    value: string,
    key: keyof typeof validForm,
    validateFunc: (value: string) => boolean
  ): boolean => {
    const isValid = validateFunc(value);

    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: isValid,
    }));

    return isValid;
  };

  const setFieldValue = (value: boolean, key: keyof typeof validForm) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      [key]: value,
    }));
  };

  return { validForm, validateField, setFieldValue };
};
