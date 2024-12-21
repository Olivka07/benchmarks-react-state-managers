import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { IPhoto } from "../../model";
import axios from 'axios'
import { useLoadingContext } from "../LoadingContext/LoadingContext";

interface IAppContext { 
    photos: IPhoto[],
    fetchPhotos: () => void,
    count: number,
    changeCount: (count: number) => void
}

const initialValue: IAppContext = {
    photos: [],
    fetchPhotos: () => {},
    count: 0,
    changeCount: () => {}
}

const AppContext = createContext(initialValue)
export const useAppContext = () => useContext(AppContext)

export const AppProvider:FC<PropsWithChildren> = ({children}) => {
    const [photos, setPhotos] = useState([])
    const [count, setCount] = useState(0)

    const {changeLoading} = useLoadingContext()

    const fetchPhotos = async() => {
        changeLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${count}`)
        .then(({data}) => {
            setPhotos(data)
        })
        .catch(e => {
            console.log((e as Error).message)
        })
        .finally(() => {
            changeLoading(false)
        })
    }

    const changeCount = (newCount: number) => {
        setCount(newCount)
    }
    return (
        <AppContext.Provider
            value={{
                fetchPhotos,
                photos,
                count,
                changeCount
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
