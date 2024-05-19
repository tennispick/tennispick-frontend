export const transferCoachPosition = (coachPosition: string) => {
  switch (coachPosition) {
    case 'coach':
      return '코치';
    case 'admin':
      return '관리자';
    default:
      return '';
  }
};
