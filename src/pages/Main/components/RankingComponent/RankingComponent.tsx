import { IcChevronrRight } from "@assets/icons";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./RankingComponent.styled";
import "./swiperStyles.css";

import { RANKING_RESPONSE } from "@constants/rankingCarousel";

const RankingComponent = () => {
  const [selectedTab, setSelectedTab] = useState("concert");

  const handleClickTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const formatDate = (date: string): string => {
    //시작 날짜를 3부분으로 분할
    const yearStart = date.slice(0, 4);
    const monthStart = date.slice(4, 6);
    const dayStart = date.slice(6, 8);
    //마감 날짜를 3부분으로 분할
    const yearEnd = date.slice(8, 12);
    const monthEnd = date.slice(12, 14);
    const dayEnd = date.slice(14, 16);

    const formattedDate = `${yearStart}.${monthStart}.${dayStart} ~ ${yearEnd}.${monthEnd}.${dayEnd}`;

    return formattedDate;
  };

  useEffect(() => {
    //추후 이 부분에서 필터링 진행할 예정
    //아마, prop을 context로 넘겨주어 사용할 예정 (주석은 API 적용 후 삭제하겠습니다.)
  }, [selectedTab]);

  return (
    <S.RankingWrapper>
      <S.RankingHeader>실시간 티켓랭킹</S.RankingHeader>
      <S.ContentWrapper>
        <S.ContentTab>
          <S.TabUnit
            $isSelected={selectedTab === "concert"}
            onClick={() => handleClickTab("concert")}
          >
            콘서트
          </S.TabUnit>
          <S.TabUnit
            $isSelected={selectedTab === "musical"}
            onClick={() => handleClickTab("musical")}
          >
            뮤지컬/연극
          </S.TabUnit>
          <S.TabUnit>클래식/무용</S.TabUnit>
          <S.TabUnit>전시/행사</S.TabUnit>
        </S.ContentTab>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2.3}
          centeredSlides={false}
          loop={false}
          slidesOffsetAfter={-150}
          className={"rankingSwiper"}
        >
          {RANKING_RESPONSE.data.map(
            (item) =>
              selectedTab === item.genre && (
                <SwiperSlide key={item.id}>
                  <S.SwiperCard>
                    <S.SwiperCardImg imgsrc={item.image}>
                      <S.SwiperCardImgGradation>{item.ranking}</S.SwiperCardImgGradation>
                    </S.SwiperCardImg>
                    <S.SwiperCardContents>
                      <S.SwiperCardTitle>{item.title}</S.SwiperCardTitle>
                      <S.SwiperCardInfo>
                        <div>{formatDate(item.period)}</div>
                        <div>{item.place}</div>
                      </S.SwiperCardInfo>
                    </S.SwiperCardContents>
                  </S.SwiperCard>
                </SwiperSlide>
              )
          )}
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </S.ContentWrapper>
      <S.BottomButton>
        랭킹 더보기
        <IcChevronrRight />
      </S.BottomButton>
    </S.RankingWrapper>
  );
};

export default RankingComponent;
