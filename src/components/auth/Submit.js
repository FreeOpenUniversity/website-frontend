import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import SignUpForm from "./SignUpForm";

const Submit = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <SignUpForm submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default Submit;
