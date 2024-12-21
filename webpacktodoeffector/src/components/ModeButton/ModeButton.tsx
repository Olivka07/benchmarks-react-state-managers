import React from 'react';
import {ConfigProvider, Switch} from 'antd'
import { changeTheme, $theme } from '../../stores/ThemeStore';
import { useStore } from 'effector-react';

const ModeButton = () => {

    const theme = useStore($theme)
    
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
                    onChange={() => changeTheme()}
                />
                <label style={{color: theme === 'dark' ? 'white' : 'black'}}>Mode</label>
            </div>
        </ConfigProvider>
    );
};

export default ModeButton;