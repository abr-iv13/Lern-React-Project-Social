import React from 'react';

import DialogItem from './dialog-item';
import Message from './message';


import './dialogs.css'

const Dialogs = (props) => {

    let DialogElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name}/>);
    let MessageElements = props.state.messages.map( (p) => <Message message={p.message}/>);

    return (
        <div className="dialogs">
            <div className="dialogs__items-block col">
                {
                    DialogElements
                }
            </div>
            <div className="dialogs__messages col">
               {
                   MessageElements
               }
            </div>
        </div>
    );
};

export default Dialogs;