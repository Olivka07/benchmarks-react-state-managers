import React, { FC } from "react";
import Item from "../Item/Item";
import { useAppContext } from "../../context/AppContext/AppContext";
import { useLoadingContext } from "../../context/LoadingContext/LoadingContext";

const ListItems: FC = () => {
  const { photos } = useAppContext();
  const { loading } = useLoadingContext();
  return (
    <>
      {(loading && <h1>Загрузка...</h1>) ||
        (!loading && photos.length > 0 && (
          <>
            <ul style={{ listStyle: "none" }}>
              {photos.map((el) => {
                return <Item el={el} />;
              })}
            </ul>
          </>
        )) ||
        (!loading && photos.length === 0 && <h1>Галерея пуста</h1>)}
    </>
  );
};

export default ListItems;
