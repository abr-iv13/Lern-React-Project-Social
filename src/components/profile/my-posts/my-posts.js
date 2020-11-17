/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Post from './posts';

import './my-posts.css';

const MyPosts = (props) => {

    let postElement = props.posts.map( (p) => <Post message={p.message} likeCount={p.likeCount}/> );

    let newPostElement = React.createRef(); 

    let  addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    return (
        <div className="my-posts"> 
            <h3 className="my-posts__title">My Posts</h3>
    <textarea ref={ newPostElement }></textarea>
                <div className="button-block">
                    <button onClick={ addPost } className="button-block__buttom">Add pots</button>
                    <button className="button-block__buttom">Remove</button>
                </div>
            { postElement }
        </div>
    );
};

export default MyPosts;