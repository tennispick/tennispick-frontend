import { CustomerLessonHistoryData } from "@apis/customer/customer.type";
import AdditionalLessonSchedule from "./AdditionalLessonSchedule";

type Props = {
  data: CustomerLessonHistoryData['lessonHistory'];
}

const ScheduleContainer = ({ data: initialData }: Props) => {

  console.log(initialData);

      // const {
    //   lessonType,
    //   lessonDateType,
    //   lessonId,
    //   coachId,
    //   courtId,
    //   date,
    //   day,
    //   startTime,
    //   endTime,
    // } = target[0];

  // const { data } = useCustomerDetailQuery({
  //   id: customerId,
  // });

  if(!initialData) return null;

  return (
    <>
      <div css={{ display: 'flex' }}>
        {/* <OriginLessonSchedule
          data={initialData}
        /> */}
        <AdditionalLessonSchedule
        />
      </div>
    </>
  )
};

export default ScheduleContainer;