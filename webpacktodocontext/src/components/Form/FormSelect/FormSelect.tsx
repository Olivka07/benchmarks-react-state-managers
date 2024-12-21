import React, { useEffect } from 'react';
import { useFormContext } from '../../../context/FormContext';
import {ConfigProvider, Select} from 'antd'
import { SubscriptionType } from '../../../model/model';
import { useAppContext } from '../../../context/AppContext';
import { useModalContext } from '../../../context/ModalContext';

const FormSelect = () => {
    const {sub, changeSub} = useFormContext()
    const {theme} = useAppContext()
    const {candidate, modal} = useModalContext()

    useEffect(() => {
        if (modal) {
            changeSub(candidate.subscription)
        }
    }, [candidate])
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimaryHover: 'rgb(21, 117, 21)',
                    colorBorder: 'grey',
                    colorBgElevated: theme === 'dark'? 'grey': 'white',
                    colorText: theme !== 'dark'? 'black': 'white',
                    controlItemBgActive: 'rgb(49, 145, 49)',
                    controlItemBgHover: 'rgb(21, 117, 21)',
                    colorTextQuaternary: 'white'
                }
            }}
        >
            <Select
                className='select'
                value={sub}
                onChange={changeSub}
                
            >
                <Select.Option value={SubscriptionType.Subscribed}>
                    <div className='select_option'>
                        { SubscriptionType.Subscribed }
                    </div>
                </Select.Option>
                <Select.Option value={SubscriptionType.NotSubscribed}>
                    <div className='select_option'>
                        { SubscriptionType.NotSubscribed }
                    </div>
                </Select.Option>
                <Select.Option value={SubscriptionType.Other}>
                    <div className='select_option'>
                        { SubscriptionType.Other }
                    </div>
                </Select.Option>
            </Select>
        </ConfigProvider>
    );
};

export default FormSelect;