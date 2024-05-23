import { fetchMain } from "@apis/Main/fetchMain";

import { IcOnlyBox } from "@assets/icons";
import { formatData } from "@utils/formatData";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./MainCarousel.styled";
import "./swiperStyles.css";
const MainCarousel = () => {
  const [loading, setLoading] = useState(true);
  interface MainResponsObjPropTypes {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    period: string;
    place: string;
  }

  type MainResponsePropTypes = MainResponsObjPropTypes[];
  const [mainResponse, setMainResponse] = useState<MainResponsePropTypes>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMain();
      setMainResponse(data);
      setLoading(false);
    };

    getData();
  }, []);
  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1.04}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className={"mainSwiper"}
        >
          {mainResponse.map((item: MainResponsObjPropTypes, index: number) => (
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
      )}
    </>
  );
};

export default MainCarousel;
