'use client';

import { PageHeader } from '@/shared/components/index';
import { Button } from '@/shared/components/index';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import LessonDetailInputField from '../component/LessonDetailInputField';
import { deleteLesson, updateLesson } from '@apis/lesson/lesson.api';
import { FormEvent } from 'react';
import useInput from '@hooks/useInput';
import { useRouter } from 'next/navigation';
import { LessonDetailData } from '../type/lesson.type';

type Props = {
  data: LessonDetailData;
};

const LessonDetailScreen = ({ data }: Props) => {
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
      className="h-full"
      onSubmit={onClickEditLessonHandler}
    >
      <PageHeader title={`레슨권: ${data.name}`} link="/lesson" />
      <div className="flex h-[88%]">
        <LessonDetailInputField
          formData={formData}
          onChangeFormData={onChangeFormData}
        />
      </div>
      <div className="flex justify-end">
        <Button
          label={'정보 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          className="border-0 bg-[var(--red200)] text-[var(--white100)] py-3 px-4 mr-3"
          onClick={onClickDeleteLessonHandler}
        />
        <Button
          type="submit"
          label={'정보 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          className="border-0 bg-[var(--business-active-color)] text-[var(--white100)] py-3 px-4"
        />
      </div>
    </form>
  );
};

export default LessonDetailScreen;
