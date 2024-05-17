import no1 from "@assets/mainCarouselImgs/등등곡.png";
import no2 from "@assets/mainCarouselImgs/디어에반핸슨.png";
import no3 from "@assets/mainCarouselImgs/어쩌면해피엔딩.png";
import no4 from "@assets/mainCarouselImgs/이블데드.png";
import no5 from "@assets/mainCarouselImgs/이찬원콘서트.png";
import no6 from "@assets/mainCarouselImgs/paganini.png";
//웹팩이 인식할 수 있도록 일일히 설정해줌 - 추후 API로 받아오면 위의 과정 불필요.

interface ResponseObjType {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  period: string;
  place: string;
}

interface ResponseType {
  data: ResponseObjType[];
}

export const MAIN_RESPONSE: ResponseType = {
  data: [
    {
      id: 1,
      title: "임시타이틀1",
      subTitle: "서브타이틀1",
      image: no1,
      period: "2023032820230623",
      place: "충무아트센터 극장",
    },
    {
      id: 2,
      title: "임시타이틀2",
      subTitle: "서브타이틀2",
      image: no2,
      period: "2023032820230623",
      place: "충무아트센터 극장",
    },
    {
      id: 3,
      title: "임시타이틀3",
      subTitle: "서브타이틀3",
      image: no3,
      period: "2023032820230623",
      place: "충무아트센터 극장",
    },
    {
      id: 4,
      title: "임시타이틀4",
      subTitle: "서브타이틀4",
      image: no4,
      period: "2023032820230623",
      place: "충무아트센터 극장",
    },
    {
      id: 5,
      title: "임시타이틀5",
      subTitle: "서브타이틀5",
      image: no5,
      period: "2023032820230623",
      place: "충무아트센터 극장",
    },
    {
      id: 6,
      title: "임시타이틀6",
      subTitle: "서브타이틀6",
      image: no6,
      period: "2023032820230623",
      place: "충무아트센터 극장",
    },
  ],
};
