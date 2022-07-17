import styles from "./gallery.module.scss";
import classnames from "classnames/bind";
// import Footer from "../../components/Footer/Footer";
// import { useSearchParams } from "react-router-dom";
// import { artPieceList } from "../../components/art-pieces/art-piece-index";
// import { ART_PIECE_PARAM } from "../../constants/site.constants";
// import GFY from "../../components/art-pieces/GFY/GFY";
import { imageList } from "../../assets/images/image-list";
// import TSPasta from "../../scripts/ts-pasta";
// import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

export const Gallery: React.FC = () => {
  //   const [searchParams] = useSearchParams();
  //   const ArtPiece = artPieceList.find(
  //     (ap) => ap.url === searchParams.get(ART_PIECE_PARAM)
  //   );
  //   let ArtPieceComponent = ArtPiece ? ArtPiece.component : GFY;

  // const onFooterClick = () => {
  //   const randomArtPiece = TSPasta.sample(artPieceList);
  //   setSearchParams({ [ART_PIECE_PARAM]: randomArtPiece.url });
  // };
  const swipe = (url: string) => {
    window.open(
      url,
      "Image",
      "width=largeImage.stylewidth,height=largeImage.style.height,resizable=1"
    );
  };
  return (
    <>
      <div className={cx("gallery")}>
        <h1>Gallery</h1>
        <div className={cx("list")}>
          {imageList.map((d, i) => (
            <img
              key={`ìmg-${i}`}
              src={d.url}
              onClick={() => swipe(d.url)}
              alt={d.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
