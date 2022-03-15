import { IsinglePiece } from "../../models/single-piece.model";
import { individuals } from "../authors/author-list";
import { poemIntergalite } from "./poems/integralite";
import { poemTurtoise } from "./poems/turtoise";

export const pieces: IsinglePiece[] = [
  {
    pieceType: "poem",
    authors: [individuals[0]],
    parser: "nested-text-centered",
    data: poemIntergalite,
  },
  {
    pieceType: "poem",
    authors: [individuals[0]],
    parser: "nested-text-centered",
    data: poemTurtoise,
  },
];
