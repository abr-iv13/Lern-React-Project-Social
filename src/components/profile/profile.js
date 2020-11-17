/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './my-posts'

import ProfileInfo from './profile-info';

import './profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            <div className="container">
                <ProfileInfo />
                <MyPosts posts={props.state.posts}/>
            </div>
            
        </div>
    );
};
export default Profile;