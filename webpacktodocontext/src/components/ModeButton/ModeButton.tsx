import React from "react";
import { useAppContext } from "../../context/AppContext";
import { ConfigProvider, Switch } from "antd";

const ModeButton = () => {
  const { changeTheme, theme } = useAppContext();
  const onChange = (checked: boolean) => {
    changeTheme();
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            handleBg: theme === "dark" ? "black" : "white",
            colorPrimaryHover: "rgb(21, 117, 21)"
          }
        },
        token: {}
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          marginRight: "10px",
          marginLeft: "15px"
        }}
      >
        <Switch
          style={{
            backgroundColor: "rgb(21, 117, 21)",
            marginRight: "10px",
            marginLeft: "15px"
          }}
          onChange={onChange}
        />
        <label style={{ color: theme === "dark" ? "white" : "black" }}>Mode</label>
      </div>
    </ConfigProvider>
  );
};

export default ModeButton;
