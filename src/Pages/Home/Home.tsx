import React, {useState} from 'react';
import s from './Home.module.scss';
import Button from '../../Components/Button/Button';
import Avatar from '../../Components/Avatar/Avatar';
import {CSSTransition} from 'react-transition-group';

const Home: React.FunctionComponent = () => {
    const avatarImage:string = './avatar.jpeg';
    const name:string = 'Changed name';
    const animationClassConfig = {
        enter: s.Home__enter,
        enterActive: s.Home__enterActive,
        exit: s.Home__exit,
        exitActive: s.Home__exitActive
    };
    const [showAvatar, setShowAvatar] = useState<boolean>(false);
    const [text,setText] = useState<string>('avatar');
    const avatarHandler = ()=>{
        setShowAvatar(true);
    };
    const changeNameHandler = ()=>{
        setText('Name Changed');
    };
    return (
        <div className={s.Home}>
            <CSSTransition in={showAvatar} mountOnEnter={true} classNames={animationClassConfig} timeout={800}>
                <div className={s.Home__content}>
                    <Avatar src={avatarImage} className={s.Home__avatar}/>
                    <h3>{text}</h3>
                </div>
            </CSSTransition>
            <div className={s.Home__wrapper}>
                <Button className={s.Home__btn} actionHandler={avatarHandler} text={'Log in'}/>
                <Button className={s.Home__btn + ' ' + s.Home__btnMarginLeft} actionHandler={changeNameHandler} text={name}/>
            </div>
        </div>
    );
};
export default Home;
