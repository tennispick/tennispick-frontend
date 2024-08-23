import { SetStateAction } from '@/types/index';
import { LessonDateType } from '@features/lesson/type/lesson.type';
import { CourtListData } from '@apis/court/court.type';
import { CoachListData } from '@apis/coach/coach.type';
import CoachSelect from './CoachSelect';
import CourtSelect from './CourtSelect';
import LessonDateTypeInput from './LessonDateTypeInput';
import LessonTimeInput from './LessonTimeInput';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';
import ScheduleModalRegularLessonAllOnceScheduleSelectContainer from './ScheduleSelectContainer';
import { ScheduleType } from '@features/schedule/type/schedule.type';
import { DuplicateCheckScheduleLessonData } from '@apis/schedule/schedule.type';
import { css } from 'styled-system/css';

type Props = {
  allOnceData: AllOnceFormDataProps;
  setAllOnceData: SetStateAction<{
    lessonDateType: LessonDateType;
    lessonTime: string;
    coach: string;
    court: string;
  }>;
  lesson: string;
  courtList: CourtListData[];
  coachList: CoachListData[];
  allOnceSchedule: ScheduleType[];
  setAllOnceSchedule: SetStateAction<ScheduleType[]>;
  isDuplicateList: DuplicateCheckScheduleLessonData[];
};

const ScheduleModalRegularLessonAllOnceSchedule = ({
  allOnceData,
  setAllOnceData,
  lesson,
  courtList,
  coachList,
  allOnceSchedule,
  setAllOnceSchedule,
  isDuplicateList,
}: Props) => {
  const { lessonDateType, lessonTime, coach, court } = allOnceData;

  const isDisabled = lesson === '' ? true : false;

  return (
    <>
      <div className={css({ width: '25%' })}>
        <LessonDateTypeInput
          lessonDateType={lessonDateType}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
        <LessonTimeInput
          lessonTime={lessonTime}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
        <CoachSelect
          coach={coach}
          data={coachList}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
        <CourtSelect
          court={court}
          data={courtList}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
      </div>
      <ScheduleModalRegularLessonAllOnceScheduleSelectContainer
        lessonDateType={lessonDateType}
        lessonTime={lessonTime}
        allOnceSchedule={allOnceSchedule}
        setAllOnceSchedule={setAllOnceSchedule}
        disabled={isDisabled}
        isDuplicateList={isDuplicateList}
      />
    </>
  );
};

export default ScheduleModalRegularLessonAllOnceSchedule;
