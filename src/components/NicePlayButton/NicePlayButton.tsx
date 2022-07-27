import classNames from 'classnames/bind'
import styles from './NicePlayButton.module.scss'
const cx = classNames.bind(styles)

export const NicePlayButton = (props: any) => (
  <button className={cx('nice-play-button')} {...props}>
    <svg
      id="play-btn-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <path
        fill="#fff"
        d="M79.646 43.955c4.627 2.702 4.627 9.388 0 12.09L33.779 82.824c-4.666 2.724-10.529-.642-10.529-6.045V23.22c0-5.403 5.863-8.77 10.53-6.045l45.866 26.779Z"
      ></path>
    </svg>
  </button>
)
