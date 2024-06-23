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

  // 탭으로해서 매출내역, 정산내역, 수강생목록 보기를 만들자

  return (
    <>
      <PageHeader title={`${name} 님`} link="/coach" />
      <div css={{ display: 'flex', height: 'calc(90% - 24px)' }}>
        <PersonalData data={data} />
        <div css={{ width: '70%', height: '100%' }}>
          <BusinessPerformance coachId={coachId} />
          <CoachCustomerList />
        </div>
      </div>
      <CoachDetailInfoContainer coachId={coachId} />
      <ButtonContainer coachId={coachId} />
    </>
  );
};

export default CoachDetailScreen;
