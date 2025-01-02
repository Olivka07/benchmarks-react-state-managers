import { ConfigProvider, Button, Row } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { addUser } from "../../../store/reducers/UserReducer";
import { resetValues } from "../../../store/reducers/FormReducer";

const FormButton = () => {
  const theme = useAppSelector((state) => state.themeReducer.theme);
  const age = useAppSelector((state) => state.formReducer.age);
  const employed = useAppSelector((state) => state.formReducer.employed);
  const name = useAppSelector((state) => state.formReducer.name);
  const sub = useAppSelector((state) => state.formReducer.sub);
  const dispatch = useAppDispatch();

  const clickInsert = () => {
    if (name.trim() !== "" && age) {
      dispatch(addUser({ id: Number(Date.now()) + age, age, employment: employed ? "Employed" : "Unemployed", name, subscription: sub }));
      dispatch(resetValues());
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
