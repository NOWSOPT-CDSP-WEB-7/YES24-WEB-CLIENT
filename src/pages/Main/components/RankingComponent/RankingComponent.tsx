import { useEffect, useState } from "react";
import * as S from "./RankingComponent.styled";

const RankingComponent = () => {
  const [selectedTab, setSelectedTab] = useState("concert");

  const handleClickTab = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    //추후 이 부분에서 필터링 진행할 예정
    //아마, prop을 context로 넘겨주어 사용할 예정 (주석은 API 적용 후 삭제하겠습니다.)
  }, [selectedTab]);

  return (
    <S.RankingWrapper>
      <S.RankingHeader>실시간 티켓랭킹</S.RankingHeader>
      <S.ContentWrapper>
        <S.ContentTab>
          <S.TabUnit
            $isSelected={selectedTab === "concert"}
            onClick={() => handleClickTab("concert")}
          >
            콘서트
          </S.TabUnit>
          <S.TabUnit
            $isSelected={selectedTab === "musical"}
            onClick={() => handleClickTab("musical")}
          >
            뮤지컬/연극
          </S.TabUnit>
          <S.TabUnit>클래식/무용</S.TabUnit>
          <S.TabUnit>전시/행사</S.TabUnit>
        </S.ContentTab>
      </S.ContentWrapper>
    </S.RankingWrapper>
  );
};

export default RankingComponent;
