import styles from './Player.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface Props {
    play: ()=>void;
    stop: ()=>void;
    pause: ()=>void;
    next: ()=>void;
    previous: ()=>void;
}

export const Player: React.FC<Props> = ({play, stop, pause, next, previous}) => {
    return  <div className={cx("player")}>
    <img src="shaka.jpg" alt="shakka"></img>
    <button onClick={previous}>PREVIOUS</button>
    <button onClick={play}>START</button>
    <button onClick={stop}>PAUSE</button>
    <button onClick={stop}>STOP</button>
    <button onClick={next}>NEXT</button>
  </div>
}