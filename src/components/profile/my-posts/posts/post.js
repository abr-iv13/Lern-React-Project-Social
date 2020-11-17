/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import './post.css';

const Post = (props) => {
    return (
        <div className="post">
            <p className="post__title"><strong> {props.message} </strong></p>
            <img className="post__img" alt="no-foto" src="https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg"></img>
            <div className="post__buttom">
                <span>like: {props.likeCount}</span>
                <span>dislike</span>
            </div>
        </div>
    );
};

export default Post;