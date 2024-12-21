import { ConfigProvider,Button, Row } from 'antd';
import React from 'react';
import {useStore} from 'effector-react'
import { $theme } from '../../../stores/ThemeStore';
import { addUser } from '../../../stores/UsersStore';
import { $age, $employed, $name, $sub, resetValues } from '../../../stores/FormStore';


const FormButton = () => {
    const theme = useStore($theme)
    const name = useStore($name)
    const age = useStore($age)
    const employed = useStore($employed)
    const sub = useStore($sub)

    const clickInsert = () => {
        if (name.trim() !== '' && age) {
            addUser({id: Number(Date.now())+age, age, employment: employed ? 'Employed' : 'Unemployed', name, 
            subscription: sub})
            resetValues()
        }
    }

    return (
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
            <Row style={{margin:'10px 0px'}}>
                <Button 
                    block={true}
                    type="primary" 
                    htmlType="submit"
                    onClick={clickInsert}
                >
                    Insert
                </Button>
            </Row>
        </ConfigProvider>
    );
};

export default FormButton;