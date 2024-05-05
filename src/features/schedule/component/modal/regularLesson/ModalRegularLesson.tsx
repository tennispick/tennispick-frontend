import { FormEventHandler, useEffect, useState } from 'react';

import { Button } from '@components/index';
import { EditWhiteIcon } from '@icons/index';
import { useScheduleMutation } from '@features/schedule/mutation/scheduleMutation';
import { useCustomerLessonListQuery } from '@features/customer/query/CustomerQuery';
import { useGetCourtListQuery } from '@features/court/query/courtQuery';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { useDuplicateCheckScheduleLessonQuery } from '@features/schedule/query/scheduleQuery';

import ScheduleModalRecentHistoryModal from '../recentHistoryModal/RecentHistoryModal';

import CommonSchedule from './commonSchedule/CommonSchedule';
import { LessonDateType, LessonType } from '@features/lesson/type/lesson.type';
import ScheduleModalRegularLessonAllOnceSchedule from './allOnceSchedule/AllOnceSchedule';
import {
  DayType,
  ScheduleInputType,
} from '@features/schedule/type/schedule.type';
import { CustomerLessonListQueryData } from '@features/customer/type/customer.type';
import { getTimeGap } from '@utils/date';
import ScheduleModalRegularLessonIndividualSchedule from './individualSchedule/IndividualSchedule';
import { handleInputArrayValidationCheck } from '@utils/validation';

import { individualCreateFormValidationSet } from '@features/schedule/util/inputFormValidationSet';

const ModalRegularLesson = () => {
  const { mutate } = useScheduleMutation();

  const [customerId, setCustomerId] = useState<string>('');

  // TODO lessonTime은 store에서 꺼내와서 셋팅(일괄 및 개별)

  // 일괄등록
  const [{ scheduleType, lessonType, customer, lesson }, setCommonData] =
    useState({
      scheduleType: 'all' as ScheduleInputType,
      lessonType: 'private' as LessonType,
      customer: [] as unknown as { id: string; name: string }[],
      lesson: '',
    });

  const [{ lessonDateType, lessonTime, coach, court }, setAllOnceData] =
    useState({
      lessonDateType: 'date' as unknown as LessonDateType,
      lessonTime: '20',
      coach: '',
      court: '',
    });

  const [allOnceSchedule, setAllOnceSchedule] = useState([
    {
      date: new Date(),
      day: '',
      startTime: '00:00',
      endTime: `00:${lessonTime}`,
    },
  ]);

  const { data: courtList } = useGetCourtListQuery({ enabled: lesson !== '' });
  const { data: coachList } = useGetCoachListQuery({ enabled: lesson !== '' });

  const { data: lessonList } = useCustomerLessonListQuery({
    id: customer[0]?.id,
    lessonType: lessonType,
  });

  // 개별등록
  const [individualData, setIndividualData] = useState([
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

  const onClickRecentHistoryModalCloseHandler = () => setCustomerId('');

  const onClickSaveCustomerLessonHistoryHandler = (target: any) => {
    const {
      lessonType,
      lessonDateType,
      lessonId,
      coachId,
      courtId,
      date,
      day,
      startTime,
      endTime,
    } = target[0];

    // 수강권
    const isOnLoadLessonItem = lessonList?.find(
      (item: CustomerLessonListQueryData) => item.lessonId === lessonId,
    );

    setCommonData((prev) => ({
      ...prev,
      lessonType: lessonType,
      lesson: isOnLoadLessonItem
        ? isOnLoadLessonItem.id.toString()
        : lessonList![0].id.toString(),
    }));

    const coachItemCheckLoad = coachList?.find(({ id }) => id === coachId);
    const courtItemCheckLoad = courtList?.find(({ id }) => id === courtId);

    setAllOnceData((prev) => ({
      ...prev,
      lessonDateType: lessonDateType,
      lessonTime: getTimeGap(startTime, endTime),
      coach: coachItemCheckLoad
        ? coachItemCheckLoad.id.toString()
        : coachList![0].id.toString(),
      court: courtItemCheckLoad
        ? courtItemCheckLoad.id.toString()
        : courtList![0].id.toString(),
    }));

    setAllOnceSchedule([
      {
        date: new Date(date),
        day: day ?? 'monday',
        startTime: startTime,
        endTime: endTime,
      },
    ]);

    setCustomerId('');
  };

  const { data: isDuplicateList } = useDuplicateCheckScheduleLessonQuery({
    coach: coach,
    court: court,
    schedule: allOnceSchedule,
  });

  const onSubmitAllCreateHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const body = {
      scheduleType,
      lessonType,
      customer,
      lesson,
      lessonDateType,
      lessonTime,
      coach,
      court,
      schedule: allOnceSchedule,
    };

    mutate(body);
  };

  const onSubmitIndividualCreateHandler: FormEventHandler<HTMLFormElement> = (
    e,
  ) => {
    e.preventDefault();

    const individualBody = {
      scheduleType,
      lessonType,
      customer,
      lesson,
      schedule: [...individualData],
    };

    const individualCheck = handleInputArrayValidationCheck(individualBody, {
      ...individualCreateFormValidationSet,
    });

    if (!individualCheck) return;

    mutate(individualBody);
  };

  const submitButtonCheckDisabled =
    lesson === '' || (isDuplicateList && isDuplicateList.length > 0)
      ? true
      : false;

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') e.preventDefault();
    });

    return document.removeEventListener('keydown', (e) => {
      if (e.key === 'Enter') e.preventDefault();
    });
  }, []);

  return (
    <>
      <form
        css={{ display: 'flex', width: '100%', flexDirection: 'column' }}
        onSubmit={
          scheduleType === 'all'
            ? onSubmitAllCreateHandler
            : onSubmitIndividualCreateHandler
        }
      >
        <div css={{ display: 'flex', width: '100%', minHeight: '320px' }}>
          <CommonSchedule
            commonData={{ scheduleType, lessonType, customer, lesson }}
            setCommonData={setCommonData}
            setCustomerId={setCustomerId}
            lessonList={lessonList}
          />
          {
            {
              all: (
                <ScheduleModalRegularLessonAllOnceSchedule
                  allOnceData={{ lessonDateType, lessonTime, coach, court }}
                  setAllOnceData={setAllOnceData}
                  lesson={lesson}
                  courtList={courtList!}
                  coachList={coachList!}
                  allOnceSchedule={allOnceSchedule}
                  setAllOnceSchedule={setAllOnceSchedule}
                  isDuplicateList={isDuplicateList}
                />
              ),
              individual: (
                <ScheduleModalRegularLessonIndividualSchedule
                  lesson={lesson}
                  individualData={individualData}
                  setIndividualData={setIndividualData}
                  lessonList={lessonList}
                  courtList={courtList!}
                  coachList={coachList!}
                />
              ),
            }[scheduleType]
          }
        </div>
        <Button
          type="submit"
          variant="iconBtn"
          label="스케줄 등록하기"
          src={EditWhiteIcon}
          css={{
            width: '160px',
            justifyContent: 'center',
            border: 0,
            backgroundColor: 'var(--business-sub-color)',
            color: 'var(--white100)',
            padding: '16px',
            margin: '24px 0 0 auto',
            borderRadius: '12px',
          }}
          disabled={
            scheduleType === 'all'
              ? submitButtonCheckDisabled
              : lesson === ''
              ? true
              : false
          }
        />
      </form>
      {customerId !== '' && scheduleType === 'all' && (
        <ScheduleModalRecentHistoryModal
          customerId={customerId}
          lessonType={lessonType}
          onClickCloseModalHandler={onClickRecentHistoryModalCloseHandler}
          onClickSaveCustomerLessonHistoryHandler={
            onClickSaveCustomerLessonHistoryHandler
          }
        />
      )}
    </>
  );
};

export default ModalRegularLesson;
