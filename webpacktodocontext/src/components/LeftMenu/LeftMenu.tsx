import React from 'react';
import {Col} from 'antd'
import FormCreateUser from '../Form/FormCreateUser/FormCreateUser';
import ModeButton from '../ModeButton/ModeButton';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const LeftMenu = () => {
    return (
        <Col className='form form_dark' span={4}>
            <div className='border-wrap'>
                <label className='label'>Insert Row</label>
                <FormCreateUser/>
                <ModeButton/>
                <ButtonDelete/>
            </div>
        </Col>
    );
};

export default LeftMenu;