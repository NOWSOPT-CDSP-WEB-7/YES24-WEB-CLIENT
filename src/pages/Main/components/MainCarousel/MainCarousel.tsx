//img src로 하면 인식을 못하는 경우가 있어서 다음과 같이 이용

import { MAIN_RESPONSE } from "@constants/mainCarousel";

//import Swiper from "swiper";
//import "swiper/css";

//import Swiper from "swiper/bundle";
//import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyles.css";
import { IcOnlyBox } from "@assets/icons";
import * as S from "./MainCarousel.styled";

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
        slidesPerView={1.04}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 300000, disableOnInteraction: false }}
      >
        {MAIN_RESPONSE.data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <S.SwiperCard imgsrc={item.image}>
              <S.GradationBox>
                <S.ContentBox>
                  <S.TextBox>
                    <S.TitleAndSubTitle>
                      <S.Title>
                        <IcOnlyBox />
                        <div>{item.title}</div>
                      </S.Title>
                      <S.SubTitle>
                        <div>{item.subTitle}</div>
                      </S.SubTitle>
                    </S.TitleAndSubTitle>
                    <S.PeriodAndPlace>{formatDatePlace(item.period, item.place)}</S.PeriodAndPlace>
                  </S.TextBox>
                  <S.Indicator>
                    <S.NowId>
                      {index + 1}
                      <S.AllId>/12</S.AllId>
                    </S.NowId>
                  </S.Indicator>
                </S.ContentBox>
              </S.GradationBox>
            </S.SwiperCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainCarousel;
