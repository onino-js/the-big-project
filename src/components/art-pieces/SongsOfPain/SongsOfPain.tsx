import styles from "./songs-of-pain.module.scss";
import classnames from "classnames/bind";
import eagleOwl from "./../../../assets/images/eagle_owl.jpg";

const cx = classnames.bind(styles);

const SongsOfPain = () => {
  return (
    <div className={cx("songs-of-pain")}>
      <img src={eagleOwl} alt="eagle owl illustration from Skyart 007" />
      <h3>Songs of pain</h3>
      Kehinde ti ku!! <br />
      The green-eyed owl laughs aloud. <br />
      Hanging steadily from the great Iroko tree, <br />
      It watches all through the night, <br />
      <br />
      The skies pour out tears of grief. <br />
      For the green-eyed owl has not moved an inch. <br />
      Papa's head; wrapped between his arms. <br />
      Oblivious of the great distress resting beneath the mango tree. <br />
      <br />
      Ah! Taiwo ti ku oooo!! <br />
      Taiwo ti ku!!! <br />
      The green-eyed owl has not moved an inch. <br />
      All the birds have fled from Iya Ibeji's screams. <br />
      Even dry bones underneath have their hands on their ears. <br />
      <br />
      Papa's thoughts trails back to seven years ago <br />
      When the deal was struck, and judgment passed. <br />
      Ah! Baba Alaka has long passed away. <br />
      Esu has finally come to fulfill the bargain. <br />
      For he always takes more than he gives. <br />
      <br />
      Ah! Taye ti ku ooo!! <br />
      Taye ti ku!!! <br />
      Rivers of blood are running still. <br />
      Papa's hysteric laughter has gotten out of hand <br />
      For he has begun an eternal conversation with spirits yet unknown. <br />
      <br />
      Ah! Sing it across the length and breath of Egba, <br />
      Ah! Let the town crier's voice be heard oo. <br />
      Ah! Esu has taken more than he gave oo. <br />
      The seed of impatience never grows ripe. <br />
      <br />
      Ha! Eledumare stares at the vanity of man. <br />
      Even the birds sing of the vanity of man. <br />
      Ha! I hear great songs of pain. <br />
      If only all could trust in Olodumare's word. <br />
      For him alone gives life for all to live. <br />
      <br />
      ***
      <br />
    </div>
  );
};

export default SongsOfPain;
