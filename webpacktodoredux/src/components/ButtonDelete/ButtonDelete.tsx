import { ConfigProvider,Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { changeIdClickedUser, deleteUser } from '../../store/reducers/UserReducer';

const ButtonDelete = () => {
    const theme = useAppSelector(state => state.themeReducer.theme)
    const idClickedUser = useAppSelector(state => state.usersReducer.idClickedUser)
    const dispatch = useAppDispatch()

    const clickDelete = () => {
        if (idClickedUser !== null) {
            dispatch(deleteUser(idClickedUser))
            dispatch(changeIdClickedUser(null))
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