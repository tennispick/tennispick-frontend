import { ChangeEvent, useState } from "react";
import ScheduleModalSelect from "../../Select";
import { CoachListData } from "@apis/coach/coach.type";

type Props = {
  coach: string;
  coachList: CoachListData[];
}

const ScheduleModalRegularLessonIndividualScheduleCoachSelect = ({ coach, coachList }: Props) => {

  const [coachId, setCoachId] = useState(coach);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setCoachId(value);
  };

  return(
    <ScheduleModalSelect
      name='coach'
      data={[]}
      css={{
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px'
      }}
      selected={coachId}
      onChangeHandler={onChangeHandler}
    />
  )
};

export default ScheduleModalRegularLessonIndividualScheduleCoachSelect;