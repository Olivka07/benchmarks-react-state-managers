import React from "react";
import { Button as ButtonAnt, ConfigProvider } from "antd";
import { useAppContext } from "../../context/AppContext/AppContext";

const Button = () => {
  const { fetchPhotos } = useAppContext();

  return (
    <ButtonAnt style={{ marginBottom: "20px" }} onClick={fetchPhotos}>
      Получить фото
    </ButtonAnt>
  );
};
// return (
//     <ConfigProvider
//         theme={{
//             components: {
//                 Button: {
//                     defaultBg: 'rgb(255, 255, 54)',
//                     defaultColor: 'black',
//                     fontWeight: '600',
//                     colorPrimaryHover: 'black',
//                 }
//             },
//             token: {
//             }
//         }}
//     >
//         <ButtonAnt style={{marginBottom: '20px'}} onClick={fetchPhotos}>
//             Получить фото
//         </ButtonAnt>
//     </ConfigProvider>
// );
// };

export default Button;
