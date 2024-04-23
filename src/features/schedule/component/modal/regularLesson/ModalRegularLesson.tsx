import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import useInput from '@hooks/useInput';
import CommonForm from './CommonForm';

import AllOnceCreateInputForm from './AllOnceCreate/InputForm';
import IndividualCreateInputForm from './IndividualCreate/InputForm';

import { Button } from '@components/index';
import { EditWhiteIcon } from '@icons/index';
import {
  handleInputValidationCheck,
  handleInputArrayValidationCheck,
} from '@utils/validation';
import {
  commonDataValidationSet,
  allCreateFormDataValidationSet,
  individualCreateFormValidationSet,
} from '@features/schedule/util/inputFormValidationSet';
import { useScheduleMutation } from '@features/schedule/mutation/scheduleMutation';
import { useCustomerLessonListQuery } from '@features/customer/query/CustomerQuery';
import { useGetCourtListQuery } from '@features/court/query/courtQuery';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { useDuplicateCheckScheduleLessonQuery } from '@features/schedule/query/scheduleQuery';

import ScheduleModalRecentHistoryModal from '../recentHistoryModal/RecentHistoryModal';

import CommonSchedule from './commonSchedule/CommonSchedule';
import { LessonDateType, LessonType } from '@features/lesson/type/lesson.type';
import ScheduleModalRegularLessonAllOnceSchedule from './allOnceSchedule/AllOnceSchedule';
import { ScheduleInputType } from '@features/schedule/type/schedule.type';
import { CustomerLessonListQueryData } from '@features/customer/type/customer.type';

const ModalRegularLesson = () => {
  const { mutate } = useScheduleMutation();

  // const [commonData, onChangeCommonData, setCommonData] = useInput({
  //   scheduleType: 'all', // 스케줄 등록유형
  //   lessonType: 'private', // 레슨유형
  //   customer: [], // 회원
  //   lesson: '', // 수강권
  // });

  // // 일괄등록
  // const [allOnceFormData, onChangeAllOnceFormData, setAllOnceFormData] =
  //   useInput({
  //     lessonDateType: 'date', // 강습날짜 유형
  //     lessonTime: '20', // 강습시간 선택
  //     weeklyLessonCount: '1', // 주 강습횟수 선택
  //     coach: '', // 강습코치 선택
  //     court: '', // 코트(장소) 선택
  //     schedule: [
  //       {
  //         date: new Date(), // 스케줄 등록유형 (요일, 날짜)
  //         day: 'monday', // 요일
  //         startTime: '00:00', // 강습시간
  //         endTime: '00:20',
  //       },
  //     ],
  //   });

  // // 개별등록
  // const [
  //   individualFormData,
  //   onChangeIndividualFormData,
  //   setIndividualFormData,
  // ] = useInput([
  //   {
  //     lessonDateType: 'date', // 강습날짜 유형
  //     lessonTime: '0', // 강습시간
  //     weeklyLessonCount: '1', // 주 강습횟수
  //     coach: '',
  //     court: '',
  //     date: new Date(), // 스케줄 등록유형 (요일, 날짜)
  //     day: 'monday', // 요일
  //     startTime: '00:00', // 강습시간
  //     endTime: '00:20',
  //   },
  // ]);

  // const { data: isDuplicateList } = useDuplicateCheckScheduleLessonQuery({
  //   coach: allOnceFormData.coach,
  //   court: allOnceFormData.court,
  //   schedule:
  //     commonData.scheduleType === 'all'
  //       ? allOnceFormData.schedule
  //       : individualFormData,
  // });

  // const { data: lessonList } = useCustomerLessonListQuery({
  //   id: commonData.customer[0]?.id,
  //   lessonType: commonData.lessonType,
  // });

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const { scheduleType } = commonData;

  //   const allCreateBody = { ...commonData, ...allOnceFormData };
  //   const individualBody = {
  //     ...commonData,
  //     schedule: [...individualFormData],
  //   };

  //   if (scheduleType === 'all') {
  //     const allCheck = handleInputValidationCheck(allCreateBody, {
  //       ...commonDataValidationSet,
  //       ...allCreateFormDataValidationSet,
  //     });
  //     if (!allCheck) return;
  //   } else {
  //     const individualCheck = handleInputArrayValidationCheck(individualBody, {
  //       ...commonDataValidationSet,
  //       ...individualCreateFormValidationSet,
  //     });
  //     if (!individualCheck) return;
  //   }

  //   const body = scheduleType === 'all' ? allCreateBody : individualBody;

  //   mutate(body);
  // };

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') e.preventDefault();
    });

    return document.removeEventListener('keydown', (e) => {
      if (e.key === 'Enter') e.preventDefault();
    });
  }, []);

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const [customerId, setCustomerId] = useState<string>('');

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

  const { data: courtList } = useGetCourtListQuery();
  const { data: coachList } = useGetCoachListQuery();

  const { data: lessonList } = useCustomerLessonListQuery({
    id: customer[0]?.id,
    lessonType: lessonType,
  });

  // 개별등록
  const [] = useState();

  const onClickRecentHistoryModalCloseHandler = () => setCustomerId('');

  const onClickSaveCustomerLessonHistoryHandler = (target: any) => {
    console.log(target[0]);
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

    const isOnLoadLessonItem = lessonList?.find(
      (item: CustomerLessonListQueryData) => item.lessonId === lessonId,
    );
    const isOnLoadCoachItem = coachList?.find(({ id }) => id === coachId);
    const isOnLoadCourtItem = courtList?.find(({ id }) => id === courtId);

    setCommonData((prev) => ({
      ...prev,
      lesson: isOnLoadLessonItem
        ? isOnLoadLessonItem.id.toString()
        : lessonList![0].id.toString(),
    }));

    // TODO
    // 강습날짜 유형
    // 강습시간 선택
    setAllOnceData((prev) => ({
      ...prev,
      coach: isOnLoadCoachItem
        ? isOnLoadCoachItem.id.toString()
        : coachList![0].id.toString(),
      court: isOnLoadCourtItem
        ? isOnLoadCourtItem.id.toString()
        : courtList![0].id.toString(),
    }));

    setCustomerId('');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
  };

  return (
    <>
      <form
        css={{ display: 'flex', width: '100%', flexDirection: 'column' }}
        onSubmit={onSubmit}
      >
        <div css={{ display: 'flex', width: '100%', minHeight: '320px' }}>
          <CommonSchedule
            commonData={{ scheduleType, lessonType, customer, lesson }}
            setCommonData={setCommonData}
            setCustomerId={setCustomerId}
            lessonList={lessonList}
          />
          <ScheduleModalRegularLessonAllOnceSchedule
            allOnceData={{ lessonDateType, lessonTime, coach, court }}
            setAllOnceData={setAllOnceData}
            courtList={courtList!}
            coachList={coachList!}
          />
          {/* <CommonForm
            commonData={commonData}
            onChangeCommonData={onChangeCommonData}
            setCommonData={setCommonData}
            lessonList={lessonList}
            allOnceFormData={allOnceFormData}
            setAllOnceFormData={setAllOnceFormData}
            coachList={coachList}
            courtList={courtList}
          />
          {
            {
              all: (
                <AllOnceCreateInputForm
                  scheduleType={commonData.scheduleType}
                  lesson={commonData.lesson}
                  formData={allOnceFormData}
                  onChangeAllCreateFormData={onChangeAllOnceFormData}
                  setAllCreateFormData={setAllOnceFormData}
                  coachList={coachList}
                  courtList={courtList}
                  isDuplicateList={isDuplicateList}
                />
              ),
              individual: (
                <IndividualCreateInputForm
                  scheduleType={commonData.scheduleType}
                  lesson={commonData.lesson}
                  formData={individualFormData}
                  onChangeIndividualCreateFormData={onChangeIndividualFormData}
                  setIndividualCreateFormData={setIndividualFormData}
                />
              ),
            }[commonData.scheduleType as string]
          } */}
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
          // disabled={isDuplicateList && isDuplicateList.length > 0 ? true : false}
        />
      </form>
      {customerId !== '' && (
        <ScheduleModalRecentHistoryModal
          customerId={customerId}
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
