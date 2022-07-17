export interface Iyoutube {
  id: string;
  status: IyoutubeStatus;
  pieces: [
    {
      id: string;
      force: number;
    }
  ];
}

export type IyoutubeStatus = "draft" | "private " | "public" | "unreferenced";
