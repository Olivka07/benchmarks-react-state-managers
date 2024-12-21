import React from 'react';
import {Button as ButtonAnt, ConfigProvider} from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { fetchPhotosByCount } from '../../store/reducers/photo.reducer';

const Button = () => {
    const count = useAppSelector(state => state.photoReducer.count)
    const dispatch = useAppDispatch()

    return (
        <ButtonAnt style={{marginBottom: '20px'}} onClick={() => dispatch(fetchPhotosByCount(count))}>
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
//             <ButtonAnt style={{marginBottom: '20px'}} onClick={() => dispatch(fetchPhotosByCount(count))}>
//                 Получить фото
//             </ButtonAnt>
//         </ConfigProvider>
//     );
// };

export default Button;