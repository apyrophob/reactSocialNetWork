import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let posts = [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: "I'm fine." },
        { id: 3, message: "I'm drinking coffee right now."  }
    ]

    let postsElement = posts
        .map( p => <Post massage={p.message} id={p.id} /> );

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