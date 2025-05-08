import { ChangeEvent, useState } from 'react';
import ScheduleModalSelect from '../../Select';
import { SetStateAction } from 'src/이전 파일들/types/index';
import { IndividualFormDataProps } from '@/이전 파일들/features/schedule/type/regularLesson';
import { LessonDateType } from '@/이전 파일들/features/lesson/type/lesson.type';
import { css } from 'styled-system/css';

const data = [
  {
    value: 'date',
    label: '날짜로 선택',
  },
  {
    value: 'day',
    label: '요일로 선택',
  },
];

type Props = {
  index: number;
  lessonDateType: LessonDateType;
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleLessonDateTypeSelect = ({
  index,
  lessonDateType: lessonDateTypeValue,
  setFormData,
  disabled,
}: Props) => {
  const [lessonDateType, setLessonDateType] =
    useState<LessonDateType>(lessonDateTypeValue);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setLessonDateType(value as LessonDateType);

    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        lessonDateType: value as LessonDateType,
      };
      return newFormData;
    });
  };

  return (
    <ScheduleModalSelect
      name="lessonDateType"
      data={data}
      className={css({
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px',
      })}
      selected={lessonDateType}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonIndividualScheduleLessonDateTypeSelect;
