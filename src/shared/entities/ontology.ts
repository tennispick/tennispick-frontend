/**
 * @file 프로젝트의 모든 도메인, 액션, 온톨로지 구조를 정의하는 최상위 파일입니다.
 *       온톨로지는 도메인 내의 개념, 속성, 관계를 정형적으로 명세하여
 *       프로젝트 전체의 일관성과 예측 가능성을 높이는 것을 목표로 합니다.
 */

/**
 * Domain: 프로젝트의 핵심 기능 단위를 나타내는 문자열 리터럴 타입입니다.
 * 예: 'coach', 'customer', 'lesson'
 */
export type Domain =
  | 'auth'
  | 'coach'
  | 'customer'
  | 'court'
  | 'lesson'
  | 'community'
  | 'setting'
  | 'schedule';

/**
 * Action: 도메인이 외부에 제공하는 표준화된 상위 수준의 기능(Use Case) 또는 역량(Capability)을 나타냅니다.
 * 이는 단순 UI 이벤트(onClick)나 데이터 조작(CRUD)을 넘어,
 * "이 도메인이 무엇을 할 수 있는가?"에 대한 답을 정의합니다.
 *
 * 예:
 * - 'login': 인증 API 호출, 사용자 상태 저장, 페이지 이동을 포함하는 로그인 기능 전체.
 * - 'getPage': 특정 페이지 컴포넌트를 렌더링하고 관련 데이터를 조회하는 기능.
 * - 'create': 새로운 데이터를 생성하고 시스템 상태를 업데이트하는 기능.
 */
export type Action =
  | 'getPage'
  | 'getById'
  | 'getList'
  | 'create'
  | 'update'
  | 'delete'
  | 'search'
  | 'login'
  | 'logout'
  | 'register';

/**
 * FeatureOntology: 각 기능(feature)이 가져야 할 온톨로지 구조를 정의하는 인터페이스입니다.
 * 모든 피처별 온톨로지는 이 구조를 따라야 합니다.
 */
export interface FeatureOntology {
  domain: Domain;
  actions: readonly Action[]; // 읽기 전용으로 설정하여 불변성 유지
}
