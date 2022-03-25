import styles from "./end-of-journey.module.scss";
import classnames from "classnames/bind";
import { useLayoutEffect } from "react";

const cx = classnames.bind(styles);

const EndOfJourney = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  return (
    <div className={cx("end-of-journey")}>
      <h3>Le soldat inconnu</h3>
      <br />
      La vérité n'a aucune importance
      <br />
      La temps n'a qu'une unique portance
      <br />
      Le choix est une illusion sans répis
      <br />
      L'imagination est le seul infini
      <br />
      L'unique matière qu'Un porte, l'amour que l'on échange
      <br />
      L'unique manière qu'ouvre les portes, l'humour que Lui partage
      <br />
      L'unique Un prévisible qui dérange, la turbulence des rapides
      <br />
      L'unique Un capable de l'esprit, le sens de ressentir le vide
      <br />
      La vie est Un écoulement sans fin qui en un sens se rejouit
      <br />
      Mais ne peut être Un versé que par les troublions
      <br />
      Pour un court insistant c'est certes Un
      <br />
      Un fini pour qui les certitudes n'arrangent rien
      <br />
      Ne sachant point qui je suis, j'ai le choix de ce que je fais
      <br />
      Le vice versa c'est malin, j'ai beau être un con pris
      <br />
      Je le vis, je le sens et je cherche à jamais à quel point.
      <br />
      <br />
    </div>
  );
};

export default EndOfJourney;
