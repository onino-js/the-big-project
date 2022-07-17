import { Iindividual } from "./individual.model";

type singlePieceType = "poem" | "music" | "video" | "image" | "hyperlink";
type IsingleParserList =
  | "image-centered"
  | "text-centerd"
  | "nested-text-centered"
  | "music"
  | "hyperlink";
type IparserList = IsingleParserList;

export interface IsinglePiece {
  pieceType: singlePieceType;
  authors: Iindividual[];
  parser: IparserList;
  data: any;
}
