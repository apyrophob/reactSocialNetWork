import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { createRef } from 'react';

const MyPosts = (props) => {
    const postsElement = props.posts
        .map(p => <Post message={p.message} id={p.id} post={p.posts} />);
    
    const newPostElement = React.createRef();
    
        const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
                <button onClick={ addPost }>post</button>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;