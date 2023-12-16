export interface DataType {
  RCP_SNO: number; // 순번
  CKG_NM: string; // 요리 이름(영어)
  CKG_NM_KO: string; // 요리 이름 (한국어)
  RGTR_ID: string; // 작성자 아이디
  RGTR_NM: string; // 작성자 닉네임
  INQ_CNT: number; // 조회수
  RCMM_CNT: number; // 추천수
  SRAP_CNT: number; // 스크랩 수
  CKG_MTH_ACTO_NM: string; // 요리 방법(굽기, 삶기 등)
  CKG_STA_ACTO_NM: string; // 요리 할 때 (일상생활, 메인 반찬 등)
  CKG_MTRL_ACTO_NM: string; // 주된 재료 (고기, 쌀 등)
  CKG_KND_ACTO_NM: string; // 주된 카테고리 (국, 찌개 등)
  CKG_IPDC: string; // 요리 설명
  CKG_MTRL_CN: string; // 요리 필요 재료
  CKG_INBUN_NM: string; // 요리 인분 수(1인분, 2인분 )
  CKG_DODF_NM: string; // 요리 난이도 (초급, 중급 등)
  CKG_TIME_NM: string; // 요리 시간 (10분 이내 등)
  FIRST_REG_DT: string; // 첫 개설일
  Y_ID: string; // 유튜브 영상 ID
}
