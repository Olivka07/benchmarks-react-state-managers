import React, { useEffect } from "react";
import { Button as ButtonAnt, ConfigProvider } from "antd";
import { fetchPhotosByCount } from "../../stores/photos.store";
import { useStore } from "effector-react";
import { $count } from "../../stores/count.store";

const Button = () => {
  const count = useStore($count);

  return (
    <ButtonAnt style={{ marginBottom: "20px" }} onClick={() => fetchPhotosByCount(count)}>
      Получить фото
    </ButtonAnt>
  );
};
//     return (
//         <ConfigProvider
//             theme={{
//                 components: {
//                     Button: {
//                         defaultBg: 'rgb(255, 255, 54)',
//                         defaultColor: 'black',
//                         fontWeight: '600',
//                         colorPrimaryHover: 'black',
//                     }
//                 },
//                 token: {
//                 }
//             }}
//         >
//             <ButtonAnt style={{marginBottom: '20px'}} onClick={() => fetchPhotosByCount(count)}>
//                 Получить фото
//             </ButtonAnt>
//         </ConfigProvider>
//     );
// };

export default Button;
