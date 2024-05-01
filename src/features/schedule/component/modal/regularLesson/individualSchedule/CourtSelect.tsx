import { ChangeEvent, useState } from "react";
import ScheduleModalSelect from "../../Select";
import { CourtListData } from "@apis/court/court.type";

type Props = {
  court: string;
  courtList: CourtListData[];
}

const ScheduleModalRegularLessonIndividualScheduleCourtSelect = ({ court, courtList }: Props) => {

  const [courtId, setCourtId] = useState(court);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setCourtId(value);
  };

  return(
    <ScheduleModalSelect
      name='court'
      data={[]}
      css={{
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px'
      }}
      selected={courtId}
      onChangeHandler={onChangeHandler}
    />
  )
};

export default ScheduleModalRegularLessonIndividualScheduleCourtSelect;