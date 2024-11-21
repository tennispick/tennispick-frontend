import { ChangeEvent, useEffect, useState } from 'react';
import ScheduleModalSelect from '../../Select';
import { CoachListData } from 'app/src/apis/coach/coach.type';
import { SetStateAction } from 'app/src/types/index';
import { IndividualFormDataProps } from 'app/src/features/schedule/type/regularLesson';
import { css } from 'styled-system/css';

type Props = {
  index: number;
  coach: string;
  data: CoachListData[];
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleCoachSelect = ({
  index,
  coach,
  data,
  setFormData,
  disabled,
}: Props) => {
  const [coachId, setCoachId] = useState(coach);

  const transferCoachListFormat = (data: CoachListData[]) =>
    data.map(({ id, name }) => ({ value: `${id}`, label: name }));

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setCoachId(value);

    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        coach: value,
      };
      return newFormData;
    });
  };

  useEffect(() => {
    setCoachId(coach);
  }, [coach]);

  useEffect(() => {
    if (data && data.length > 0) {
      setFormData((prev) => {
        const newFormData = [...prev];
        newFormData[index] = {
          ...newFormData[index],
          coach: data[0].id.toString(),
        };
        return newFormData;
      });
    }
  }, [data, setFormData]);

  return (
    <ScheduleModalSelect
      name="coach"
      data={
        data!.length > 0
          ? transferCoachListFormat(data!)
          : [{ value: '', label: '코치 선택' }]
      }
      className={css({
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px',
      })}
      selected={coachId}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonIndividualScheduleCoachSelect;
