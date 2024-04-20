'use client';

import { PageHeader } from '@components/index';
import { Button } from '@components/index';
import { LessonDetailData } from '../type/lesson.type';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import LessonDetailInputField from '../component/LessonDetailInputField';
import { deleteLesson, updateLesson } from '@apis/lesson/lesson.api';
import { FormEvent } from 'react';
import useInput from '@hooks/useInput';
import { useRouter } from 'next/navigation';

type Props = {
  data: LessonDetailData;
};

const LessonDetail = ({ data }: Props) => {
  const router = useRouter();

  const [formData, onChangeFormData, setFormData] = useInput({
    name: {
      value: data.name,
      isRequired: false,
    },
    lessonCount: {
      value: data.lessonCount,
      isRequired: false,
    },
    price: {
      value: data.price,
      isRequired: false,
    },
    isWeekday: {
      value: data.isWeekday,
    },
    type: {
      value: data.type,
    },
    time: {
      value: data.time,
      isRequired: false,
    },
    timesAweek: {
      value: data.timesAweek,
      isRequired: false,
    },
    status: {
      value: data.status,
    },
    description: {
      value: data.description,
    },
  });

  const onClickDeleteLessonHandler = async () =>
    await deleteLesson(`${data.id}`);

  const onClickEditLessonHandler = async (e: FormEvent) => {
    e.preventDefault();

    let isCheck = true;
    const formDataKeys = Object.keys(formData);
    for (const key of formDataKeys) {
      const prevData = { ...formData };
      const item = prevData[key];

      if (item.value === '' && item.isRequired !== undefined) {
        prevData[key].isRequired = true;
        isCheck = false;
      }
      setFormData(prevData);
    }

    if (isCheck) {
      formData.id = data.id;
      const { data: responseData } = await updateLesson(formData);
      if (responseData.affectedRows > 0) {
        alert('수정이 완료되었어요.');
        router.refresh();
      }
    } else return false;
  };

  return (
    <form
      css={{ position: 'relative', height: '100%' }}
      onSubmit={onClickEditLessonHandler}
    >
      <PageHeader
        title={`레슨권: ${data.name}`}
        link='/lesson'
      />
      <div css={{ display: 'flex', height: '88%' }}>
        <LessonDetailInputField
          formData={formData}
          onChangeFormData={onChangeFormData}
        />
        {/* TODO */}
        {/* <>다른 영역</> */}
      </div>
      <div css={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          label={'정보 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 12px 0 0',
          }}
          onClick={onClickDeleteLessonHandler}
        />
        <Button
          type="submit"
          label={'정보 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
          }}
        />
      </div>
    </form>
  );
};

export default LessonDetail;
