import { useState } from "react";

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({
      ...v,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (onValid) => (e) => {
    e.preventDefault();
    const validation = validate ? validate(values) : {};
    setErrors(validation);
    const hasError = Object.keys(validation).length > 0;
    if (!hasError) onValid(values);
  };

  const reset = (next = initialValues) => {
    setValues(next);
    setErrors({});
  };

  return { values, setValues, errors, handleChange, handleSubmit, reset };
}
