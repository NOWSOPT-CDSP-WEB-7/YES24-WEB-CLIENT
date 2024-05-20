import * as S from "./ShowPoster.styled";

const ShowPoster = () => {
  return (
    <S.PosterWrapper>
      <S.Poster src={"/src/assets/images/poster.png"} />
    </S.PosterWrapper>
  );
};

export default ShowPoster;
