import {
  PageHeader,
  BusinessPerformance,
  CoachCustomerList,
  PersonalData,
} from '@components/index';
import CoachDetailInfoContainer from '../component/detail/InfoContainer';
import ButtonContainer from '../component/detail/ButtonContaier';
import { useCoachDetailQuery } from '../query/coachQuery';
import Loading from '@components/common/Loading';

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
      <div css={{ display: 'flex', height: 'calc(90% - 24px)' }}>
        <PersonalData data={data} />
        <div css={{ width: '70%', height: '100%' }}>
          <BusinessPerformance />
          <CoachCustomerList />
        </div>
      </div>
      <CoachDetailInfoContainer coachId={coachId} />
      <ButtonContainer coachId={coachId} />
    </>
  );
};

export default CoachDetailScreen;
