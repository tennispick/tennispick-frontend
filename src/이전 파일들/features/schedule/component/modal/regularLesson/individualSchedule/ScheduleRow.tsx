import { IndividualFormDataProps } from '@/이전 파일들/features/schedule/type/regularLesson';
import CoachSelect from './CoachSelect';
import CourtSelect from './CourtSelect';
import LessonDateTypeSelect from './LessonDateTypeSelect';
import LessonTimeSelect from './LessonTimeSelect';
import ScheduleContainer from './ScheduleContainer';
import { SetStateAction } from 'src/이전 파일들/types/index';
import { CourtListData } from 'src/이전 파일들/apis/court/court.type';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import Image from 'next/image';
import AddIcon from '@icons/add_circle.svg';
import RemoveIcon from '@icons/remove.svg';
import { LessonDateType } from '@/이전 파일들/features/lesson/type/lesson.type';
import { DayType } from '@/이전 파일들/features/schedule/type/schedule.type';
import { useDuplicateCheckScheduleLessonQuery } from '@/이전 파일들/features/schedule/query/scheduleQuery';
import { numberZeroFillFormat } from 'src/이전 파일들/utils/numberForm';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  index: number;
  individualData: IndividualFormDataProps;
  setIndividualData: SetStateAction<IndividualFormDataProps[]>;
  dataLength: number;
  coachList: CoachListData[];
  courtList: CourtListData[];
  remainLessonCount: number | undefined;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleRow = ({
  index,
  individualData,
  setIndividualData,
  dataLength,
  coachList,
  courtList,
  remainLessonCount,
  disabled,
}: Props) => {
  const { lessonDateType, lessonTime, coach, court, ...schedule } =
    individualData;

  const targetDate = new Date(schedule.date);
  const targetYear = targetDate.getFullYear();
  const targetMonth = targetDate.getMonth() + 1;
  const targetDay = targetDate.getDate();

  const targetFullFormat = `${targetYear}-${numberZeroFillFormat(
    targetMonth,
    2,
  )}-${numberZeroFillFormat(targetDay, 2)}`;

  const { data: isDuplicateList } = useDuplicateCheckScheduleLessonQuery({
    coach: coach,
    court: court,
    schedule: [{ ...schedule }],
  });

  const isDuplicate = () => {
    if (!isDuplicateList || isDuplicateList.length === 0) return false;

    const result = isDuplicateList.map((el: any) => {
      const { result } = el;
      return (
        schedule.startTime === result.startTime &&
        schedule.endTime === result.endTime &&
        targetFullFormat === result.date
      );
    });

    return result.includes(true);
  };

  const onClickAppendScheduleRowHandler = () => {
    if (disabled) {
      alert('수강권을 먼저 선택해주세요.');
      return false;
    }

    if (remainLessonCount! === dataLength) {
      alert('남은 수강횟수가 부족해요.');
      return false;
    }

    setIndividualData((prev) => [
      ...prev,
      {
        lessonDateType: 'date' as LessonDateType,
        lessonTime: '20',
        coach: '',
        court: '',
        date: new Date(),
        day: 'monday' as DayType,
        startTime: '00:00',
        endTime: '00:20',
      },
    ]);
  };

  const onClickRemoveScheduleRowHandler = () => {
    if (index === 0) return;

    setIndividualData((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <div
        className={flex({
          width: '100%',
          alignItems: 'center',
          margin: isDuplicate() ? '0' : '0 0 16px 0',

          '& div': {
            padding: '0 0 0 8px',
          },
        })}
      >
        <LessonDateTypeSelect
          index={index}
          lessonDateType={lessonDateType}
          setFormData={setIndividualData}
          disabled={disabled}
        />
        <LessonTimeSelect
          index={index}
          lessonTime={lessonTime}
          setFormData={setIndividualData}
          disabled={disabled}
        />
        <CoachSelect
          index={index}
          coach={coach}
          data={coachList}
          setFormData={setIndividualData}
          disabled={disabled}
        />
        <CourtSelect
          index={index}
          court={court}
          data={courtList}
          setFormData={setIndividualData}
          disabled={disabled}
        />
        <ScheduleContainer
          index={index}
          lessonDateType={lessonDateType}
          lessonTime={lessonTime}
          schedule={schedule}
          setFormData={setIndividualData}
          disabled={disabled}
        />
        <div
          className={flex({
            width: '56px',
            alignItems: 'center',
            margin: '0 0 0 8px',
            padding: '0 0 0 4px!important',
          })}
        >
          <Image
            src={AddIcon}
            alt="add iocn"
            width={24}
            height={24}
            className={css({ cursor: 'pointer' })}
            onClick={onClickAppendScheduleRowHandler}
          />
          {index > 0 && (
            <Image
              src={RemoveIcon}
              alt="remove iocn"
              width={24}
              height={24}
              className={css({ cursor: 'pointer', margin: '0 0 0 4px' })}
              onClick={onClickRemoveScheduleRowHandler}
            />
          )}
        </div>
      </div>
      {isDuplicate() && (
        <div
          className={css({
            color: 'var(--red200)',
            padding: '16px 0 16px 12px',
          })}
        >
          예약이 불가능한 날짜에요.
        </div>
      )}
    </>
  );
};

export default ScheduleModalRegularLessonIndividualScheduleRow;
