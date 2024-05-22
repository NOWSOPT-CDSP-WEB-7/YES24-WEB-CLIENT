import no1 from "@assets/TicketOpenImgs/공지1.png";
import no2 from "@assets/TicketOpenImgs/공지2.png";
import no3 from "@assets/TicketOpenImgs/공지3.png";

interface ObjPropTypes {
  id: number;
  title: string;
  image: string;

  placeAndPeriod: string;
}

interface TicketPropTypes {
  data: ObjPropTypes[];
}

export const TICKET_DUMMY: TicketPropTypes = {
  data: [
    {
      id: 1,
      title: "뮤지컬<클럽 드바이>1차 티켓오픈 안내",
      image: no1,
      placeAndPeriod: "2024.05.08(수) 오후 3:00",
    },
    {
      id: 2,
      title: "뮤지컬[파가니니] 마지막 티켓오픈 안내",
      image: no2,
      placeAndPeriod: "2024.05.03(금) 오후 3:00",
    },
    {
      id: 3,
      title: "10CM'너랑 밤새고 싶어'발매기념 스페셜 라이브쇼 :쇼츠쇼츠 대작전 티켓 오픈 안내",
      image: no3,
      placeAndPeriod: "2024.05.03(금) 오후 8:00",
    },
  ],
};
