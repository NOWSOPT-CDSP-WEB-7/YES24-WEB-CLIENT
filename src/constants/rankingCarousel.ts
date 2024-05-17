import no1 from "@assets/rankingCarouselImgs/나훈아.png";
import no2 from "@assets/rankingCarouselImgs/김창옥.png";
import no3 from "@assets/rankingCarouselImgs/로이킴.png";
import no4 from "@assets/rankingCarouselImgs/rank1.png";
import no5 from "@assets/rankingCarouselImgs/rank2.png";
import no6 from "@assets/rankingCarouselImgs/rank3.png";

interface ResponseObjType {
  id: number;
  title: string;
  period: string;
  place: string;
  genre: string;
  ranking: number;
  image: string;
}

interface ResponseType {
  data: ResponseObjType[];
}

export const RANKING_RESPONSE: ResponseType = {
  data: [
    {
      id: 1,
      title: "콘서트 <나훈아 2024 고마웠습니다-라스트콘서트>",
      period: "2023032820230623",
      place: "충무아트센터 극장",
      genre: "concert",
      ranking: 1,
      image: no1,
    },
    {
      id: 2,
      title: "콘서트 <2024 김창옥 토크콘서트 시즌4>",
      period: "2023032820230623",
      place: "충무아트센터 극장",
      genre: "concert",
      ranking: 3,
      image: no2,
    },
    {
      id: 3,
      title: "콘서트 <LIVE ON 로이킴X김필>",
      period: "2023032820230623",
      place: "충무아트센터 극장",
      genre: "concert",
      ranking: 2,
      image: no3,
    },
    {
      id: 4,
      title: "뮤지컬 <에밀>",
      period: "2023032820230623",
      place: "충무아트센터 극장",
      genre: "musical",
      ranking: 3,
      image: no4,
    },
    {
      id: 5,
      title: "뮤지컬 <광염 소나타>",
      period: "2023032820230623",
      place: "충무아트센터 극장",
      genre: "musical",
      ranking: 2,
      image: no5,
    },
    {
      id: 6,
      title: "뮤지컬 <디아길레프>",
      period: "2023032820230623",
      place: "충무아트센터 극장",
      genre: "musical",
      ranking: 1,
      image: no6,
    },
  ],
};
