import styles from "./piece.module.scss";
import classnames from "classnames/bind";
// import Footer from "../../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import { artPieceList } from "../../components/art-pieces/art-piece-index";
import { ART_PIECE_PARAM } from "../../constants/site.constants";
import GFY from "../../components/art-pieces/GFY/GFY";
// import TSPasta from "../../scripts/ts-pasta";
// import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

export const Piece: React.FC = () => {
  const [searchParams] = useSearchParams();
  const ArtPiece = artPieceList.find(
    (ap) => ap.url === searchParams.get(ART_PIECE_PARAM)
  );
  let ArtPieceComponent = ArtPiece ? ArtPiece.component : GFY;

  // const onFooterClick = () => {
  //   const randomArtPiece = TSPasta.sample(artPieceList);
  //   setSearchParams({ [ART_PIECE_PARAM]: randomArtPiece.url });
  // };
  return (
    <>
      <div className={cx("piece")}>
        <ArtPieceComponent />
        <br />
        {/* <NavLink to="/inventory"></NavLink> */}
        {/* <p>Or shuffle poetry by clicking below:</p> */}
      </div>
      {/* <Footer onClick={onFooterClick} /> */}
    </>
  );
};
