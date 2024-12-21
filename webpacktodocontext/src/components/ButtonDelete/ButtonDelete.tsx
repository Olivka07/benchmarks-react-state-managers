import { ConfigProvider,Button, Row } from 'antd';
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ButtonDelete = () => {
    const {theme, idClickedUser, deleteUser, changeIdClickedUser} = useAppContext()

    const clickDelete = () => {
        if (idClickedUser!== null) {
            deleteUser(idClickedUser)
            changeIdClickedUser(null)
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
                <Button 
                    style={{
                        padding: '4px 15px',
                        width: '180px',
                        margin: '10px 0px'
                    }}
                    block={true}
                    type="primary" 
                    htmlType="submit"
                    onClick={clickDelete}
                >
                    Delete
                </Button>
        </ConfigProvider>
    );
};

export default ButtonDelete;