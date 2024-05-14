import { IcChevronUp, IcGlobalBtn, IcLine, IcYes24Btn } from "../../assets/icons/index.ts";
import { FOOTER } from "../../constants/footer.ts";
import * as S from "./Footer.styled.ts";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.NoticeLayout>
        <S.Notice>{FOOTER.notice}</S.Notice>
        <IcLine />
        <S.Version>{FOOTER.version}</S.Version>
        <IcLine />
        <S.TopBtn>
          {FOOTER.btnText}
          <IcChevronUp />
        </S.TopBtn>
      </S.NoticeLayout>
      <S.PrivacyNoticeLayout>
        <S.Privacy>{FOOTER.privacy}</S.Privacy>
        <IcLine />
        <S.Rule>{FOOTER.rule}</S.Rule>
      </S.PrivacyNoticeLayout>
      <S.AddressBox>
        <S.Address>{FOOTER.address}</S.Address>
      </S.AddressBox>
      <S.BtnBox>
        <IcGlobalBtn />
        <IcYes24Btn />
      </S.BtnBox>
    </S.FooterWrapper>
  );
};

export default Footer;
