import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState({});

  const handeleChange = (e) => {
    const [name, value] = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handeleChange, values };
};

export default useForm;
