import React, {FC, PropsWithChildren, createContext, useContext, useState} from 'react';
import { IUser } from '../model/model';

type FunctionType = () => void 

const noop = () => {}

interface ModalContextProps {
    modal: boolean,
    onChangeModal: FunctionType,
    candidate: IUser,
    changeCandidate: (record: IUser) => void
}
export const ModalContext = createContext<ModalContextProps>({
    modal: false,
    candidate: {} as IUser,
    onChangeModal: noop,
    changeCandidate: noop
}) 

export const useModalContext = () => useContext(ModalContext)

const ModalProvider: FC<PropsWithChildren> = ({children}) => {

    const [modal, setModal] = useState<boolean>(false)
    const [candidate, setCandidate] = useState<IUser>({} as IUser)

    const onChangeModal = () => {
        setModal(prev => !prev)
    }

    const changeCandidate = (record: IUser) => {
        setCandidate(record)
    }

    return (
        <ModalContext.Provider
            value={{
                modal,
                onChangeModal,
                changeCandidate,
                candidate
            }}
        >
            {children}
        </ModalContext.Provider>
        
    );
};

export default ModalProvider;