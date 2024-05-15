//img src로 하면 인식을 못하는 경우가 있어서 다음과 같이 이용
import no1 from "./no1.png";
import no2 from "@assets/mainCarouselImgs/등등곡.png";
import no6 from "@assets/mainCarouselImgs/paganini.png";
import { MAIN_RESPONSE } from "@constants/mainCarousel";

const MainCarousel = () => {
  console.log(MAIN_RESPONSE.data);
  console.log(MAIN_RESPONSE.data[5].image);
  console.log(no6);
  return (
    <>
      <img src={MAIN_RESPONSE.data[5].image} />
      <img src={MAIN_RESPONSE.data[4].image} />
      <img src={no1} />
      <img src={no2} />
      테스트~ 왜 안돼
    </>
  );
};
export default MainCarousel;
