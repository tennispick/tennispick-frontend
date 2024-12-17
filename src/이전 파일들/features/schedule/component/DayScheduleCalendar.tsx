import { getDayOfWeek } from 'src/이전 파일들/utils/date';
import { useLessonScheduleByPeriodQuery } from '../query/scheduleQuery';
import { GET_WEEK_LIST_COUNT } from '@/이전 파일들/features/constant/schedule';
import Loading from 'src/이전 파일들/components/common/Loading';
import ScheduleTimeTable from './ScheduleTimeTable';

import { getDayOfWeekList } from 'src/이전 파일들/utils/date';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';

type Props = {
  date: Date;
  coachList: CoachListData[];
};

const DaySchedule = ({ date, coachList }: Props) => {
  const thisWeekSunday = getDayOfWeek(date, 'sunday');
  const nextWeekSunday = new Date(thisWeekSunday);
  nextWeekSunday.setDate(thisWeekSunday.getDate() + GET_WEEK_LIST_COUNT * 7);

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
      {isLoading && <Loading />}
      <div className="flex w-full h-[calc(100%-176px)] gap-4">
        <div className="w-[calc(50%-8px)] h-full">
          <div className="h-6 text-lg font-bold mb-4">평일</div>
          <ScheduleTimeTable
            coachList={coachList.length === 0 ? initCoach : coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(date, GET_WEEK_LIST_COUNT, true)}
          />
        </div>
        <div className="w-[calc(50%-8px)] h-full">
          <div className="h-6 text-lg font-bold mb-4">주말</div>
          <ScheduleTimeTable
            coachList={coachList.length === 0 ? initCoach : coachList}
            data={data}
            timeTableMapList={getDayOfWeekList(
              date,
              GET_WEEK_LIST_COUNT,
              false,
            )}
          />
        </div>
      </div>
    </>
  );
};

export default DaySchedule;
