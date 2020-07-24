import React, {useState} from 'react';
import s from './Home.module.scss';
import Button from '../../Components/Button/Button';
import Avatar from '../../Components/Avatar/Avatar';
import {CSSTransition} from 'react-transition-group';

const Home: React.FunctionComponent = () => {

    const [showAvatar, setShowAvatar] = useState<boolean>(false);
    const [text,setText] = useState<string>('avatar');
    const avatarImage:string = './avatar.jpeg';

    return (
        <div className={s.Home}>
            <CSSTransition in={showAvatar} mountOnEnter={true} classNames={
                {
                    enter: s.Home__enter,
                    enterActive: s.Home__enterActive,
                    exit: s.Home__exit,
                    exitActive: s.Home__exitActive
                }
            }
                           timeout={800}>
                <div className={s.Home__content}>
                    <Avatar src={avatarImage} className={s.Home__avatar}/>
                    <h3>{text}</h3>
                </div>
            </CSSTransition>
            <div className={s.Home__wrapper}>
                <Button className={s.Home__btn} actionHandler={() => setShowAvatar(true)} text={'Log in'}/>
                <Button className={s.Home__btn + ' ' + s.Home__btnMarginLeft} actionHandler={() => setText('Name Changed')}
                        text={'Change name'}/>
            </div>
        </div>
    );
};
export default Home;
