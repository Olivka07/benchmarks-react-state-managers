import React, {FC} from 'react';
import {Card, Image, ConfigProvider} from 'antd'
import { useStore } from 'effector-react'
import { $photos } from '../../stores/photos.store';
import { IPhoto } from '../../model';

interface ItemProps {
    el: IPhoto
}

const Item:FC<ItemProps> = ({el}) => {
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        colorBgContainer: 'rgb(76, 77, 32)'
                    }
                }
            }}
        >
            <li>
                <Card style={{width: 'auto', padding: '20px', textAlign: 'center'}}>
                    <Image
                        width={150}
                        src={el?.thumbnailUrl}
                    />
                </Card>
            </li>
        </ConfigProvider>
    );
};

export default Item;