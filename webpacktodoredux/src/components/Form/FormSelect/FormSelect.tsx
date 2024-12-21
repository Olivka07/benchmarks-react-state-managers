import React, { useEffect } from 'react';
import {ConfigProvider, Select} from 'antd'
import { SubscriptionType } from '../../../model/model';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook';
import { changeSub } from '../../../store/reducers/FormReducer';

const FormSelect = () => {
    const theme = useAppSelector(state => state.themeReducer.theme)
    const sub = useAppSelector(state => state.formReducer.sub)
    const candidate = useAppSelector(state => state.modalReducer.candidate)
    const modal = useAppSelector(state => state.modalReducer.modal)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (modal) {
            dispatch(changeSub(candidate.subscription))
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
                onChange={(e) => dispatch(changeSub(e))}
                
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