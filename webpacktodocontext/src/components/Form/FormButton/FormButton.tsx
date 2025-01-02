import { ConfigProvider, Button, Row } from "antd";
import React from "react";
import { useAppContext } from "../../../context/AppContext";
import { useFormContext } from "../../../context/FormContext";
import { IUser } from "../../../model/model";

const FormButton = () => {
  const { theme, addUser } = useAppContext();
  const { name, age, employed, sub } = useFormContext();

  const clickInsert = () => {
    if (name.trim() !== "") {
      addUser({ id: Number(Date.now()) + age, age, employment: employed ? "Employed" : "Unemployed", name, subscription: sub });
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
      <Row style={{ margin: "10px 0px" }}>
        <Button block={true} type="primary" htmlType="submit" onClick={clickInsert}>
          Insert
        </Button>
      </Row>
    </ConfigProvider>
  );
};

export default FormButton;
