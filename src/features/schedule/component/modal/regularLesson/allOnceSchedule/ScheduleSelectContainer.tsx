import { LessonDateType } from '@features/lesson/type/lesson.type';
import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleByDay from './ScheduleByDay';
import ScheduleByDate from './ScheduleByDate';
import { ScheduleType } from '@features/schedule/type/schedule.type';
import { SetStateAction } from '@/types/index';
import StartTimeSelect from '../../StartTimeSelect';
import EndTimeSelect from '../../EndTimeSelect';
import { DuplicateCheckScheduleLessonData } from '@apis/schedule/schedule.type';
import { numberZeroFillFormat } from '@utils/numberForm';

type Props = {
  lessonDateType: LessonDateType;
  lessonTime: string;
  allOnceSchedule: ScheduleType[];
  setAllOnceSchedule: SetStateAction<ScheduleType[]>;
  disabled: boolean;
  isDuplicateList: DuplicateCheckScheduleLessonData[];
};

const ScheduleModalRegularLessonAllOnceScheduleSelectContainer = ({
  lessonDateType,
  lessonTime,
  allOnceSchedule,
  setAllOnceSchedule,
  disabled,
  isDuplicateList,
}: Props) => {
  const onSelectTimeListHandler = ({
    index,
    name,
    value,
  }: {
    index: number;
    name: 'startTime' | 'endTime';
    value: string;
  }) => {
    const targetSchedule = allOnceSchedule[index];

    setAllOnceSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[index] = {
        ...targetSchedule,
        [name]: value,
      };
      return newSchedule;
    });
  };

  return (
    <div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={CalendarBlackIcon}
          alt={'scheduleType'}
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        스케줄 일정 입력
      </div>
      <div css={{ margin: '12px 0 0 0' }}>
        {allOnceSchedule.map((item, index) => {
          const { date, day, startTime, endTime } = item;

          const targetDate = new Date(item.date);
          const targetYear = targetDate.getFullYear();
          const targetMonth = targetDate.getMonth() + 1;
          const targetDay = targetDate.getDate();

          const targetFullFormat = `${targetYear}-${numberZeroFillFormat(
            targetMonth,
            2,
          )}-${numberZeroFillFormat(targetDay, 2)}`;

          const isDuplicate =
            isDuplicateList &&
            isDuplicateList.length > 0 &&
            isDuplicateList.map((el: any) => {
              const { result } = el;
              return (
                item.startTime === result.startTime &&
                item.endTime === result.endTime &&
                targetFullFormat === result.date
              );
            });

          return (
            <div key={`${date}-${day}-${startTime}-${endTime}-${index}`}>
              <div css={{ display: 'flex', alignItems: 'center' }}>
                <div css={{ display: 'flex', alignItems: 'center' }}>
                  <span css={{ margin: '0 16px 0 0' }}>{index + 1}.</span>
                  <div css={{ width: '140px' }}>
                    {
                      {
                        date: (
                          <ScheduleByDate
                            allOnceSchedule={allOnceSchedule}
                            setAllOnceSchedule={setAllOnceSchedule}
                            index={index}
                            disabled={disabled}
                          />
                        ),
                        day: (
                          <ScheduleByDay
                            allOnceSchedule={allOnceSchedule}
                            setAllOnceSchedule={setAllOnceSchedule}
                            index={index}
                            item={item}
                            disabled={disabled}
                          />
                        ),
                      }[lessonDateType]
                    }
                  </div>
                </div>
                <StartTimeSelect
                  index={index}
                  schedule={item}
                  onSelectTimeListHandler={onSelectTimeListHandler}
                  disabled={disabled}
                />
                <EndTimeSelect
                  index={index}
                  startTime={allOnceSchedule[index].startTime}
                  allOnceSchedule={allOnceSchedule}
                  setAllOnceSchedule={setAllOnceSchedule}
                  lessonTime={lessonTime}
                />
              </div>
              <div
                css={{
                  padding: '0 0 0 28px',
                  margin: '8px 0 0 0',
                  color: 'var(--red200)',
                }}
              >
                {isDuplicate && <>예약이 불가능한 날짜에요.</>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleSelectContainer;
