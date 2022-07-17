import styles from "./flag-bullet.module.scss";
import classnames from "classnames/bind";
import flagEn from "./../../assets/images/flags/flag-gb.png";
import flagSp from "./../../assets/images/flags/flag-sp.png";
import flagFr from "./../../assets/images/flags/flag-fr.png";

const cx = classnames.bind(styles);

interface IFlagBulletProps {
  lngs: {
    fr: boolean;
    en: boolean;
    sp: boolean;
  };
  onClick: (e: string) => void;
}

const FlagBullet: React.FC<IFlagBulletProps> = ({ lngs, onClick }) => (
  <div className={cx("flag-bullet")}>
    <img
      src={flagEn}
      alt="en flag"
      className={cx("flag", { active: lngs.en })}
      onClick={() => onClick("en")}
    />
    <img
      src={flagSp}
      alt="sp flag"
      className={cx("flag", { active: lngs.sp })}
      onClick={() => onClick("sp")}
    />
    <img
      src={flagFr}
      alt="fr flag"
      className={cx("flag", { active: lngs.fr })}
      onClick={() => onClick("fr")}
    />
  </div>
);

export default FlagBullet;
