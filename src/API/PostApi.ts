import axios from 'axios';
import { postUrl} from "../Consts/Consts";
export const postApi = {
    getPosts:async ()=>{
        return await axios.get(postUrl).then(res=>res.data);
    },
    getPostDetail:async(id:string)=>{
        return await axios.get(postUrl + '/' + id).then(res=>res.data);
    }
};
