import React, { useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";
import { useModalContext } from "../../../context/ModalContext";

const FormInputName = () => {
  const { changeName, name } = useFormContext();
  const { modal, candidate } = useModalContext();
  useEffect(() => {
    if (modal) {
      changeName(candidate.name);
    }
  }, [candidate]);
  return <input type="text" onChange={changeName} placeholder="Name" value={name} />;
};

export default FormInputName;
