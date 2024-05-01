import { ChangeEvent, useState } from "react";
import ScheduleModalSelect from "../../Select";
import { SetStateAction } from "@/types/index";
import { IndividualFormDataProps } from "@features/schedule/type/regularLesson";

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
  lessonDateType: string;
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
}

const ScheduleModalRegularLessonIndividualScheduleLessonDateTypeSelect = ({ lessonDateType: lessonDateTypeValue, setFormData, disabled }: Props) => {

  const [lessonDateType, setLessonDateType] = useState(lessonDateTypeValue);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setLessonDateType(value);
  };

  return(
    <ScheduleModalSelect
      name='lessonDateType'
      data={data}
      css={{
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px'
      }}
      selected={lessonDateType}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  )
};

export default ScheduleModalRegularLessonIndividualScheduleLessonDateTypeSelect;