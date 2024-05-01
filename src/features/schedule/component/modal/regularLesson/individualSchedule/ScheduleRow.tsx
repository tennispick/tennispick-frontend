import { IndividualFormDataProps } from "@features/schedule/type/regularLesson";
import CoachSelect from "./CoachSelect";
import CourtSelect from "./CourtSelect";
import LessonDateTypeSelect from "./LessonDateTypeSelect";
import LessonTimeSelect from "./LessonTimeSelect";
import ScheduleContainer from "./ScheduleContainer";
import { SetStateAction } from "@/types/index";
import { CourtListData } from '@apis/court/court.type';
import { CoachListData } from '@apis/coach/coach.type';

type Props = {
  individualData: IndividualFormDataProps;
  setIndividualData: SetStateAction<IndividualFormDataProps[]>;
  coachList: CoachListData[];
  courtList: CourtListData[];
  disabled: boolean;
}

const ScheduleModalRegularLessonIndividualScheduleRow = ({ individualData, setIndividualData, coachList, courtList, disabled }: Props) => {

  const { lessonDateType, lessonTime, coach, court, ...schedule } = individualData;

  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 16px 0',
        padding: '12px 0',

        div: {
          padding: '0 0 0 8px',
        },
      }}
    >
      <LessonDateTypeSelect
        lessonDateType={lessonDateType}
        setFormData={setIndividualData}
        disabled={disabled}
      />
      <LessonTimeSelect
        lessonTime={lessonTime}
        setFormData={setIndividualData}
        disabled={disabled}
      />
      <CoachSelect
        coach={coach}
        coachList={coachList}
      />
      <CourtSelect
        court={court}
        courtList={courtList}
      />
      <ScheduleContainer />
    </div>
  )
};

export default ScheduleModalRegularLessonIndividualScheduleRow;