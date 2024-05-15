//img src로 하면 인식을 못하는 경우가 있어서 다음과 같이 이용

import no2 from "@assets/mainCarouselImgs/등등곡.png";
import no6 from "@assets/mainCarouselImgs/paganini.png";
import { MAIN_RESPONSE } from "@constants/mainCarousel";

//import Swiper from "swiper";
//import "swiper/css";

//import Swiper from "swiper/bundle";
//import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import "./swiperStyles.css";

const MainCarousel = () => {
  const formatDatePlace = (date: string, place: string): string => {
    //시작 날짜를 3부분으로 분할
    const yearStart = date.slice(0, 4);
    const monthStart = date.slice(4, 6);
    const dayStart = date.slice(6, 8);
    //마감 날짜를 3부분으로 분할
    const yearEnd = date.slice(8, 12);
    const monthEnd = date.slice(12, 14);
    const dayEnd = date.slice(14, 16);

    let formattedDate;
    if (yearStart === yearEnd) {
      formattedDate = `${yearStart}.${monthStart}.${dayStart} ~ ${monthEnd}.${dayEnd}`;
    } else {
      formattedDate = `${yearStart}.${monthStart}.${dayStart} ~ ${yearEnd}.${monthEnd}.${dayEnd}`;
    }
    const resultDate = `${formattedDate}, ${place}`;
    return resultDate;
  };

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1.05}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 1000000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide Change")}
      >
        <SwiperSlide>
          <SwiperCard imgsrc={MAIN_RESPONSE.data[0].image}>
            <ContentBox>
              <TextBox>
                <TitleAndSubTitle>
                  <Title>
                    <Only>단독</Only>
                    <div>{MAIN_RESPONSE.data[0].title}</div>
                  </Title>
                  <SubTitle>
                    <div>{MAIN_RESPONSE.data[0].subTitle}</div>
                  </SubTitle>
                </TitleAndSubTitle>

                <PeriodAndPlace>
                  {formatDatePlace(MAIN_RESPONSE.data[0].period, MAIN_RESPONSE.data[0].place)}
                </PeriodAndPlace>
              </TextBox>
              <Indicator>
                <NowId>
                  1<AllId>/12</AllId>
                </NowId>
              </Indicator>
            </ContentBox>
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgsrc={MAIN_RESPONSE.data[1].image}></SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgsrc={MAIN_RESPONSE.data[2].image}></SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgsrc={MAIN_RESPONSE.data[3].image}></SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgsrc={MAIN_RESPONSE.data[4].image}></SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgsrc={MAIN_RESPONSE.data[5].image}></SwiperCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const SwiperCard = styled.div<{ imgsrc: string }>`
  background-color: green;
  width: 34rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  border-radius: 0.5rem;
  border: 2px solid red;
  background-image: url(${(props) => props.imgsrc});
`;

const ContentBox = styled.div`
  display: flex;
  width: 34rem;
  padding: 2rem;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const TitleAndSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const Title = styled.div`
  display: flex;
  width: 30rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  color: var(--UI-UI_background, #fff);
  ${({ theme }) => theme.fonts.title_26pt_Bold};
`;

const Only = styled.div`
  display: flex;
  padding: 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border-radius: 0.3rem;
  border: 0.05rem solid var(--UI-UI_background, #fff);

  color: var(--UI-UI_background, #fff);
  ${({ theme }) => theme.fonts.sub_11pt};
`;

const SubTitle = styled.span`
  display: flex; //text가 아니라 div로 주었으므로 불가피하게 설정
  justify-content: flex-start;

  width: 30.5rem;
  color: var(--UI-UI_background, #fff);

  ${({ theme }) => theme.fonts.title_14pt_Bold};
`;

const PeriodAndPlace = styled.span`
  color: var(--UI-UI_background, #fff);
  ${({ theme }) => theme.fonts.sub_14pt};
`;

const Indicator = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  align-items: flex-start;
  gap: 0.1rem;
  border-radius: 2rem;
  background: var(--black_gra, rgba(0, 0, 0, 0.4));
`;

const NowId = styled.span`
  color: var(--UI-UI_background, #fff);
  ${({ theme }) => theme.fonts.sub_14pt};
`;

const AllId = styled.span`
  opacity: 0.4;
`;

export default MainCarousel;
