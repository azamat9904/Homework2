import React from 'react';

type Props = {
    text:string,
    className:string,
    actionHandler:()=>void
}

const Button:React.FunctionComponent<Props> = ({text,className,actionHandler})=> {
    return (
        <button onClick={actionHandler} className={className}>{text}</button>
    )
};
export default Button;
