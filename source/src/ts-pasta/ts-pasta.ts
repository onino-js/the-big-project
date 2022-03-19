import { IrandomSite } from "./../models/random-site.model";
import { randomSites } from "./../assets/random-sites";

interface ITSPastaProps {
  welcomeElementId: string;
}

export class TSPasta {
  public randomSites: IrandomSite[] = [];
  public welcomeElementId: string = "";
  constructor({ welcomeElementId }: ITSPastaProps) {
    randomSites.shift(); // Remove first item (message for "hackers")
    this.randomSites = randomSites;
    this.welcomeElementId = welcomeElementId;
  }

  public onHeaderClick = () => {
    document.getElementById(this.welcomeElementId)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  public onFooterClick = () => {
    let item =
      this.randomSites[Math.floor(Math.random() * (randomSites.length - 1))];
    if (window.confirm(item.message)) {
      window.location.replace(item.url);
    } else {
      window.location.replace(item.uri);
    }
  };
}

export default TSPasta;
