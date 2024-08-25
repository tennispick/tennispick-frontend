import ScheduleSelect from '../Select';
import { useGetCoachListQuery } from '@features/coach/query/coachQuery';
import { CoachListData } from '@apis/coach/coach.type';
import { useGetCourtListQuery } from '@features/court/query/courtQuery';
import { CourtListData } from '@apis/court/court.type';
import ScheduleContainer from './ScheduleContainer';
import { SetStateAction } from '@/types/index';
import { EditWhiteIcon } from '@icons/index';
import { useDuplicateCheckScheduleLessonQuery } from '@features/schedule/query/scheduleQuery';
import { CustomerLessonScheduleHistoryData } from '@apis/customer/customer.type';
import { isEmptyObj } from '@utils/object';
import { getEndTimeByStartTime } from '@utils/date';
import { css } from 'styled-system/css';
import IconButton from '@components/button/IconButton';

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
        <div className={css({ fontWeight: 600 })}>변경 후 일정</div>
        <div className={css({ margin: '12px 0 8px 0' })}>
          <div className={css({ fontSize: '0.9rem', margin: '0 0 8px 0' })}>
            코치
          </div>
          <ScheduleSelect
            name="coach"
            data={transferCoachListFormat(coachList || [])}
            className={css({
              width: '160px',
              height: '36px',
              borderRadius: '6px',
            })}
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
            className={css({
              margin: '8px 0 0 2px',
              color: 'var(--red200)',
              fontSize: '0.875rem ',
            })}
          >
            예약이 불가능한 날짜에요.
          </div>
        )}
        <div className={css({ margin: '12px 0 8px 0' })}>
          <div className={css({ fontSize: '0.875rem', margin: '0 0 8px 0' })}>
            코트
          </div>
          <ScheduleSelect
            name="court"
            data={transferCourtListFormat(courtList || [])}
            className={css({
              width: '160px',
              height: '36px',
              borderRadius: '6px',
            })}
            selected={formData.court ?? initialSelectedCourt?.id}
            onChangeHandler={onChangeFormData}
            disabled={isSelectedSchedule}
          />
        </div>
        <div className={css({ margin: '12px 0 8px 0' })}>
          <div className={css({ fontSize: '0.875rem', margin: '0 0 8px 0' })}>
            사유 입력
          </div>
          <input
            type="text"
            name="reason"
            placeholder="사유를 입력해주세요."
            className={css({
              width: '100%',
              height: '36px',
              borderRadius: '6px',
              padding: '10px 0 10px 10px',
              fontSize: '0.9rem',
              marginRight: 0,
              border: '1px solid var(--grey300)',
              outline: 0,
              zIndex: '1',
            })}
            disabled={isSelectedSchedule}
            maxLength={200}
          />
        </div>
      </section>
      <IconButton
        iconAlign="left"
        iconAlt="edit icon"
        iconSrc={EditWhiteIcon}
        label={'수강 변경하기'}
        variant="primary"
        size="lg"
        full={true}
        disabled={lessonChangeDisabled}
        className={css({ margin: '24px 0 0 0' })}
      />
    </>
  );
};

export default NewSchedule;
