import React, { useEffect } from "react";
import { ConfigProvider, InputNumber } from "antd";
import { useStore } from "effector-react";
import { $theme } from "../../../stores/ThemeStore";
import { $age, changeAge } from "../../../stores/FormStore";
import { $candidate, $modal } from "../../../stores/ModalStore";

const FormInputAge = () => {
  const theme = useStore($theme);
  const age = useStore($age);
  const modal = useStore($modal);
  const candidate = useStore($candidate);

  useEffect(() => {
    if (modal) {
      changeAge(candidate.age);
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
      {(!modal && <InputNumber type="number" min={18} max={100} onChange={(e) => changeAge(e)} value={age !== null ? age : undefined} placeholder="Age" />) || (
        <InputNumber type="number" value={age} min={18} max={100} onChange={(e) => changeAge(e)} placeholder="Age" />
      )}
    </ConfigProvider>
  );
};

export default FormInputAge;
