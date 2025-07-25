import OriginLessonSchedule from './OriginLessonSchedule';
import AdditionalLessonSchedule from './AdditionalLessonSchedule';
import { CustomerLessonHistoryData } from '@apis/customer/customer.type';
import ButtonContainer from './ButtonContainer';
import useInput from '@hooks/useInput';

import { useDuplicateCheckScheduleLessonQuery } from '@features/schedule/query/scheduleQuery';
import { getEndTimeByStartTime } from 'src/shared/utils/date';

type Props = {
  customerId: string;
  data: CustomerLessonHistoryData['lessonHistory'];
  handleCloseModal: () => void;
};

const ScheduleLessonContainer = ({
  customerId,
  data: customerLessonData,
  handleCloseModal,
}: Props) => {
  const [formData, onChangeFormData, setFormData] = useInput({
    coach: customerLessonData.coachId,
    court: customerLessonData.courtId,
    date: customerLessonData.date,
    startTime: customerLessonData.startTime,
    endTime: customerLessonData.endTime,
  });

  // TODO Server State Lesson Time
  const transFerEndTime = getEndTimeByStartTime(
    formData.startTime ?? '00:00',
    '20',
  );

  const { data: isDuplicateList } = useDuplicateCheckScheduleLessonQuery({
    coach: formData.coach,
    court: formData.court,
    schedule: [
      {
        day: customerLessonData.day ?? '',
        date: new Date(formData.date),
        startTime: formData.startTime,
        endTime: transFerEndTime,
      },
    ],
  });

  const isDuplicated = isDuplicateList?.length > 0;

  return (
    <>
      <div className="flex">
        <OriginLessonSchedule
          customerId={customerId}
          data={customerLessonData}
        />
        <AdditionalLessonSchedule
          formData={formData}
          onChangeFormData={onChangeFormData}
          setFormData={setFormData}
          endTime={transFerEndTime}
        />
      </div>
      {isDuplicated && (
        <div className="text-red-500 pt-2 pb-4 pr-2 text-right">
          예약이 불가능한 날짜에요.
        </div>
      )}
      <ButtonContainer
        onClickCloseModalHandler={handleCloseModal}
        disabled={isDuplicated}
      />
    </>
  );
};

export default ScheduleLessonContainer;
