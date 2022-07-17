import styles from "./en-avant-marche.module.scss";
import classnames from "classnames/bind";
import shyriu from "./../../../assets/images/shyriu.jpg";

const cx = classnames.bind(styles);

const EnAvantMarche = () => {
  return (
    <div className={cx("en-avant-marche")}>
      <img src={shyriu} alt="saint seiya illustration from graphicsarc" />
      <h3>En avant marche droit !</h3>
      Une terre si grande pas assez de chanceux <br />
      Où l’envie qui commande on y trouve des enjeux <br />
      Pour pour qui tu commandes l’amour c’est du sérieux <br />
      <br />
      Combat historique au final humble assemblée <br />
      Pour le mieux forgé la belle sera rigueur <br />
      Situation commode la scène est déblayée <br />
      L’arène est bien calme le sursaut va passer <br />
      <br />
      L’attente fut longue les deux sont en l’heure <br />
      Le combat est d’avant l’un est bien moins fourni <br />
      Deux héros de l’histoire qui vont se mettre à mort <br />
      Elancés de leur arme leur plus précieux trésor <br />
      <br />
      Le sursaut s'esclaffa en un éclair d’acier <br />
      Et ce qui arriva devait se repasser <br />
      Le faible esquinta son joli martinet <br />
      Son corps en lambeaux donnait peu de présage <br />
      Mais il se relevait pour la gloire de son âge <br />
      <br />
      Tel déséquilibre ne devrait se faire maître <br />
      Le fort souriant car il but la grosse tête <br />
      Après 12 coup envers le faible amoindri <br />
      C’est l’arme du fort qui finit par céder <br />
      Et trancha le bras de son présent traitre <br />
      Pour qui le égouts ne purent être comblés <br />
      <br />
      Sans son arme ni sont bras pour brutaliser sot <br />
      Le sort se fit fort d’évasion sous une autre lune <br />
      Quand au faible en l’an beau, de grâce.. <br />
      Athéna la déesse !!! Merci merci mille fois <br />
      Ou Dieu le père je ne sais pas toi <br />
      Qui que tu sois pour la première fois <br />
      Merci d’avoir fait de mon arme une massue <br />
      Plutôt qu’une lame tranchante et tordue <br />
      <br />
      <br />
    </div>
  );
};

export default EnAvantMarche;
