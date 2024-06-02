import { CustomerLessonScheduleHistoryData } from "@apis/customer/customer.type";
import ScheduleSelect from "./Select";
import { useGetCoachListQuery } from "@features/coach/query/coachQuery";

type Props = {
  selectSchedule: CustomerLessonScheduleHistoryData;
}

const NewSchedule = ({ selectSchedule }: Props) => {

  console.log(selectSchedule);

  // 코치, 날짜, 시간, 코트, 사유 입력
  const { data } = useGetCoachListQuery({ });
  console.log(data);

  return (
    <section>
      <div css={{ fontWeight: 600 }}>변경 후 일정</div>
      <div css={{ margin: '12px 0 8px 0'}}>
        <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>코치</div>
        <ScheduleSelect
          name='coach'
          data={[]}
          css={{
            width: '160px',
            height: '36px',
            borderRadius: '6px'
          }}
          onChangeHandler={() => {}}
        />
      </div>
      <div css={{ margin: '12px 0 8px 0'}}>
        <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>날짜</div>
        <ScheduleSelect
          name='coach'
          data={[]}
          css={{
            width: '160px',
            height: '36px',
            borderRadius: '6px'
          }}
          onChangeHandler={() => {}}
        />
      </div>
      <div css={{ margin: '12px 0 8px 0'}}>
        <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>시간</div>
        <ScheduleSelect
          name='coach'
          data={[]}
          css={{
            width: '160px',
            height: '36px',
            borderRadius: '6px'
          }}
          onChangeHandler={() => {}}
        />
      </div>
      <div css={{ margin: '12px 0 8px 0'}}>
        <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>사유 입력</div>
        <input
          type="text"
          placeholder="사유를 입력해주세요."
          css={{
            width: '100%',
            height: '36px',
            borderRadius: '6px',
            padding: '10px 0 10px 10px',
            fontSize: '0.9rem',
            marginRight: 0,
            border: '1px solid var(--grey300)',
            outline: 0,
            zIndex: '1',
          }}
        />
      </div>
    </section>
  )
};

export default NewSchedule;