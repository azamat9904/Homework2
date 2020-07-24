import React from 'react';

type Props = {
    src:string,
    className:string
}
const Avatar: React.FunctionComponent<Props> = ({src,className})=>{
    return (
        <img src={src} alt="image" className={className}/>
    )
};
export default Avatar;
