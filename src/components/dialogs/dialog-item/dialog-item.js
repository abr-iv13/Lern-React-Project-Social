import React from 'react';
import { NavLink } from 'react-router-dom';

import './dialog-item.css';

const DialogItem = ({name, id}) => {
    return  (
        <div>
            <NavLink to={'/dialogs/' + id } >{ name }</NavLink> 
        </div>
    )
};

export default DialogItem;