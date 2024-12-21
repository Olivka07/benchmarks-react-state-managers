import React, { useEffect } from 'react';
import { useFormContext } from '../../../context/FormContext';
import { ConfigProvider, InputNumber } from 'antd';
import { useAppContext } from '../../../context/AppContext';
import { useModalContext } from '../../../context/ModalContext';

const FormInputAge = () => {
    const {age, changeAge} = useFormContext()
    const {modal, candidate} = useModalContext()
    const {theme} = useAppContext()

    useEffect(() => {
        if (modal) {
            changeAge(candidate.age)
        }
    }, [candidate])
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    InputNumber: {
                        activeShadow: '0',
                        addonBg: 'red',
                        colorTextPlaceholder: theme !== 'dark'? 'black': 'white'
                    }
                },
                token: {
                    colorPrimaryHover: 'rgb(21, 117, 21)',
                    colorBorder: 'grey',
                    colorBgElevated: theme === 'dark'? 'grey': 'white',
                    colorText: theme !== 'dark'? 'black': 'white',
                }
            }}
        >
            {(!modal && 
                <InputNumber 
                    type='number' 
                    min={18}
                    max={100}
                    onChange={changeAge}
                    placeholder='Age'
                />) ||
                <InputNumber 
                    type='number' 
                    value={age}
                    min={18}
                    max={100}
                    onChange={changeAge}
                    placeholder='Age'
                />
            }

            
        </ConfigProvider>
    );
};

export default FormInputAge;