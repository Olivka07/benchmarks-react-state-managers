import React from 'react';
import {ConfigProvider, Switch} from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { changeTheme } from '../../store/reducers/ThemeReducer';

const ModeButton = () => {

    const theme = useAppSelector(state => state.themeReducer.theme)
    const dispatch = useAppDispatch()
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    Switch: {
                        handleBg: theme === 'dark' ? 'black' : 'white',
                        colorPrimaryHover: 'rgb(21, 117, 21)',
                    }
                },
                token: {

                }
            }}
        >
            <div style={{
                alignSelf: 'flex-start', 
                marginRight: '10px',
                marginLeft: '15px'
            }}>
                <Switch
                    style={{
                        backgroundColor: 'rgb(21, 117, 21)',
                        marginRight: '10px',
                        marginLeft: '15px'
                    }}
                    onChange={() => dispatch(changeTheme())}
                />
                <label style={{color: theme === 'dark' ? 'white' : 'black'}}>Mode</label>
            </div>
        </ConfigProvider>
    );
};

export default ModeButton;