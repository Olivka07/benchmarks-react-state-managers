import { Form } from "antd";
import FormSelect from "../FormSelect/FormSelect";
import FormInputName from "../FormInputName/FormInputName";
import FormInputAge from "../FormInputAge/FormInputAge";
import FormInputEmployment from "../FormInputEmployment/FormInputEmployment";
import FormButton from "../FormButton/FormButton";
import FormProvider from "../../../context/FormContext";
import { useAppContext } from "../../../context/AppContext";

const FormCreateUser = () => {
  const { theme } = useAppContext();

  return (
    <FormProvider>
      <Form className={"form " + "form_" + theme}>
        <FormInputName />
        <FormInputAge />
        <FormSelect />
        <FormInputEmployment />
        <FormButton />
        <hr style={{ width: "80%", margin: "0px auto", border: "0", borderBottom: "1px solid grey" }} />
      </Form>
    </FormProvider>
  );
};

export default FormCreateUser;
