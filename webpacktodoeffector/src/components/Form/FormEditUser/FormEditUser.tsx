import { Button, ConfigProvider, Form, Row } from 'antd'
import FormSelect from '../FormSelect/FormSelect';
import FormInputName from '../FormInputName/FormInputName';
import FormInputAge from '../FormInputAge/FormInputAge';
import FormInputEmployment from '../FormInputEmployment/FormInputEmployment';
import {useStore} from 'effector-react'
import { $theme } from '../../../stores/ThemeStore';
import { updateUser } from '../../../stores/UsersStore';
import { $age, $employed, $name, $sub, resetValues } from '../../../stores/FormStore';
import { $candidate, changeModal } from '../../../stores/ModalStore';


const FormEditUser = () => {
    const theme = useStore($theme)
    const candidate = useStore($candidate)
    const name = useStore($name)
    const age = useStore($age)
    const employed = useStore($employed)
    const sub = useStore($sub)


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
                    <Button type='primary' onClick={() => changeModal()}>
                        Cancel
                    </Button>
                    <Button type='primary' onClick={() => {
                        updateUser({
                            ...candidate,
                            name: name,
                            employment: employed ? 'Employed' : 'Unemployed',
                            age: age || 18,
                            subscription: sub
                        })
                        changeModal()
                        resetValues()
                    }}>
                        Save
                    </Button>
                </Row>
                </ConfigProvider>
            </Form>
    );
};

export default FormEditUser;