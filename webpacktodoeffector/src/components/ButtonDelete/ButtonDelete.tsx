import { ConfigProvider, Button, Row } from "antd";
import React from "react";
import { useStore } from "effector-react";
import { $theme } from "../../stores/ThemeStore";
import { $userStore, changeIdClickedUser, deleteUser } from "../../stores/UsersStore";

const ButtonDelete = () => {
  const theme = useStore($theme);
  const [idClickedUser] = useStore($userStore);

  const clickDelete = () => {
    if (idClickedUser !== null) {
      deleteUser(idClickedUser);
      changeIdClickedUser(null);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: "rgb(195, 195, 195)",
            colorPrimary: "grey",
            primaryColor: theme === "dark" ? "white" : "black",
            colorPrimaryActive: "grey"
          }
        },
        token: {}
      }}
    >
      <Button
        style={{
          padding: "4px 15px",
          width: "180px",
          margin: "10px 0px"
        }}
        block={true}
        type="primary"
        htmlType="submit"
        onClick={clickDelete}
      >
        Delete
      </Button>
    </ConfigProvider>
  );
};

export default ButtonDelete;
