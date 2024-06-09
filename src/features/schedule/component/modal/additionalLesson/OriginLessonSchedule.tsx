import LessonCouponBlackIcon from '@icons/lesson_coupon_black.svg';
import CalendarBlackIcon from '@icons/calendar_black.svg';
import CourtBlackIcon from '@icons/court_black.svg';
import CoachBlackIcon from '@icons/coach_black.svg';
import ItemRow from "./ItemRow";
import { transferSexType } from "@utils/switch";
import ScheduleSelect from "@features/customer/component/detail/modal/scheduleChange/Select";
import { CustomerDetailData } from '@apis/customer/customer.type';

type Props = {
  data: CustomerDetailData;
};

const OriginLessonSchedule = ({ data }: Props) => {

  const { name, birth, sex, phone } = data;
  
  return (
    <section
      css={{
        width: '50%'
      }}
    >
      <ItemRow label="성명" value={name} />
      <ItemRow label="생년월일" value={birth} />
      <ItemRow label="성별" value={transferSexType(sex)} />
      <ItemRow label="연락처" value={phone} />
      <ItemRow
        label="수강권"
        imgSrc={LessonCouponBlackIcon}
        value={phone}
      >
        <ScheduleSelect
          name="1"
          data={[]}
          css={{
            width: 'calc(100% - 152px)'
          }}
          disabled={true}
        />
      </ItemRow>
      <ItemRow
        label="기존 수강날짜"
        imgSrc={CalendarBlackIcon}
        value={phone}
      >
        <ScheduleSelect
          name="1"
          data={[]}
          css={{
            width: 'calc(100% - 152px)'
          }}
          disabled={true}
        />
      </ItemRow>
      <ItemRow
        label="기존 코치"
        value={phone}
        imgSrc={CoachBlackIcon}
      >
        <ScheduleSelect
          name="1"
          data={[]}
          css={{
            width: 'calc(100% - 152px)'
          }}
          disabled={true}
        />
      </ItemRow>
      <ItemRow
        label="기존 코트"
        value={phone}
        imgSrc={CourtBlackIcon}
      >
        <ScheduleSelect
          name="1"
          data={[]}
          css={{
            width: 'calc(100% - 152px)'
          }}
          disabled={true}
        />
      </ItemRow>
    </section>
  )
};

export default OriginLessonSchedule;