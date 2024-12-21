import React from 'react';
import {InputNumber, ConfigProvider} from 'antd'
import { useAppContext } from '../../context/AppContext/AppContext';

const FormInput = () => {
    const {changeCount} = useAppContext()
    return (
        <ConfigProvider
            theme={{
                components: {
                    InputNumber: {
                        fontSize: 16,
                        controlWidth: 250,
                        handleHoverColor: 'black',
                        hoverBorderColor: 'black',
                        activeBorderColor: 'black'
                    }
                },
                token: {

                }
            }}
        >
            <InputNumber
                style={{display: 'block', marginBottom: '10px'}}
                min={1}
                max={5000}
                placeholder='Количество фотографий'
                onChange={(e) => changeCount(e === null ? 0 : e)}
            />
        </ConfigProvider>
    );
};

export default FormInput;