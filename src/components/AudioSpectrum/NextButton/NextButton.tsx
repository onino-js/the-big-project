import classNames from 'classnames/bind'
import styles from './NextButton.module.scss'
import { NextIcon } from './NextIcon'
const cx = classNames.bind(styles)

export const NextButton = (props: any) => (
  <button
    className={cx('next-button', {
      left: props.left,
      disabled: props.disabled,
    })}
    {...props}
  >
    <NextIcon />
  </button>
)
