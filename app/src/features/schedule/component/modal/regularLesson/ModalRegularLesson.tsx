import { FormEventHandler, useEffect, useState } from 'react';

import { EditWhiteIcon } from 'app/src/assets/icons/index';
import { useScheduleMutation } from 'app/src/features/schedule/mutation/scheduleMutation';
import { useCustomerLessonListQuery } from 'app/src/features/customer/query/CustomerQuery';
import { useCourtListQuery } from 'app/src/features/court/query/courtQuery';
import { useGetCoachListQuery } from 'app/src/features/coach/query/coachQuery';
import { useDuplicateCheckScheduleLessonQuery } from 'app/src/features/schedule/query/scheduleQuery';

import ScheduleModalRecentHistoryModal from '../recentHistoryModal/RecentHistoryModal';

import CommonSchedule from './commonSchedule/CommonSchedule';
import { LessonDateType, LessonType } from 'app/src/features/lesson/type/lesson.type';
import ScheduleModalRegularLessonAllOnceSchedule from './allOnceSchedule/AllOnceSchedule';
import {
  DayType,
  ScheduleInputType,
} from 'app/src/features/schedule/type/schedule.type';
import { CustomerLessonListQueryData } from 'app/src/features/customer/type/customer.type';
import { getTimeGap } from 'app/src/utils/date';
import ScheduleModalRegularLessonIndividualSchedule from './individualSchedule/IndividualSchedule';
import { handleInputArrayValidationCheck } from 'app/src/utils/validation';

import { individualCreateFormValidationSet } from 'app/src/features/schedule/util/inputFormValidationSet';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';
import IconButton from 'app/src/components/button/IconButton';

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

  const { data: courtList } = useCourtListQuery({ enabled: lesson !== '' });
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

  const handleCloseModal = () => setCustomerId('');

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
        className={flex({
          flexDirection: 'column',
          width: '100%',
          height: 'calc(100% - 68px)',
          backgroundColor: 'var(--white100)',
          padding: '24px',
          borderRadius: '12px',
        })}
        onSubmit={
          scheduleType === 'all'
            ? onSubmitAllCreateHandler
            : onSubmitIndividualCreateHandler
        }
      >
        <div
          className={flex({ width: '100%', height: 'calc(100% - 2.75rem)' })}
        >
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
        <div
          className={flex({
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '2.75rem',
          })}
        >
          <div
            className={css({
              fontSize: '0.925rem',
              color: 'var(--business-color)',
            })}
          >
            <span className={css({ fontWeight: 600 })}>
              &#45; 회원이 검색되지 않는 경우, 결제가 진행되었는지 우선
              확인해주세요.
            </span>
            <span className={css({ margin: '0 0 0 8px' })}>
              결제방법: {`회원 관리 > 회원 선택 > 결제하기`}
            </span>
          </div>
          <IconButton
            type="submit"
            iconAlign="left"
            iconAlt="create legular lesson"
            iconSrc={EditWhiteIcon}
            size="lg"
            variant="primary"
            label={'스케줄 등록하기'}
            disabled={
              scheduleType === 'all'
                ? submitButtonCheckDisabled
                : lesson === ''
                  ? true
                  : false
            }
          />
        </div>
      </form>
      {customerId !== '' && scheduleType === 'all' && (
        <ScheduleModalRecentHistoryModal
          customerId={customerId}
          lessonType={lessonType}
          handleCloseModal={handleCloseModal}
          onClickSaveCustomerLessonHistoryHandler={
            onClickSaveCustomerLessonHistoryHandler
          }
        />
      )}
    </>
  );
};

export default ModalRegularLesson;
