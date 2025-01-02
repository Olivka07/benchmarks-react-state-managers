import { Button, ConfigProvider, Form, Row } from "antd";
import FormSelect from "../FormSelect/FormSelect";
import FormInputName from "../FormInputName/FormInputName";
import FormInputAge from "../FormInputAge/FormInputAge";
import FormInputEmployment from "../FormInputEmployment/FormInputEmployment";
import FormButton from "../FormButton/FormButton";
import FormProvider, { useFormContext } from "../../../context/FormContext";
import { useAppContext } from "../../../context/AppContext";
import { useModalContext } from "../../../context/ModalContext";
import { useEffect } from "react";

const FormEditUser = () => {
  const { theme, editUser } = useAppContext();
  const { onChangeModal, candidate } = useModalContext();
  const { name, age, employed, sub } = useFormContext();

  return (
    <Form className={"form " + "form_" + theme}>
      <FormInputName />
      <FormInputAge />
      <FormSelect />
      <FormInputEmployment />
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
        <Row style={{ margin: "10px 0px" }} justify={"space-between"}>
          <Button type="primary" onClick={() => onChangeModal()}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => {
              editUser({
                ...candidate,
                name: name,
                employment: employed ? "Employed" : "Unemployed",
                age: age,
                subscription: sub
              });
              onChangeModal();
            }}
          >
            Save
          </Button>
        </Row>
      </ConfigProvider>
    </Form>
  );
};

export default FormEditUser;
