import styles from './Player.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface Props {
  waveId: string
  play: () => void
  stop: () => void
  pause: () => void
  next?: () => void
  previous?: () => void
}

export const Player: React.FC<Props> = ({
  waveId,
  play,
  stop,
  pause,
  next,
  previous,
}) => {
  return (
    <div className={cx('player')}>
      <button onClick={previous}>PREVIOUS</button>
      <button onClick={play}>play</button>
      <button onClick={pause}>PAUSE</button>
      <button onClick={stop}>STOP</button>
      <button onClick={next}>NEXT</button>
    </div>
  )
}
