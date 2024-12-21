import {Col, ConfigProvider, Modal, Table } from 'antd'
import FormEditUser from '../Form/FormEditUser/FormEditUser';
import { IUser } from '../../model/model';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { changeIdClickedUser } from '../../store/reducers/UserReducer';
import { resetValues } from '../../store/reducers/FormReducer';
import { changeCandidate, changeModal } from '../../store/reducers/ModalReducer';


const {Column} = Table


const TableUsers = () => {
    const theme = useAppSelector(state => state.themeReducer.theme)
    const idClickedUser = useAppSelector(state => state.usersReducer.idClickedUser)
    const users = useAppSelector(state => state.usersReducer.users)
    const modal = useAppSelector(state => state.modalReducer.modal)
    const dispatch = useAppDispatch()

    return (
        <Col className='form form_dark' span={10}>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: 'grey',
                            headerColor: theme === 'dark' ? 'white' : 'black',
                            rowHoverBg: 'rgb(17,121,17)',
                        }
                    },
                    token: {
                        colorBgContainer: theme !== 'dark' ? 'white' : '#2e2e2c',
                        colorText: theme === 'dark' ? 'white' : 'black',
                        colorBorderSecondary: 'grey',
                        colorFillAlter: '#2e2e2c'
                    }
                }}
            >
                <Table 
                    rowClassName={record => record.id ===  idClickedUser? 'bgGreen' : ''}
                    pagination={false}
                    bordered = {true}
                    scroll={{y: 500}}
                    key={"id"}
                    rowKey={"id"} 
                    dataSource={users}
                    onRow={(record) => {
                        return {
                            onClick: (event) => {
                                dispatch(changeIdClickedUser(record.id))
                            },
                            onDoubleClick: () => {
                                dispatch(changeModal())
                                dispatch(changeCandidate(record))
                            }
                        }
                    }}
                >
                    <Column align='center' title="Name" dataIndex="name" key="name" />
                    <Column align='center' title="Age" dataIndex="age" key="age" />
                    <Column align='center' title="Subscription" dataIndex="subscription" key="subscription" />
                    <Column align='center' title="Employment" dataIndex="employment" key="employment" />
                </Table>
            </ConfigProvider>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            contentBg: theme !== 'dark' ? 'white' : '#2e2e2c',
                            headerBg: theme !== 'dark' ? 'white' : '#2e2e2c',
                            titleColor: theme !== 'dark' ? 'black' : 'white',
                        }
                    },
                    token: {

                    }
                }}
            >
                <Modal 
                    width={300}
                    title="Редактировать запись" 
                    open={modal} 
                    footer={null}
                    onCancel={() => {
                        dispatch(changeModal())
                        dispatch(changeCandidate({} as IUser))
                        dispatch(resetValues())
                    }}
                >
                    <FormEditUser/>
                </Modal>
            </ConfigProvider>
        </Col>
    );
};

export default TableUsers;