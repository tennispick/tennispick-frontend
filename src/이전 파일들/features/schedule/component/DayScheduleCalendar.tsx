import { useLessonScheduleByPeriodQuery } from '../query/scheduleQuery';
import ScheduleTimeTable from './ScheduleTimeTable';

import { getDayOfWeekList } from 'src/이전 파일들/utils/date';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import { getDayOfWeek } from '@/shared/utils/date';
import { DEFAULT_WEEK_LIST_COUNT } from '@/shared/constants/weekList';
import { TenSpinner } from '@/shared/ui/TenSpinner';

type Props = {
  date: Date;
  coachList: CoachListData[];
};

const DaySchedule = ({ date, coachList }: Props) => {

  const thisWeekSunday = getDayOfWeek(date, 'sunday');
  const nextWeekSunday = new Date(thisWeekSunday);
  nextWeekSunday.setDate(thisWeekSunday.getDate() + DEFAULT_WEEK_LIST_COUNT * 7);

  const { data, isLoading } = useLessonScheduleByPeriodQuery({
    startDate: thisWeekSunday,
    endDate: nextWeekSunday,
  });

  const initCoach = [
    {
      id: 0,
      name: '',
      phone: '',
      email: '',
      sex: '',
      birth: '',
      age: '',
      coachColor: '',
      position: '',
      createdAt: '',
      updatedAt: '',
    },
  ];

  return (
    <>
      {isLoading && <TenSpinner />}
      <div className="flex w-full h-[calc(100%-176px)] gap-4">
        <div className="relative w-[calc(50%-8px)] h-full">
          <div className="h-6 text-lg font-bold mb-4">평일</div>
          <ScheduleTimeTable
            coachList={coachList.length === 0 ? initCoach : coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(date, DEFAULT_WEEK_LIST_COUNT, true)}
          />
        </div>
        <div className="relative w-[calc(50%-8px)] h-full">
          <div className="h-6 text-lg font-bold mb-4">주말</div>
          <ScheduleTimeTable
            coachList={coachList.length === 0 ? initCoach : coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(
              date,
              DEFAULT_WEEK_LIST_COUNT,
              false,
            )}
          />
        </div>
      </div>
    </>
  );
};

export default DaySchedule;
