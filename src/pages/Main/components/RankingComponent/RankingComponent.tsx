import { fetchRank } from "@apis/Main/fetchRank";
import { IcChevronrRight } from "@assets/icons";
import { formatData } from "@utils/formatData";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./RankingComponent.styled";
import "./swiperStyles.css";

const RankingComponent = () => {
  interface RankResponseObjPropTypes {
    id: number;
    title: string;
    period: string;
    place: string;
    genre: string;
    image: string;
  }

  type RankResponsePropTypes = RankResponseObjPropTypes[];
  const [rankResponse, setRankResponse] = useState<RankResponsePropTypes>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRank();
      //같은 data에 대해 서로 다른 정보들을 서버에서 담아주어, 배열 형태로 와서 추가해준 코드
      /*const flatedData = [];
      data.map*/
      setRankResponse(data);
      console.log(data);
    };
    getData();
  }, []);

  const [selectedTab, setSelectedTab] = useState("concert");

  const handleClickTab = (tab: string) => {
    setSelectedTab(tab);
  };

  //useFormatData 사용해야함

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
          {rankResponse.map(
            (item: RankResponseObjPropTypes) =>
              selectedTab === item.genre && (
                <SwiperSlide key={item.id}>
                  <S.SwiperCard>
                    <S.SwiperCardImg imgsrc={item.image}>
                      <S.SwiperCardImgGradation>{item.id}</S.SwiperCardImgGradation>
                    </S.SwiperCardImg>
                    <S.SwiperCardContents>
                      <S.SwiperCardTitle>{item.title}</S.SwiperCardTitle>
                      <S.SwiperCardInfo>
                        <div>{formatData(item.period)}</div>
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
