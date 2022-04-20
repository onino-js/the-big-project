import styles from "./inventory.module.scss";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { artPieceList } from "../../components/art-pieces/art-piece-index";
import FlagBullet from "../../components/FlagBullet/FlagBullet";
import { useState } from "react";
// import Footer from "../../components/Footer/Footer";

const cx = classnames.bind(styles);

export const Inventory: React.FC = () => {
  const [lngs, setlngs] = useState({
    en: true,
    fr: false,
    sp: true,
  });
  const toggleActiveFlag = (d: string) => {
    //@ts-ignore
    setlngs({ ...lngs, [d]: !lngs[d] });
  };
  return (
    <section className={cx("inventory")}>
      <h1>Poetry</h1>
      <div>
        <FlagBullet lngs={lngs} onClick={toggleActiveFlag} />
      </div>
      <br />
      <div className={cx("list")}>
        <br />
        {/* <h3>Inventory</h3> */}
        {lngs.en && (
          <NavLink to={`/piece?truth=${artPieceList[0].url}`}>
            {artPieceList[0].title}
          </NavLink>
        )}
        <br />
        {artPieceList
          .filter((d, i) => i !== 0)
          .filter((d, i) => i !== artPieceList.length - 2)
          .filter((d) => lngs[d.language])
          .map((d, i) => (
            <NavLink to={`/piece?truth=${d.url}`}>{d.title}</NavLink>
          ))}
        <br />
        {lngs.fr && (
          <>
            <NavLink
              to={`/piece?truth=${artPieceList[artPieceList.length - 1].url}`}
            >
              {artPieceList[artPieceList.length - 1].title}
            </NavLink>
            <br />
            <div className={cx("french-only")}>
              <h3>French only !!</h3>
              <div>
                Voici un cours pratique sur la théorie du tout, en espérant que
                cela puisse vous guider dans vos priorités{" "}
                <a href="docs/ETPAF.pdf" target="_blank">
                  juste ici même.
                </a>
                :
              </div>
              <br />
              <div>
                Et l'examen qui va avec{" "}
                <a href="docs/EXAMEN.pdf" target="_blank">
                  par la bas.
                </a>
                :
              </div>
              <br />
              <div>
                Une première Encyclique{" "}
                <a href="docs/ENCYCLIQUE.pdf" target="_blank">
                  ci présente.
                </a>{" "}
                (libre à vous d'en écrire d'autres en ce qui concerne vous et
                votre entourage à toute ces échelles):
              </div>
              <br />
              <div>
                Et enfin pour les dingos,{" "}
                <a href="docs/ANNEXES.pdf" target="_blank">
                  les annexes de la théorie qui cadrent bien avec les lentilles
                  d'un canidé.
                </a>
              </div>
            </div>
          </>
        )}

        {/* {artPieceList
          .filter((d, i) => d.language === "fr")
          .map((d, i) => (
            <NavLink to={`/piece?truth=${d.url}`}>{d.title}</NavLink>
          ))} */}
        <br />
        {/* <NavLink to="/">Back home</NavLink> */}
        <div>
          <h1>Pooples for free just right here</h1>
          <p>Just click the opossum below</p>
          <p>Ca sert à rien mais c'est joulie :)</p>
        </div>
      </div>

      {/* <Footer /> */}
    </section>
  );
};
