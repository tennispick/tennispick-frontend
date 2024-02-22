import { FormEvent, useEffect } from 'react';
import useInput from '@hooks/useInput';
import CommonForm from './CommonForm';

import AllOnceCreateInputForm from './AllOnceCreate/InputForm';
import IndividualCreateInputForm from './IndividualCreate/InputForm';

import { Button } from '@components/index';
import { EditWhiteIcon } from '@icons/index';
// import { FormAllOnceCreateType } from '@features/schedule/type/schedule.type';
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

const ModalRegularLesson = () => {

  const { mutate } = useScheduleMutation();

  const { data: courtList } = useGetCourtListQuery();
  const { data: coachList } = useGetCoachListQuery();

  const [commonData, onChangeCommonData, setCommonData] = useInput({
    scheduleType: 'all', // 스케줄 등록유형
    lessonType: 'private', // 레슨유형
    customer: [], // 회원
    lesson: '', // 수강권
  });

  useEffect(() => {
    console.log(commonData.lesson);
  }, [commonData.lesson])

  // 일괄등록
  const [allOnceFormData, onChangeAllOnceFormData, setAllOnceFormData] =
    useInput({
      lessonDateType: 'date', // 강습날짜 유형
      lessonTime: '20', // 강습시간 선택
      weeklyLessonCount: '1', // 주 강습횟수 선택
      coach: '', // 강습코치 선택
      court: '', // 코트(장소) 선택
      schedule: [{
        date: new Date(), // 스케줄 등록유형 (요일, 날짜)
        day: 'monday', // 요일
        startTime: '00:00', // 강습시간
        endTime: '00:20',
      },],
    });

  // 개별등록
  const [
    individualFormData,
    onChangeIndividualFormData,
    setIndividualFormData,
  ] = useInput([
    {
      lessonDateType: 'date', // 강습날짜 유형
      lessonTime: '0', // 강습시간
      weeklyLessonCount: '1', // 주 강습횟수
      coach: '',
      court: '',
      date: new Date(), // 스케줄 등록유형 (요일, 날짜)
      day: 'monday', // 요일
      startTime: '00:00', // 강습시간
      endTime: '00:20',
    },
  ]);

  const { data: lessonList } = useCustomerLessonListQuery({ id: commonData.customer[0]?.id });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { scheduleType } = commonData;

    const allCreateBody = { ...commonData, ...allOnceFormData };
    const individualBody = {
      ...commonData,
      schedule: [...individualFormData],
    };

    if (scheduleType === 'all') {
      const allCheck = handleInputValidationCheck(allCreateBody, {
        ...commonDataValidationSet,
        ...allCreateFormDataValidationSet,
      });
      if (!allCheck) return;
    } else {
      const individualCheck = handleInputArrayValidationCheck(individualBody, {
        ...commonDataValidationSet,
        ...individualCreateFormValidationSet,
      });
      if (!individualCheck) return;
    }

    const body = scheduleType === 'all' ? allCreateBody : individualBody;

    mutate(body);
  };

  return (
    <form id="" css={{ display: 'flex', width: '100%', flexDirection: 'column' }} onSubmit={onSubmit} >
      <div css={{ display: 'flex', width: '100%' }}>
        <CommonForm
          commonData={commonData}
          onChangeCommonData={onChangeCommonData}
          setCommonData={setCommonData}
          lessonList={lessonList}
        />
        {{
          'all':
            <AllOnceCreateInputForm
              scheduleType={commonData.scheduleType}
              lesson={commonData.lesson}
              formData={allOnceFormData}
              onChangeAllCreateFormData={onChangeAllOnceFormData}
              setAllCreateFormData={setAllOnceFormData}
              coachList={coachList}
              courtList={courtList}
            />,
          'individual': 
            <IndividualCreateInputForm
              scheduleType={commonData.scheduleType}
              lesson={commonData.lesson}
              formData={individualFormData}
              onChangeIndividualCreateFormData={onChangeIndividualFormData}
              setIndividualCreateFormData={setIndividualFormData}
            />
        }[commonData.scheduleType as string]}
      </div>
      <Button
        type={'submit'}
        variant={'iconBtn'}
        label={'스케줄 등록하기'}
        src={EditWhiteIcon}
        css={{
          width: '100%',
          justifyContent: 'center',
          border: 0,
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--white100)',
          padding: '12px 16px',
          margin: '24px 0 0 0',
        }}
      />
    </form>
  );
};

export default ModalRegularLesson;
