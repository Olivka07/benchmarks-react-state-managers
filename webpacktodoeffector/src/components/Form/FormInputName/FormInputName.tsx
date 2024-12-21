import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $name, changeName } from '../../../stores/FormStore';
import { $candidate, $modal } from '../../../stores/ModalStore';

const FormInputName = () => {
    const name = useStore($name)
    const modal = useStore($modal)
    const candidate = useStore($candidate)
    useEffect(() => {
        if (modal) {
            changeName(candidate.name)
        }
    }, [candidate])
    return (
        <input 
            type='text' 
            onChange={changeName}
            placeholder='Name'
            value={name}
        />
    );
};

export default FormInputName;