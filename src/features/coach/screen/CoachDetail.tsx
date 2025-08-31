'use client';

import { PageHeader } from '@/shared/components/index';
import ButtonContainer from '../component/detail/ButtonContainer';
import { useCoachDetailQuery } from '../query/coachQuery';
import Loading from '@/shared/components/common/Loading';
import CoachDetailProfile from '../component/detail/CoachDetailProfile';
import BusinessPerformance from '../component/detail/performance/BusinessPerformance';
import useCenterPaymentSettingStore from '@lib/zustand/center';

type Props = {
  id: string;
};

const CoachDetailScreen = ({ id }: Props) => {
  const { data, isFetching } = useCoachDetailQuery(id);

  const { salary, salaryOption, ...rest } = useCenterPaymentSettingStore();

  if (isFetching) return <Loading />;

  const { name } = data;

  return (
    <div className="w-full h-full">
      <PageHeader title={`${name} 님`} link="/coach" />
      <div className="h-[calc(100%-52px)] overflow-y-auto">
        <div className="flex h-[calc(100%-46px)]">
          <CoachDetailProfile
            coachId={id}
            data={data}
            salary={salary}
            salaryOption={salaryOption}
          />
          <BusinessPerformance
            coachId={id}
            paymentSettingStore={{
              salary:
                salaryOption === 'individualSalary' ? data.salary : salary,
              salaryOption,
              ...rest,
            }}
          />
        </div>
        <ButtonContainer coachId={id} />
      </div>
    </div>
  );
};

export default CoachDetailScreen;
