export const handleUnauthorized = () => {
  if (typeof window !== 'undefined') {
    window.alert('유효하지 않은 사용자입니다. 다시 로그인해주세요.');
    window.location.href = '/login';
  }
};
