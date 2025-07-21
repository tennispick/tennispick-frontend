import { FeatureOntology } from '@/shared/entities/ontology';

const authOntology: FeatureOntology = {
  domain: 'auth',
  actions: [
    /**
     * @description
     * 사용자의 아이디와 비밀번호로 인증을 시도합니다.
     * 성공 시, 인증 토큰을 저장하고 사용자 정보를 전역 상태에 업데이트한 후,
     * 기본 페이지로 리디렉션합니다.
     */
    'login',

    /**
     * @description
     * 현재 로그인 페이지를 사용자에게 보여줍니다.
     * 이 페이지는 'login' 액션을 트리거하는 UI를 포함합니다.
     */
    'getPage',

    // 'logout'과 'register'는 현재 로그인 페이지에서는 발견되지 않았지만,
    // auth 도메인의 핵심 기능이므로 유지하는 것이 좋습니다.
    'logout',
    'register',
  ],
};

export default authOntology;