import { Form } from 'antd'
import FormSelect from '../FormSelect/FormSelect';
import FormInputName from '../FormInputName/FormInputName';
import FormInputAge from '../FormInputAge/FormInputAge';
import FormInputEmployment from '../FormInputEmployment/FormInputEmployment';
import FormButton from '../FormButton/FormButton';
import { useAppSelector } from '../../../hooks/redux.hook';


const FormCreateUser = () => {

    const theme = useAppSelector(state => state.themeReducer.theme)
    
    return (
        <Form className={'form ' + 'form_'+theme}>
            <FormInputName/>
            <FormInputAge/>
            <FormSelect/>
            <FormInputEmployment/>
            <FormButton/>
            <hr style={{width: '80%', margin: '0px auto', border: '0', borderBottom: '1px solid grey'}}/>
        </Form>
    );
};

export default FormCreateUser;