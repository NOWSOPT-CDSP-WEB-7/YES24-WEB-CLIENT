import * as S from "./ShowPoster.styled";
import image from "/src/assets/images/poster.png";

const ShowPoster = () => {
  return (
    <S.PosterWrapper>
      <S.Poster src={image} />
    </S.PosterWrapper>
  );
};

export default ShowPoster;
