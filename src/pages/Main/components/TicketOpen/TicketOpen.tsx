import { TICKET_DUMMY } from "@constants/ticketopen";
import * as S from "./TicketOpen.styled";

const TicketOpen = () => {
  return (
    <S.TicketWrapper>
      <S.TicketHeader>티켓 오픈/공지</S.TicketHeader>
      <S.ContentWrapper>
        {TICKET_DUMMY.data.map((item) => (
          <S.ContentList key={item.id}>
            <S.ListImg imgsrc={item.image} />
            <S.ListTextBox>
              <S.ListTextTitle>{item.title}</S.ListTextTitle>
              <S.ListTextPeriodPlace>{item.placeAndPeriod}</S.ListTextPeriodPlace>
            </S.ListTextBox>
          </S.ContentList>
        ))}
      </S.ContentWrapper>
      <S.BottomButton>티켓오픈 더보기</S.BottomButton>
    </S.TicketWrapper>
  );
};

export default TicketOpen;
