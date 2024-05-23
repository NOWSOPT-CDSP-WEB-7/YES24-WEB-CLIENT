import * as S from "./ShowPoster.styled";
import image from "/src/assets/images/poster.png";
import banner from "/src/assets/images/banner2.png";

const ShowPoster = () => {
  return (
    <>
      <S.PosterWrapper>
        <S.Poster src={image} />
      </S.PosterWrapper>
      <S.Banner src={banner} />
    </>
  );
};

export default ShowPoster;
