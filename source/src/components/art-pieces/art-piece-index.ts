import { IartPiece } from "./../../models/art-piece.model";
import AbsoluteCertainty from "./AbolusteCertainty/AbsoluteCertainty";
import GFY from "./GFY/GFY";
import Turtoise from "./Turtoise/Turtoise";
import WeCan from "./WeCan/WeCan";

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
    title: "Once upon a turtoise",
    category: "tutorial",
    illustratorId: "skyart007",
    authorId: "psyhodelic-le-gaulois",
    language: "fr",
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
    illustratorId: "graphicsart",
    authorId: "jason-ukorana",
    language: "en",
  },
];
