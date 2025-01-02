import React, { useEffect } from "react";
import { ConfigProvider, InputNumber } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { changeAge } from "../../../store/reducers/FormReducer";

const FormInputAge = () => {
  const theme = useAppSelector((state) => state.themeReducer.theme);
  const age = useAppSelector((state) => state.formReducer.age);
  const candidate = useAppSelector((state) => state.modalReducer.candidate);
  const modal = useAppSelector((state) => state.modalReducer.modal);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modal) {
      dispatch(changeAge(candidate.age));
    }
  }, [candidate]);

  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            activeShadow: "0",
            addonBg: "red",
            colorTextPlaceholder: theme !== "dark" ? "black" : "white"
          }
        },
        token: {
          colorPrimaryHover: "rgb(21, 117, 21)",
          colorBorder: "grey",
          colorBgElevated: theme === "dark" ? "grey" : "white",
          colorText: theme !== "dark" ? "black" : "white"
        }
      }}
    >
      {(!modal && <InputNumber type="number" min={18} max={100} onChange={(e) => dispatch(changeAge(e))} value={age !== null ? age : undefined} placeholder="Age" />) || (
        <InputNumber type="number" value={age} min={18} max={100} onChange={(e) => dispatch(changeAge(e))} placeholder="Age" />
      )}
    </ConfigProvider>
  );
};

export default FormInputAge;
