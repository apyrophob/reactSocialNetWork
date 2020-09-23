import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={classes.posts}>
                <Post massage="Hi, how are you?"/>
                <Post massage="I'm fine."/>
                <Post massage="I'm drinking coffee right now."/>
            </div>
        </div>
    );
};

export default MyPosts;