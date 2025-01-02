import React, { useEffect, useRef, useState } from "react";
import { Col, ConfigProvider, Modal, Table } from "antd";
import { useAppContext } from "../../context/AppContext";
import FormCreateUser from "../Form/FormCreateUser/FormCreateUser";
import FormEditUser from "../Form/FormEditUser/FormEditUser";
import { useModalContext } from "../../context/ModalContext";
import { IUser } from "../../model/model";
import FormProvider from "../../context/FormContext";

const { Column } = Table;

const TableUsers = () => {
  const { usersApp, changeIdClickedUser, idClickedUser, theme } = useAppContext();
  const { modal, onChangeModal, changeCandidate } = useModalContext();

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
                onChangeModal();
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
        <FormProvider>
          <Modal
            width={300}
            title="Редактировать запись"
            open={modal}
            footer={null}
            onCancel={() => {
              onChangeModal();
              changeCandidate({} as IUser);
            }}
          >
            <FormEditUser />
          </Modal>
        </FormProvider>
      </ConfigProvider>
    </Col>
  );
};

export default TableUsers;
