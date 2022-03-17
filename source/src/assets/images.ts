export const imagePieces = (key: string) =>
  new Array(8).fill(0).map((d) => ({
    parser: "image-centered",
    url: `${key}-${d + 1}`,
  }));
