import LessonCouponBlackIcon from '@icons/lesson_coupon_black.svg';
import CalendarBlackIcon from '@icons/calendar_black.svg';
import CourtBlackIcon from '@icons/court_black.svg';
import CoachBlackIcon from '@icons/coach_black.svg';
import ItemRow from './ItemRow';
import { transferSexType } from 'src/shared/utils/switch';
import ScheduleSelect from '@features/customer/component/detail/modal/scheduleChange/Select';
import { CustomerLessonHistoryData } from '@apis/customer/customer.type';
import { useCustomerDetailQuery } from '@features/customer/query/CustomerQuery';

type Props = {
  customerId: string;
  data: CustomerLessonHistoryData['lessonHistory'];
};

const OriginLessonSchedule = ({
  customerId,
  data: initialCustomerLessonData,
}: Props) => {
  const { data } = useCustomerDetailQuery({
    id: customerId,
  });

  if (!data) return null;

  const { name, birth, sex, phone } = data;
  const { lessonName, date, startTime, endTime, coachName, courtName } =
    initialCustomerLessonData;

  return (
    <section className="w-1/2">
      <ItemRow label="성명" value={name} />
      <ItemRow label="생년월일" value={birth} />
      <ItemRow label="성별" value={transferSexType(sex)} />
      <ItemRow label="연락처" value={phone} />
      <ItemRow label="수강권" imgSrc={LessonCouponBlackIcon} value={phone}>
        <ScheduleSelect
          name="originLessonCoupon"
          data={[{ value: lessonName, label: lessonName }]}
          className="w-[calc(100%-152px)]"
          disabled={true}
        />
      </ItemRow>
      <ItemRow label="기존 수강날짜" imgSrc={CalendarBlackIcon} value={phone}>
        <ScheduleSelect
          name="originDate"
          data={[{ value: date, label: date }]}
          className="w-[calc(100%-152px)]"
          disabled={true}
        />
      </ItemRow>
      <ItemRow label="시작시간" imgSrc={CalendarBlackIcon}>
        <ScheduleSelect
          name="originStartTime"
          data={[{ value: startTime, label: startTime }]}
          className="w-[calc(100%-152px)]"
          disabled={true}
        />
      </ItemRow>
      <ItemRow label="종료시간" imgSrc={CalendarBlackIcon}>
        <ScheduleSelect
          name="originEndTime"
          data={[{ value: endTime, label: endTime }]}
          className="w-[calc(100%-152px)]"
          disabled={true}
        />
      </ItemRow>
      <ItemRow label="기존 코치" imgSrc={CoachBlackIcon}>
        <ScheduleSelect
          name="originCoach"
          data={[{ value: coachName, label: coachName }]}
          className="w-[calc(100%-152px)]"
          disabled={true}
        />
      </ItemRow>
      <ItemRow label="기존 코트" imgSrc={CourtBlackIcon}>
        <ScheduleSelect
          name="originCourt"
          data={[{ value: courtName, label: courtName }]}
          className="w-[calc(100%-152px)]"
          disabled={true}
        />
      </ItemRow>
    </section>
  );
};

export default OriginLessonSchedule;