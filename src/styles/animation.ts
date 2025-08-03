// Tailwind CSS로 마이그레이션 완료
// 모든 애니메이션은 tailwind.config.js에서 관리됩니다.

// 기존에 사용된 애니메이션들을 Tailwind 클래스명으로 매핑
export const animations = {
  fadeUp: 'animate-fade-up',
  fadeRight: 'animate-fade-right',
  fadeOutRight: 'animate-fade-out-right',
  dropDownActive: 'animate-dropdown-active',
  dropDownDeActive: 'animate-dropdown-deactive',
  spinner: 'animate-spinner',
} as const;

// 커스텀 애니메이션 클래스 (필요한 경우)
export const customAnimations = {
  fadeUpCustom: 'animate-[fade-up_0.65s_ease]',
  fadeRightCustom: 'animate-[fade-right_0.65s_ease]',
  fadeOutRightCustom: 'animate-[fade-out-right_0.65s_ease]',
  dropDownActiveCustom: 'animate-[dropdown-active_0.2s_ease-in-out]',
  dropDownDeActiveCustom: 'animate-[dropdown-deactive_0.2s_ease-in-out]',
  spinnerCustom: 'animate-[spinner_1s_linear_infinite]',
} as const;
