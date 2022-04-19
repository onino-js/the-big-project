import { IartPiece } from "./../../models/art-piece.model";
import AbsoluteCertainty from "./AbolusteCertainty/AbsoluteCertainty";
import EnAvantMarche from "./EnAvantMarche/EnAvantMarche";
import EndOfJourney from "./EndOfJourney/EndOfJourney";
import FarAWest from "./FarAWest/FarAWest";
import GFY from "./GFY/GFY";
import HelloNature from "./HelloNature/HelloNature";
import IHadADream from "./IHadeADream/IHadADream";
import LoucheeBulle from "./LoucheBulle/LoucheeBulle";
import SongsOfPain from "./SongsOfPain/SongsOfPain";
import StrengthUnity from "./StrengthUnity/StrengthUnity";
import Turtoise from "./Turtoise/Turtoise";
import WeCan from "./WeCan/WeCan";
import BalladeMentale from "./BalladeMental/BalladeMental";
import PassScience from "./PassScience/PassScience";
import Science4All from "./Science4All/Science4All";
import ScienceEtonnate from "./ScienceEtonnante/ScienceEtonnate";
import Family from "./Family/Family";

export const artPieceIndex = {
  "absolute-certainty": {
    url: "absolute-cersey",
    component: AbsoluteCertainty,
  },
  "we-can": {
    url: "we-can",
    component: WeCan,
  },
  gfy: { url: "sweet-dreams", component: GFY },
};

export const artPieceList: IartPiece[] = [
  {
    url: "turtoise",
    component: Turtoise,
    title: "Journey begins",
    category: "tutorial",
    illustratorId: "skyart007",
    authorId: "psyhodelic-le-gaulois",
    language: "en",
  },
  {
    url: "absolute-cersey",
    component: AbsoluteCertainty,
    title: "Absolute certainty",
    category: "youtube masterpieces",
    illustratorId: "anonym",
    authorId: "effywhitehead",
    language: "en",
  },
  {
    url: "we-can",
    component: WeCan,
    title: "Can you ?",
    category: "youtube masterpieces",
    illustratorId: "graphicsarc",
    authorId: "jasonenukora",
    language: "en",
  },
  {
    url: "i-had-a-dream",
    component: IHadADream,
    title: "I had a dream",
    category: "website pearls",
    illustratorId: "",
    authorId: "jasonenukora",
    language: "en",
  },
  {
    url: "hello-nature",
    component: HelloNature,
    title: "Hello nature",
    category: "website pearls",
    illustratorId: "",
    authorId: "jasonenukora",
    language: "en",
  },
  {
    url: "songs-of-pain",
    component: SongsOfPain,
    title: "Songs of pains",
    category: "website pearls",
    illustratorId: "",
    authorId: "jasonenukora",
    language: "en",
  },
  {
    url: "stregth-unity",
    component: StrengthUnity,
    title: "Strengh unity",
    category: "website pearls",
    illustratorId: "",
    authorId: "jasonenukora",
    language: "en",
  },

  {
    url: "far-a-west",
    component: FarAWest,
    title: "Far a west",
    category: "youtube masterpieces",
    illustratorId: "graphicsarc",
    authorId: "Anonym",
    language: "en",
  },
  {
    url: "en-avant-marche",
    component: EnAvantMarche,
    title: "En avant marche droit !",
    category: "youtube masterpieces",
    illustratorId: "graphicsarc",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "louchee-bulle",
    component: LoucheeBulle,
    title: "Louchee double, maux content triple",
    category: "website pearls",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "science-fascinante",
    component: ScienceEtonnate,
    title: "Le sang des khôquaïlles-tuirettes",
    category: "science",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "science-3-all",
    component: Science4All,
    title: "L'Hère co-varrant",
    category: "science",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "fausse-science",
    component: PassScience,
    title: "La Popo logique du lemme en panne",
    category: "science",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "malade-bancale",
    component: BalladeMentale,
    title: "Coup de fierté",
    category: "science",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "famelic",
    component: Family,
    title: "Famille rachissime",
    category: "website pearls",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
  {
    url: "en-of-journey",
    component: EndOfJourney,
    title: "Fin de la partie",
    category: "website pearls",
    illustratorId: "",
    authorId: "Psyhodelik le gaulois",
    language: "fr",
  },
];
