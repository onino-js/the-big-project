import styles from "./far-a-west.module.scss";
import classnames from "classnames/bind";
import shyriu from "./../../../assets/images/shyriu-2.jpg";

const cx = classnames.bind(styles);

const FarAWest = () => {
  return (
    <div className={cx("far-a-west")}>
      <img src={shyriu} alt="saint seiya illustration from graphicsarc" />
      <h3>Far a west</h3>
      You came far from england to enslave my brothers <br />
      You need unique hand to be less oblivion <br />
      The bravest of all knights only fight for others <br />
      You'll never get lights staring at your dungeon <br />
      You have a nice sword might I have a hammer <br />
      You can break my body not my resolution <br />
      Volitional sacrifice dignified manners <br />
      I'll take you by back with my mighty dragon <br />
      You got to the bottom when I raised the banners <br />
      You'll have little time may you find the pardon <br />
      <br />
      ***
      <br />
    </div>
  );
};

export default FarAWest;
