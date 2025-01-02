import React from "react";
import { InputNumber, ConfigProvider } from "antd";
import { useAppDispatch } from "../../hooks/redux.hook";
import { changeCount } from "../../store/reducers/photo.reducer";

const FormInput = () => {
  const dispatch = useAppDispatch();
  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            fontSize: 16,
            controlWidth: 250,
            handleHoverColor: "black",
            hoverBorderColor: "black",
            activeBorderColor: "black"
          }
        },
        token: {}
      }}
    >
      <InputNumber style={{ display: "block", marginBottom: "10px" }} min={1} max={5000} placeholder="Количество фотографий" onChange={(e) => dispatch(changeCount(e === null ? 0 : e))} />
    </ConfigProvider>
  );
};

export default FormInput;
