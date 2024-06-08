import ScheduleSelect from '../Select';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { CoachListData } from '@apis/coach/coach.type';
import { useGetCourtListQuery } from '@features/court/query/courtQuery';
import { CourtListData } from '@apis/court/court.type';
import ScheduleContainer from './ScheduleContainer';
import { SetStateAction } from '@/types/index';
import { Button } from '@components/index';
import { EditWhiteIcon } from '@icons/index';
import { useDuplicateCheckScheduleLessonQuery } from '@features/schedule/query/scheduleQuery';
import { CustomerLessonScheduleHistoryData } from '@apis/customer/customer.type';
import { isEmptyObj } from '@utils/object';
import { getEndTimeByStartTime } from '@utils/date';

type Props = {
  formData: any;
  selectSchedule: CustomerLessonScheduleHistoryData;
  onChangeFormData: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setFormData: SetStateAction<any>;
};

const NewSchedule = ({
  formData,
  selectSchedule,
  onChangeFormData,
  setFormData,
}: Props) => {
  const { coachId: initialCoachId, courtId: initialCourtId } = selectSchedule;

  const isSelectedSchedule = isEmptyObj(selectSchedule);
  const { data: coachList } = useGetCoachListQuery({
    enabled: !isSelectedSchedule,
  });
  const { data: courtList } = useGetCourtListQuery({
    enabled: !isSelectedSchedule,
  });

  const transFerEndTime = getEndTimeByStartTime(
    formData.startTime ?? '00:00',
    '20',
  );

  const initialSelectedCoach = coachList?.find(
    ({ id }) => id === initialCoachId,
  );

  const transferCoachListFormat = (data: CoachListData[]) => {
    const isArrayAble = data.length > 0;
    if (!isArrayAble) return [{ value: '', label: '코치 선택' }];

    return data.map(({ id, name }) => ({ value: `${id}`, label: name }));
  };

  const initialSelectedCourt = courtList?.find(
    ({ id }) => id === initialCourtId,
  );

  const transferCourtListFormat = (data: CourtListData[]) => {
    const isArrayAble = data.length > 0;
    if (!isArrayAble) return [{ value: '', label: '코트 선택' }];

    return data.map(({ id, name }) => ({ value: `${id}`, label: name }));
  };

  const { data: isDuplicateList } = useDuplicateCheckScheduleLessonQuery({
    coach: formData.coach,
    court: formData.court,
    schedule: [
      {
        day: selectSchedule.day ?? '',
        date: formData.date,
        startTime: formData.startTime,
        endTime: transFerEndTime,
      },
    ],
  });

  const isDuplicated = () => {
    if (isSelectedSchedule) return false;
    return (
      (isDuplicateList?.length > 0 ?? false) || isDuplicateList === undefined
    );
  };
  const lessonChangeDisabled = isSelectedSchedule || isDuplicated();

  return (
    <>
      <section>
        <div css={{ fontWeight: 600 }}>변경 후 일정</div>
        <div css={{ margin: '12px 0 8px 0' }}>
          <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>코치</div>
          <ScheduleSelect
            name="coach"
            data={transferCoachListFormat(coachList || [])}
            css={{
              width: '160px',
              height: '36px',
              borderRadius: '6px',
            }}
            selected={formData.coach ?? initialSelectedCoach?.id}
            onChangeHandler={onChangeFormData}
            disabled={isSelectedSchedule}
          />
        </div>
        <ScheduleContainer
          disabled={isSelectedSchedule}
          onChangeFormData={onChangeFormData}
          setFormData={setFormData}
          date={new Date(formData.date)}
          startTime={formData.startTime}
          endTime={transFerEndTime}
        />
        {isDuplicated() && (
          <div
            css={{
              margin: '8px 0 0 2px',
              color: 'var(--red200)',
              fontSize: '0.925rem ',
            }}
          >
            예약이 불가능한 날짜에요.
          </div>
        )}
        <div css={{ margin: '12px 0 8px 0' }}>
          <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>코트</div>
          <ScheduleSelect
            name="court"
            data={transferCourtListFormat(courtList || [])}
            css={{
              width: '160px',
              height: '36px',
              borderRadius: '6px',
            }}
            selected={formData.court ?? initialSelectedCourt?.id}
            onChangeHandler={onChangeFormData}
            disabled={isSelectedSchedule}
          />
        </div>
        <div css={{ margin: '12px 0 8px 0' }}>
          <div css={{ fontSize: '0.9rem', margin: '0 0 8px 0' }}>사유 입력</div>
          <input
            type="text"
            name="reason"
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
            disabled={isSelectedSchedule}
            maxLength={200}
          />
        </div>
      </section>
      <Button
        type="submit"
        label="수강 변경하기"
        variant="iconBtn"
        src={EditWhiteIcon}
        css={{
          width: '100%',
          border: 0,
          justifyContent: 'center',
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--white100)',
          padding: '12px 16px',
          margin: '36px 12px 0 0',
        }}
        disabled={lessonChangeDisabled}
      />
    </>
  );
};

export default NewSchedule;
