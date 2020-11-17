import React from 'react';

import './message.css';

const Message = (props) => {
    return (
    <div>{ props.message }</div>
    );
};

export default Message;