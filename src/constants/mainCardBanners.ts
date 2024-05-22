import no1 from "@assets/cardBannerImgs/card_1.png";
import no2 from "@assets/cardBannerImgs/card_2.png";
import no3 from "@assets/cardBannerImgs/card_3.png";
import no4 from "@assets/cardBannerImgs/card_4.png";
import no5 from "@assets/cardBannerImgs/card_5.png";
import no6 from "@assets/cardBannerImgs/card_6.png";
import no7 from "@assets/cardBannerImgs/card_7.png";

interface MainBannerObjPropTypes {
  id: number;
  smallTitle: string;
  title: string;
  redPercent?: string;
  subTitle: string;
  rightText: string;
  image: string;
}

interface MainBannerPropTypes {
  data: MainBannerObjPropTypes[];
}

export const MAIN_BANNER: MainBannerPropTypes = {
  data: [
    {
      id: 1,
      smallTitle: "#봄날엔뷰민라",
      title: "뷰티풀 민트 라이트 2024",
      redPercent: "",
      subTitle: "36팀의 아티스트와 함께할 인생봄날",
      rightText: "올림픽공원",
      image: no1,
    },
    {
      id: 2,
      smallTitle: "세상 어디에도 없는 음악",
      title: "뮤지컬 광염 소나타",
      redPercent: "25% ",
      subTitle: "재관람 할인",
      rightText: "예스24스테이지 1관",
      image: no2,
    },
    {
      id: 3,
      smallTitle: "제작극장 세종이 제안하는 특별한 극장 경험",
      title: "2024 세종시즌",
      redPercent: "",
      subTitle: "믿고 보는 세종 시즌!",
      rightText: "세종문화회관",
      image: no3,
    },
    {
      id: 4,
      smallTitle: "금세기 최고의 흥행사이자 제작사",
      title: "뮤지컬 디아길레프",
      redPercent: "30% ",
      subTitle: "청소년 할인",
      rightText: "예스24아트원 1관",
      image: no4,
    },
    {
      id: 5,
      smallTitle: "이 붓끝으로 무엇을 꿈꿀 수 있을까",
      title: "뮤지컬 난설",
      redPercent: "30% ",
      subTitle: "학생 할인",
      rightText: "예스24스테이지 2관",
      image: no5,
    },
    {
      id: 6,
      smallTitle: "ComMPAS 24",
      title: "LG아트센터 서울 2024년 기획공연 시즌",
      redPercent: "",
      subTitle: "세계적 수준의 현대 공연예술 작품들",
      rightText: "LG아트센터 서울",
      image: no6,
    },
    {
      id: 7,
      smallTitle: "김창옥의 네 번째 토크 콘서트에 초대합니다",
      title: "2024 김창옥 토크콘서트 시즌4",
      redPercent: "",
      subTitle: "더욱 새로워진 힐링 강연쇼!",
      rightText: "전국투어",
      image: no7,
    },
  ],
};
