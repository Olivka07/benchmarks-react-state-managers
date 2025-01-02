import React, { useEffect } from "react";
import { Checkbox, ConfigProvider } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { changeEmployment } from "../../../store/reducers/FormReducer";

const FormInputEmployment = () => {
  const theme = useAppSelector((state) => state.themeReducer.theme);
  const employed = useAppSelector((state) => state.formReducer.employed);
  const candidate = useAppSelector((state) => state.modalReducer.candidate);
  const modal = useAppSelector((state) => state.modalReducer.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modal) {
      dispatch(changeEmployment(candidate.employment === "Employed"));
    }
  }, [candidate]);
  return (
    <ConfigProvider
      theme={{
        token: {
          controlInteractiveSize: 20,
          colorBgContainer: theme === "dark" ? "grey" : "white",
          colorBorder: "rgb(21, 117, 21)",
          colorPrimary: "rgb(21, 117, 21)",
          colorText: theme === "dark" ? "white" : "black",
          colorWhite: theme === "dark" ? "black" : "white"
        }
      }}
    >
      <Checkbox onChange={(e) => dispatch(changeEmployment(e.target.checked))} checked={employed}>
        Employed
      </Checkbox>
    </ConfigProvider>
  );
};

export default FormInputEmployment;
