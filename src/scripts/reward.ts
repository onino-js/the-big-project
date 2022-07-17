const txts = new Array(2).fill(0).map((n, i) => `poople (${i + 1}).txt`);
const mp3s = [
  "4 ATHENA VICTORY IBIS.mp3",
  "4 ATHENA VICTORY.mp3",
  "6 CHALLENGE GODE.mp3",
  "10 DBZ SSJ2 ONE.mp3",
  "poople 5.mp3",
  "poople 18.mp3",
  "poople 19.mp3",
  "bonus 1.mp3",
  "DLMBM",
  "BBDR",
];
const pngs = new Array(20).fill(0).map((n, i) => `poople (${i + 1}).png`);
const jpgs = new Array(9).fill(0).map((n, i) => `poople (${i + 1}).jpg`);
const jpegs = new Array(2).fill(0).map((n, i) => `poople (${i + 1}).jpeg`);
const gift = new Array(1).fill(0).map((n, i) => `poople (1).gif`);

var pooples = gift
  .concat(jpegs)
  .concat(jpgs)
  .concat(pngs)
  .concat(mp3s)
  .concat(txts);

export const getPoople = () => {
  const toopile = pooples[Math.floor(Math.random() * pooples.length)];
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = `pooples/${toopile}`;
  a.target = "_Blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
