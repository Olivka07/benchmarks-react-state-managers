import React, { useEffect } from 'react';
import { Checkbox, ConfigProvider } from 'antd';
import {useStore} from 'effector-react'
import { $theme } from '../../../stores/ThemeStore';
import { $employed, changeEmployment } from '../../../stores/FormStore';
import { $candidate, $modal } from '../../../stores/ModalStore';


const FormInputEmployment = () => {
    const theme = useStore($theme)
    const employed = useStore($employed)
    const modal = useStore($modal)
    const candidate = useStore($candidate)

    useEffect(() => {
        if (modal) {
            changeEmployment(candidate.employment==='Employed')
        }
    }, [candidate])
    return (
        <ConfigProvider
            theme={{
                token: {
                    controlInteractiveSize: 20,
                    colorBgContainer: theme === 'dark'? 'grey': 'white',
                    colorBorder: 'rgb(21, 117, 21)',
                    colorPrimary: 'rgb(21, 117, 21)',
                    colorText: theme === 'dark'? 'white': 'black',
                    colorWhite: theme === 'dark'? 'black': 'white'
                }
            }}
        >
            <Checkbox
                onChange={changeEmployment}
                checked={employed}
            >
                Employed
            </Checkbox>
        </ConfigProvider>
    );
};

export default FormInputEmployment;