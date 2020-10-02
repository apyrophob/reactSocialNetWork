import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElement = props.posts
        .map( p => <Post message={p.message} id={p.id} /> );

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
                { postsElement }
            </div>
        </div>
    );
};

export default MyPosts;