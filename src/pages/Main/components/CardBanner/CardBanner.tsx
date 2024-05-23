import { MAIN_BANNER } from "@constants/mainCardBanners";
import * as S from "./CardBanner.styled";

const CardBanner = () => {
  return (
    <S.CardListWrapper>
      {MAIN_BANNER.data.map((card) => (
        <S.CardWrapper key={card.id}>
          <S.CardImg src={card.image} />
          <S.CardTextBox>
            <S.CardTitle>
              <S.CardSmallTitle>{card.smallTitle}</S.CardSmallTitle>
              <S.CardBigTitle>{card.title}</S.CardBigTitle>
            </S.CardTitle>
            <S.CardSubTitle>
              <S.CardSubTitleLeft>
                <S.CardSubLeftSpan>{card.redPercent}</S.CardSubLeftSpan>
                {card.subTitle}
              </S.CardSubTitleLeft>
              <S.Line />
              <S.CardSubTitleRight>{card.rightText}</S.CardSubTitleRight>
            </S.CardSubTitle>
          </S.CardTextBox>
        </S.CardWrapper>
      ))}
    </S.CardListWrapper>
  );
};

export default CardBanner;
