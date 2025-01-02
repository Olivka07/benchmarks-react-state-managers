import { Col, ConfigProvider, Modal, Table } from "antd";
import FormEditUser from "../Form/FormEditUser/FormEditUser";
import { IUser, SubscriptionType } from "../../model/model";
import { useStore } from "effector-react";
import { $theme } from "../../stores/ThemeStore";
import { $userStore, changeIdClickedUser } from "../../stores/UsersStore";
import { resetValues } from "../../stores/FormStore";
import { $modal, changeCandidate, changeModal } from "../../stores/ModalStore";

const { Column } = Table;

const TableUsers = () => {
  const theme = useStore($theme);
  const [idClickedUser, usersApp] = useStore($userStore);
  const modal = useStore($modal);

  return (
    <Col className="form form_dark" span={10}>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "grey",
              headerColor: theme === "dark" ? "white" : "black",
              rowHoverBg: "rgb(17,121,17)"
            }
          },
          token: {
            colorBgContainer: theme !== "dark" ? "white" : "#2e2e2c",
            colorText: theme === "dark" ? "white" : "black",
            colorBorderSecondary: "grey",
            colorFillAlter: "#2e2e2c"
          }
        }}
      >
        <Table
          rowClassName={(record) => (record.id === idClickedUser ? "bgGreen" : "")}
          pagination={false}
          bordered={true}
          scroll={{ y: 500 }}
          key={"id"}
          rowKey={"id"}
          dataSource={usersApp}
          onRow={(record) => {
            return {
              onClick: (event) => {
                changeIdClickedUser(record.id);
              },
              onDoubleClick: () => {
                changeModal();
                changeCandidate(record);
              }
            };
          }}
        >
          <Column align="center" title="Name" dataIndex="name" key="name" />
          <Column align="center" title="Age" dataIndex="age" key="age" />
          <Column align="center" title="Subscription" dataIndex="subscription" key="subscription" />
          <Column align="center" title="Employment" dataIndex="employment" key="employment" />
        </Table>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: theme !== "dark" ? "white" : "#2e2e2c",
              headerBg: theme !== "dark" ? "white" : "#2e2e2c",
              titleColor: theme !== "dark" ? "black" : "white"
            }
          },
          token: {}
        }}
      >
        <Modal
          width={300}
          title="Редактировать запись"
          open={modal}
          footer={null}
          onCancel={() => {
            changeModal();
            changeCandidate({} as IUser);
            resetValues();
          }}
        >
          <FormEditUser />
        </Modal>
      </ConfigProvider>
    </Col>
  );
};

export default TableUsers;
