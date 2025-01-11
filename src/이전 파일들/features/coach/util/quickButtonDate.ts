import { setDateToStartOfDay } from 'src/이전 파일들/utils/date';
import {
  endOfMonth,
  endOfToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';

export const getDateByQuickButton = (
  date: string,
  handleStartDate: (date: Date) => void,
  handleEndDate: (date: Date) => void,
) => {
  const today = new Date();
  const lastMonth = subMonths(new Date(), 1);

  switch (date) {
    case 'today':
      handleStartDate(setDateToStartOfDay(today));
      handleEndDate(endOfToday());
      break;
    case 'thisWeek':
      handleStartDate(setDateToStartOfDay(startOfWeek(today)));
      handleEndDate(endOfToday());
      break;
    case 'thisMonth':
      handleStartDate(setDateToStartOfDay(startOfMonth(today)));
      handleEndDate(endOfToday());
      break;
    case 'lastMonth':
      handleStartDate(setDateToStartOfDay(startOfMonth(lastMonth)));
      handleEndDate(setDateToStartOfDay(endOfMonth(lastMonth)));
      break;
    case 'month':
      handleStartDate(setDateToStartOfDay(lastMonth));
      handleEndDate(endOfToday());
      break;
    case 'threeMonth':
      handleStartDate(setDateToStartOfDay(subMonths(new Date(), 3)));
      handleEndDate(endOfToday());
      break;
    case 'sixMonth':
      handleStartDate(setDateToStartOfDay(subMonths(new Date(), 6)));
      handleEndDate(endOfToday());
      break;
  }
};
