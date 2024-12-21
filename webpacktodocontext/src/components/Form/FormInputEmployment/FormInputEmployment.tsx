import React, { useEffect } from 'react';
import { useFormContext } from '../../../context/FormContext';
import { Checkbox, ConfigProvider } from 'antd';
import { useAppContext } from '../../../context/AppContext';
import { useModalContext } from '../../../context/ModalContext';

const FormInputEmployment = () => {
    const {employed, changeEmployed} = useFormContext()
    const {theme} = useAppContext()
    const {candidate, modal} = useModalContext()
    useEffect(() => {
        if (modal) {
            changeEmployed(candidate.employment==='Employed')
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
                onChange={changeEmployed}
                checked={employed}
            >
                Employed
            </Checkbox>
        </ConfigProvider>
    );
};

export default FormInputEmployment;