import React, {useEffect, useState} from 'react';
import {IPost} from '../../Interfaces/interfaces';
import {postApi} from "../../API/PostApi";
import s from './Post.module.scss';
import {Link} from "react-router-dom";
import Button from "../../Components/Button/Button";

const Post:React.FunctionComponent = ()=>{
    const [posts,setPosts] = useState<Array<IPost>>([]);

    const removePost = (id:number)=>{
        let changedPost = posts.filter(post=>post.id !== id);
        setPosts(changedPost);
    };

    useEffect(()=>{
        postApi.getPosts().then(data=>setPosts(data));
    },[]);

    const postsTemplate = posts.map(post=>
        <div className={s.post} key = {post.id!}>
            <Button className={s.postClose} actionHandler={()=>removePost(post.id!)} text = {'x'}/>
            <h3 className={s.postTitle}><Link to = {'/posts/' + post.id}>{post.title}</Link></h3>
            <div className={s.postContent}>{post.body}</div>
        </div>
    );

    return (
        posts.length === 0 ? <div>Loading... </div> :
        <div className={s.postsWrapper}>
            {postsTemplate}
        </div>
    )
};
export default Post;
