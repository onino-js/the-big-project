export type Ilanguage = "en" | "fr";

export interface IartPiece {
  url: string;
  component: () => JSX.Element;
  category: string;
  title: string;
  illustratorId: string;
  authorId: string;
  language: Ilanguage;
}
