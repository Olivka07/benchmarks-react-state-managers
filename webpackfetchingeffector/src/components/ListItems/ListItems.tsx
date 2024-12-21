import React, {FC} from 'react';
import Item from '../Item/Item';
import { useStore } from 'effector-react'
import { $photos } from '../../stores/photos.store';
import { $loading } from '../../stores/loading.store';



const ListItems: FC = () => {
    const photos = useStore($photos)
    const loading = useStore($loading)

    return (
        <>
            {loading && <h1>Загрузка...</h1> ||
                (!loading && photos.length > 0 &&
                    <>
                        <ul style={{listStyle:'none'}}>
                            {
                                photos.map((el) => {
                                    return (
                                        <Item el={el}/>
                                    )
                                })
                            }
                        </ul>
                    </> ) || 
                (!loading && photos.length === 0 && <h1>Галерея пуста</h1>)
            }
        </>
    );
};

export default ListItems;