import ItemRow from './ItemRow';
import ScheduleSelect from '@/이전 파일들/features/customer/component/detail/modal/scheduleChange/Select';
import { useCourtListQuery } from '@/이전 파일들/features/court/query/courtQuery';
import { CourtListData } from 'src/이전 파일들/apis/court/court.type';
import { useGetCoachListQuery } from '@/이전 파일들/features/coach/query/coachQuery';
import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';
import ScheduleWrapper from './ScheduleWrapper';
import { SetStateAction } from 'src/이전 파일들/types/index';
import { css } from 'styled-system/css';

type Props = {
  formData: any;
  onChangeFormData: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setFormData: SetStateAction<any>;
  endTime: string;
};

const AdditionalLessonSchedule = ({
  formData,
  onChangeFormData,
  setFormData,
  endTime,
}: Props) => {
  const { date, startTime, coach: coachId, court: courtId } = formData;

  const { data: courtList } = useCourtListQuery({});
  const { data: coachList } = useGetCoachListQuery({});

  const transferCourtListFormat = (data: CourtListData[]) => {
    const isArrayAble = data.length > 0;
    if (!isArrayAble) return [{ value: '', label: '코트 선택' }];

    return data.map(({ id, name }) => ({ value: `${id}`, label: name }));
  };

  const transferCoachListFormat = (data: CoachListData[]) => {
    const isArrayAble = data.length > 0;
    if (!isArrayAble) return [{ value: '', label: '코치 선택' }];

    return data.map(({ id, name }) => ({ value: `${id}`, label: name }));
  };

  return (
    <section
      className={css({
        width: '50%',
        top: '240px',
        padding: '0 0 0 12px',
      })}
    >
      <ScheduleWrapper
        date={new Date(formData.date ?? date)}
        startTime={startTime}
        endTime={endTime}
        formData={formData}
        onChangeFormData={onChangeFormData}
        setFormData={setFormData}
      />
      <ItemRow label="보강 코치">
        <ScheduleSelect
          name="coach"
          data={transferCoachListFormat(coachList || [])}
          className={css({ width: 'calc(100% - 152px)' })}
          selected={`${coachId}`}
          onChangeHandler={onChangeFormData}
        />
      </ItemRow>
      <ItemRow label="보강 코트">
        <ScheduleSelect
          name="court"
          data={transferCourtListFormat(courtList || [])}
          className={css({ width: 'calc(100% - 152px)' })}
          selected={`${courtId}`}
          onChangeHandler={onChangeFormData}
        />
      </ItemRow>
    </section>
  );
};

export default AdditionalLessonSchedule;
