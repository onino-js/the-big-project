import classNames from "classnames/bind";
import styles from "./AudioSpectrum.module.scss";
const cx=classNames.bind(styles);

export const AudioSpectrum = () => {
    return <div className={cx("audio-specrtum")}>
        AUDIO spectrum
    </div>
}