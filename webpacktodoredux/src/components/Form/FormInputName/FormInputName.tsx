import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { changeName } from "../../../store/reducers/FormReducer";

const FormInputName = () => {
  const name = useAppSelector((state) => state.formReducer.name);
  const candidate = useAppSelector((state) => state.modalReducer.candidate);
  const modal = useAppSelector((state) => state.modalReducer.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modal) {
      dispatch(changeName(candidate.name));
    }
  }, [candidate]);
  return <input type="text" onChange={(e) => dispatch(changeName(e.target.value))} placeholder="Name" value={name} />;
};

export default FormInputName;
