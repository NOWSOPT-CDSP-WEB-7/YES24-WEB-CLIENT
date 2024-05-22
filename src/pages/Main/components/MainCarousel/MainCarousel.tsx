import { MAIN_RESPONSE } from "@constants/mainCarousel";

import { IcOnlyBox } from "@assets/icons";
import { formatData } from "@utils/formatData";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./MainCarousel.styled";
import "./swiperStyles.css";
const MainCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1.04}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={"mainSwiper"}
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
                    <S.PeriodAndPlace>{formatData(item.period, item.place)}</S.PeriodAndPlace>
                  </S.TextBox>
                  <S.Indicator>
                    <S.CurrentIndex>
                      {index + 1}
                      <S.TotalIndex>/12</S.TotalIndex>
                    </S.CurrentIndex>
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
