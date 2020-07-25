import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import {IPost} from "../../Interfaces/interfaces";
// @ts-ignore
import {postApi} from "../../API/PostApi";
import {RouteComponentProps} from 'react-router-dom';
import s from '../PostDetail/PostDetail.module.scss';
import Loading from '../../Components/Loading/Loading';

type Params = {
    id:string
};

const PostDetail = ({match}:RouteComponentProps<Params>)=>{
    const [postDetail,setPostDetail] = useState<IPost>({id:null,userId:null,title:null,body:null});

    useEffect(()=>{
        let id:string = match.params.id;
        postApi.getPostDetail(id).then(data =>setPostDetail(data));
    });

    return(
        postDetail.id === null ?<Loading />:
        <div className={s.postDetailWrapper}>
            <h3 className={s.postDetailHeading}>Post detail</h3>
            <div className={s.postDetail}>
                <h3 className={s.postDetailTitle}>{postDetail.title}</h3>
                <div className={s.postDetailContent}>{postDetail.body}</div>
            </div>
        </div>
    )
};
export default withRouter(PostDetail);
