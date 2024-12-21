import React, {FC} from 'react';
import Item from '../Item/Item';
import { useAppSelector } from '../../hooks/redux.hook';



const ListItems: FC = () => {
    const photos = useAppSelector(state => state.photoReducer.photos)
    const loading = useAppSelector(state => state.loadingReducer.loading)
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
                    </>
                    ) || 
                (!loading && photos.length === 0 && <h1>Галерея пуста</h1>)
            }
        </>
    );
};

export default ListItems;