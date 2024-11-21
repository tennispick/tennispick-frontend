'use client';

import { PageHeader } from 'app/src/components/index';
import ButtonContainer from '../component/detail/ButtonContainer';
import { useCoachDetailQuery } from '../query/coachQuery';
import Loading from 'app/src/components/common/Loading';
import CoachDetailProfile from '../component/detail/CoachDetailProfile';
import BusinessPerformance from '../component/detail/performance/BusinessPerformance';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import useCenterPaymentSettingStore from 'app/src/lib/zustand/center';
type Props = {
  id: string;
};

const CoachDetailScreen = ({ id }: Props) => {
  const { data, isFetching } = useCoachDetailQuery(id);

  const { salary, salaryOption, ...rest } = useCenterPaymentSettingStore();

  if (isFetching) return <Loading />;

  const { name } = data;

  return (
    <div className={css({ width: '100%', height: '100%' })}>
      <PageHeader title={`${name} 님`} link="/coach" />
      <div className={css({ height: 'calc(100% - 52px)', overflowY: 'auto' })}>
        <div className={flex({ height: 'calc(100% - 46px)' })}>
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
