//img src로 하면 인식을 못하는 경우가 있어서 다음과 같이 이용

import no2 from "@assets/mainCarouselImgs/등등곡.png";
import no6 from "@assets/mainCarouselImgs/paganini.png";
import { MAIN_RESPONSE } from "@constants/mainCarousel";

//import Swiper from "swiper";
//import "swiper/css";

//import Swiper from "swiper/bundle";
//import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import "./swiperStyles.css";

const MainCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1.05}
        centeredSlides={false}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 1000000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide Change")}
      >
        <SwiperSlide>
          <Sdiv imgsrc={MAIN_RESPONSE.data[0].image}>
            <InnerDiv>
              <ContentsBox>
                <div>단독</div>
                <div>{MAIN_RESPONSE.data[0].title}</div>
                <div>{MAIN_RESPONSE.data[0].subTitle}</div>
                <div>{MAIN_RESPONSE.data[0].period}</div>
              </ContentsBox>
            </InnerDiv>
          </Sdiv>
        </SwiperSlide>
        <SwiperSlide>
          <Sdiv imgsrc={MAIN_RESPONSE.data[1].image}></Sdiv>
        </SwiperSlide>
        <SwiperSlide>
          <Sdiv imgsrc={MAIN_RESPONSE.data[2].image}></Sdiv>
        </SwiperSlide>
        <SwiperSlide>
          <Sdiv imgsrc={MAIN_RESPONSE.data[3].image}></Sdiv>
        </SwiperSlide>
        <SwiperSlide>
          <Sdiv imgsrc={MAIN_RESPONSE.data[4].image}></Sdiv>
        </SwiperSlide>
        <SwiperSlide>
          <Sdiv imgsrc={MAIN_RESPONSE.data[5].image}></Sdiv>
        </SwiperSlide>
      </Swiper>
      테스트~ 왜 안돼
    </>
  );
};

const Sdiv = styled.div`
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

const InnerDiv = styled.div`
  display: flex;
  width: 34rem;
  padding: 2rem;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;
export default MainCarousel;
