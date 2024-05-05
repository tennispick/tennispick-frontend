import { ChangeEvent, useState } from "react";
import ScheduleModalSelect from "../../Select";
import { SetStateAction } from "@/types/index";
import { IndividualFormDataProps } from "@features/schedule/type/regularLesson";

const data = [
  {
    value: 'default',
    label: '수강권 시간',
  },
  {
    value: '20',
    label: '20분',
  },
  {
    value: '30',
    label: '30분',
  },
  {
    value: '40',
    label: '40분',
  },
];

type Props = {
  index: number;
  lessonTime: string;
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
}

const ScheduleModalRegularLessonIndividualScheduleLessonTimeSelect = ({ index, lessonTime: lessonTimeValue, setFormData, disabled }: Props) => {

  const [lessonTime, setLessonTime] = useState(lessonTimeValue);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setLessonTime(value);

    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        lessonTime: value,
      };
      return newFormData;
    })
  };

  return(
    <ScheduleModalSelect
      name='lessonTime'
      data={data}
      css={{
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px'
      }}
      selected={lessonTime}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  )
};

export default ScheduleModalRegularLessonIndividualScheduleLessonTimeSelect;