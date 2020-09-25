import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
           <h3>My posts</h3> 
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>post</button>
            </div>
            <div className={classes.posts}>
                <Post massage="Hi, how are you?" />
                <Post massage="I'm fine." />
                <Post massage="I'm drinking coffee right now." />
            </div>
        </div>
    );
};

export default MyPosts;