import React, {FC, PropsWithChildren, createContext, useContext, useEffect, useState} from 'react';
import { IUser } from '../model/model';

export type ThemeType = 'dark' | 'light'

type FunctionType = () => void

const noop = () => {}

interface AppContextProps {
    theme: ThemeType
    changeTheme: FunctionType
    usersApp: IUser[]
    deleteUser: (id:number) => void
    addUser: (user:IUser) => void,
    idClickedUser: number | null,
    changeIdClickedUser: (id:number | null) => void
    editUser: (candidate: IUser) => void
}
export const AppContext = createContext<AppContextProps>({
    theme: 'dark',
    changeTheme: noop,
    usersApp: [],
    deleteUser: noop,
    addUser: noop,
    idClickedUser: null,
    changeIdClickedUser: noop,
    editUser: noop
}) 

export const useAppContext = () => useContext(AppContext)

const AppProvider: FC<PropsWithChildren> = ({children}) => {

    const [theme, setTheme] = useState<ThemeType>('dark')
    const [usersApp, setUsersApp] = useState<IUser[]>([])
    const [idClickedUser, setIdClickedUser] = useState<null | number>(null)

    useEffect(() => {
        const itemStorage = localStorage.getItem('users')
            if (typeof itemStorage === 'string') {
                const usersStorage:IUser[] = JSON.parse(itemStorage)
                setUsersApp(usersStorage)
            }
    }, [])

    const addUser = (user:IUser) => {
        setUsersApp(prev => {
            localStorage.setItem('users', JSON.stringify([...prev, user]))
            return [...prev, user]
        })
    }

    const deleteUser = (id: number) => {
        setUsersApp(prev => {
            localStorage.setItem('users', JSON.stringify(prev.filter((el) => el.id!==id)))
            return prev.filter((el) => el.id!==id)
        })
    }

    const editUser = (candidate: IUser) => {
        console.log(candidate)
        setUsersApp(prev => {
            localStorage.setItem('users', JSON.stringify(prev.map((el) => {
                if (el.id === candidate.id) {
                    return candidate
                } 
                return el
            })))
            return prev.map((el) => {
                if (el.id === candidate.id) {
                    return candidate
                } 
                return el
            })
        })
    }

    const changeTheme = () => {
        theme === 'dark' ? setTheme('light'): setTheme('dark')
    }

    const changeIdClickedUser = (id: number | null) => {
        setIdClickedUser(id)
    }

    return (
        <AppContext.Provider
            value={{
                theme,
                usersApp,
                idClickedUser,
                changeTheme,
                addUser,
                deleteUser,
                changeIdClickedUser,
                editUser
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;