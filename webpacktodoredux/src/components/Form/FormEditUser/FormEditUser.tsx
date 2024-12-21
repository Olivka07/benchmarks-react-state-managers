import { Button, ConfigProvider, Form, Row } from 'antd'
import FormSelect from '../FormSelect/FormSelect';
import FormInputName from '../FormInputName/FormInputName';
import FormInputAge from '../FormInputAge/FormInputAge';
import FormInputEmployment from '../FormInputEmployment/FormInputEmployment';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { updateUser } from '../../../store/reducers/UserReducer';
import { resetValues } from '../../../store/reducers/FormReducer';
import { changeModal } from '../../../store/reducers/ModalReducer';


const FormEditUser = () => {
    const theme = useAppSelector(state => state.themeReducer.theme)
    const age = useAppSelector(state => state.formReducer.age)
    const employed = useAppSelector(state => state.formReducer.employed)
    const name = useAppSelector(state => state.formReducer.name)
    const sub = useAppSelector(state => state.formReducer.sub)
    const candidate = useAppSelector(state => state.modalReducer.candidate)
    const dispatch = useAppDispatch()




    return (
            <Form className={'form ' + 'form_'+theme}>
                <FormInputName/>
                <FormInputAge/>
                <FormSelect/>
                <FormInputEmployment/>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimaryHover: 'rgb(195, 195, 195)',
                                colorPrimary: 'grey',
                                primaryColor: theme === 'dark' ? 'white': 'black',
                                colorPrimaryActive: 'grey'
                            }
                        },
                        token: {
                        }
                    }}
                >
                <Row style={{margin: '10px 0px'}} justify={'space-between'}>
                    <Button type='primary' onClick={() => dispatch(changeModal())}>
                        Cancel
                    </Button>
                    <Button type='primary' onClick={() => {
                        dispatch(updateUser({
                            ...candidate,
                            name: name,
                            employment: employed ? 'Employed' : 'Unemployed',
                            age: age || 18,
                            subscription: sub
                        }))
                        dispatch(changeModal())
                        dispatch(resetValues())
                    }}>
                        Save
                    </Button>
                </Row>
                </ConfigProvider>
            </Form>
    );
};

export default FormEditUser;