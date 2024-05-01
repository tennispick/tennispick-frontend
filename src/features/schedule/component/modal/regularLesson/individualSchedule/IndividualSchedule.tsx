import { IndividualFormDataProps } from "@features/schedule/type/regularLesson";
import ScheduleRow from "./ScheduleRow";
import ScheduleTableHeader from "./TableHeader";
import { SetStateAction } from "@/types/index";
import { CourtListData } from '@apis/court/court.type';
import { CoachListData } from '@apis/coach/coach.type';

type Props = {
  lesson: string;
  individualData: IndividualFormDataProps[];
  setIndividualData: SetStateAction<IndividualFormDataProps[]>;
  coachList: CoachListData[];
  courtList: CourtListData[];
}

const ScheduleModalRegularLessonIndividualSchedule = ({ lesson, individualData, setIndividualData, coachList, courtList }: Props) => {

  const isDisabled = lesson === '' ? true : false;

  return (
    <div css={{ width: 'calc(100% - 260px)'}}>
      <ScheduleTableHeader />
      {individualData.map(( data, index ) => {
        return (
          <ScheduleRow
            key={index}
            individualData={data}
            setIndividualData={setIndividualData}
            coachList={coachList}
            courtList={courtList}
            disabled={isDisabled}
          />
        )
      })}
    </div>
  )
};

export default ScheduleModalRegularLessonIndividualSchedule;