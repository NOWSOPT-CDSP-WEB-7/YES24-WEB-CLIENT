<div align="center">
<h1> 🤹🏻 YES24 🤹🏻 </h1>
<h4>서비스 간단 설명</h4>
<p>
yes24 티켓 모바일 웹은 대한민국의 주요 온라인 티켓 예매 사이트 중 하나로 모바일 웹을 통해 다양한 뮤지컬, 연극, 클래식, 무용, 전시 등의 티켓을 제공합니다. yes24 티켓 모바일 웹은 사용자 친화적인 인터페이스를 자랑하며, 이를 통해 손쉽게 원하는 행사의 티켓을 찾아 예매할 수 있습니다.

사용자가 콘텐츠에 집중할 수 있게 화이트 컬러의 사용 비중을 높혀 동일감 있는 컬러를 사용하였고, 데스크탑 사이트와 동일한 컴포넌트 구성과 디자인 시스템을 통해 일관성을 구축하였습니다. 또한 검색 페이지를 추가하고 공연 세부 페이지 구성을 변경하여 사용자에게 정보를 찾기 쉬운 UX를 플로우 제공할 수 있게 리디자인을 진행하고 모바일 웹을 구현하였습니다.
</p>
</div>

<br />

<h2> 🤹🏻 YES24 🤹🏻 핵심 기능 </h2>

<h3> 1️⃣ Main : 홈 </h3>
<img src="https://github.com/NOWSOPT-CDSP-WEB-7/YES24-WEB-CLIENT/assets/96781926/36e52a66-b513-45d6-81e5-ab094a57462a"/>

- 첫 접속 혹은 새로고침 시, 하단 가운데에 모달 생성(닫기 버튼으로 닫을 수 있음) -> 모달을 닫기 전에는 뒤의 배경은 스크롤 불가
- 메인 캐러셀 사용자 조작으로 이동 가능+ 3초마다 자동으로 넘김 기능 + 무한 루프(계속 돌려도 처음으로 돌아오게 만듬)
- 실시간 티켓 랭킹의 탭(콘서트 혹은 뮤지컬/연극) 클릭 시 해당 장르에 맞는 랭킹 캐러셀 필터링
- 랭킹 캐러셀 사용자 조작으로 이동 가능 + 내용이 별로 없을 때, 흰 화면이 나오지 않도록 기본 offset 설정
- 검색 버튼 클릭시 검색 화면으로 라우팅



<br/>

<h3> 2️⃣ Search : 공연 검색 </h3>
<img src="https://github.com/NOWSOPT-CDSP-WEB-7/YES24-WEB-CLIENT/assets/96781926/2916686d-9547-4475-a61b-ade7734c62ec" />

- 입력된 검색어에 대한 검색 결과 정보 GET
- 실시간 검색어 입력에 대응되는 결과 데이터 렌더링 및 하이라이트
- 장르 필터 버튼 클릭을 통한 검색 결과 필터링
- 검색된 공연 클릭시 Detail 페이지로 라우팅
- 최근 검색어, 최근 검색 공연 저장 및 삭제

<br/>

<h3> 3️⃣ Detail : 공연 상세 정보 </h3>
<img src="https://github.com/NOWSOPT-CDSP-WEB-7/YES24-WEB-CLIENT/assets/96781926/3b30e35e-ef62-470f-bb97-e30c163bd954" />

- 카테고리에 따른 공연 정보 렌더링
- Search 페이지에서 가져온 공연 정보 GET
- 예매하기 버튼 누르면 공연 정보 POST
- 좋아요 버튼 PATCH



<br/>


---

<br />
<br />

<h2>🌱 합세 뿌시는 7조 새싹웨비들 ! </h2>

<table align="center">
    <tr align="center">
        <td style="min-width: 200px;">
              <img src="https://github.com/NOWSOPT-CDSP-WEB-7/YES24-WEB-CLIENT/assets/96781926/a50726c7-3b94-49fd-bac9-326e870508a7" width="200" alt="준혁-프로필사진">
              <br />
        </td>
      <td style="min-width: 200px;">
              <img src="https://github.com/NOWSOPT-CDSP-WEB-7/YES24-WEB-CLIENT/assets/96781926/36d04336-ccbb-46a5-8da6-d1ee3b3f1c78" width="200" alt="화랑-프로필사진">
              <br />
        </td>
      <td style="min-width: 200px;">
              <img src="https://github.com/NOWSOPT-CDSP-WEB-7/YES24-WEB-CLIENT/assets/96781926/f38e66c3-43e4-40ca-9bcd-fd488f4a353a" width="200" alt="다은-프로필사진">
              <br />
        </td>
    </tr>
    <tr align="center">
             <td>
            공준혁 <br/>  <a href="https://github.com/ocahs9"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a>
      </td>
             <td>
            임화랑 <br/>  <a href="https://github.com/thisishwarang"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a>
      </td>
        <td>
            남다은 <br/>  <a href="https://github.com/namdaeun"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a>
      </td>
    </tr>
    <tr align="center">
        <td>
          메인 뷰
      </td>
       <td>
         검색 뷰 & 검색 결과 리스트 뷰
      </td>
       <td>
         공연 정보 상세 뷰
      </td>
    </tr>
  	<tr align="center">
        <td>
          메인 캐러셀 GET API <br />
          랭킹 캐러셀 GET API
      </td>
       <td>
         검색 결과 리스트 GET API     
      </td>
       <td>
         공연 상세 정보 GET API <br />
         공연 좋아요 버튼 PATCH API <br />
         공연 예매하기 버튼 POST API 
      </td>
    </tr>
</table>
<br />
<br />
<h2> 🛠 기술스택 </h2>

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                        |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) ![Stylelint](https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white)|
| Package Manager      | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                       |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |



<br />
<br />
<h2> 💡 주요 라이브러리 </h2>

```
    "swiper": "^11.1.3",
    "vite-plugin-svgr": "^4.2.0"
```

<br/>
<br />

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<a href="https://achieved-syzygy-75c.notion.site/24008c7502e34c6caf6870a87c2f2cec?pvs=4">🔗 노션 링크</a>

<br/>
<br/>

<h2> 📁 폴더 구조 </h2>

```
├── 📁 src
│  └── 📁 assets
│  │   ├── 📁 icons
│  │   |   └── index.ts
│  │   └── 📁 images
├── 📁 components
│  ├── 📁 common
│  ├── 📁 Main
│  ├── 📁 Search
│  └── 📁 Detail
├── 📁 constants
├── 📁 hooks
├── 📁 apis
│  ├── 📁 Main
│  ├── 📁 Search
│  └── 📁 Detail
├── 📁 utils
├── 📁 pages
│  ├── 📁 Main
│  ├── 📁 Search
│  ├── 📁 SearchListPage
│  └── 📁 Detail
├── 📁 styles
│  ├── GlobalStyle.ts
│  └── theme.ts
├── App.tsx
├── main.tsx
├── vite-env.d.ts
└── Router.tsx
```


<br/>
