import { SexType } from '../types';

export const transferSexType = (sex: SexType) => {
  switch (sex) {
    case 'woman':
      return '여자';
    default:
      return '남자';
  }
};

export const transferCoachPositionType = (coachPosition: string) => {
  switch (coachPosition) {
    case 'coach':
      return '코치';
    case 'headCoach':
      return '수석코치';
    default:
      return '수습강사';
  }
};
