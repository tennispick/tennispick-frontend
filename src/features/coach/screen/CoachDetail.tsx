import { PageHeader } from '@components/index';
import ButtonContainer from '../component/detail/ButtonContainer';
import { useCoachDetailQuery } from '../query/coachQuery';
import Loading from '@components/common/Loading';
import CoachDetailProfile from '../component/detail/CoachDetailProfile';
import BusinessPerformance from '../component/detail/performance/BusinessPerformance';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  coachId: string;
};

const CoachDetailScreen = ({ coachId }: Props) => {
  const { data, isFetching } = useCoachDetailQuery(coachId);

  if (isFetching) return <Loading />;

  const { name } = data;

  return (
    <>
      <PageHeader title={`${name} 님`} link="/coach" />
      <div className={css({ height: 'calc(100% - 52px)', overflowY: 'auto' })}>
        <div className={flex({ height: 'calc(100% - 46px)' })}>
          <CoachDetailProfile data={data} />
          <BusinessPerformance coachId={coachId} />
        </div>
        <ButtonContainer coachId={coachId} />
      </div>
    </>
  );
};

export default CoachDetailScreen;
