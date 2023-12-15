# 설계

0. 데이터 정제
    - 만개의 레시피 csv 파일의 데이터 정제
        - 결측치 제거
        - 로마자로 번역
        - 내용 번역
        - 데이터 줄이기(약 14만 => 55,000개)

1. 프로젝트 구조와 컴포넌트 설계
    (1) 프로젝트 구조 설정하기
        - 폴더 구조
            project
                - app
                    -- components  // 재사용 가능한 컴포넌트들
                    -- pages       // 페이지들 (SSR과 SSG가 여기서 정의됨)
                        --- index.tsx // 메인 페이지 (SSG 가능)
                        --- menu.tsx  // 메뉴 리스트 페이지 (SSR)
                        --- detail/[id].tsx // 상세 페이지 (동적 라우팅, SSR)
                        -- lib         // 데이터 가져오기, 유틸리티 함수 등
                    -- styles      // 글로벌 스타일, CSS/SCSS 파일들
                    -- hooks       // 사용자 정의 React 훅
                    -- context     // React Context API (상태 관리)
                - data          // 정적 데이터 (SSG에 사용)
                - public        // 정적 파일 (이미지, 아이콘 등)
                - api           // 서버 사이드 로직 (API 라우팅, DB 연결 등)

    (2) 컴포넌트 설정하기
        - 컴포넌트 구조
            - Navber : HMK-Food / 검색, 재료(드롭다운), 요리방법(드롭다운), 메뉴바
                - 드롭다운 : framer-motion 라이브러리 사용
                - Search
                - Material
                - Cooking Method
                - MenuBar
            - HeroSection : swiper 라이브러리 사용
                - 홈페이지 소개, 이용방법, 주의사항
            - Main
                - RecipeCard : csv-parse 라이브러리 사용
            - Footer : 정보
        - 레이아웃

    (3) 페이지
        - 메인 페이지
        - 메뉴 리스트 페이지
        - 상세 페이지

    (4) 공통 스타일
        - 공통 스타일 구현하기

2. 백엔드 및 데이터베이스 설계