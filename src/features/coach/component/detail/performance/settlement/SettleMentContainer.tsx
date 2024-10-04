import InformationIcon from '@icons/information';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';
import { CenterPaymentState } from '@lib/zustand/center';
import Incentive from './Incentive';
import EstimatedReceipt from './EstimatedReceipt';
import { useState } from 'react';
import useModal from '@hooks/useModal';
import ModalBody from './modal/ModalBody';
import SearchPeriodSelectRow from '../SearchPeriodSelectRow';
import { addNumberCommas, numberZeroFillFormat } from '@utils/numberForm';
import {
  getIncentiveBySales,
  getSalaryApplyTaxRateBySales,
} from '@utils/settlement';
import { useCoachMonthSettlementQuery } from '@features/home/query/salesQuery';
import { lastDayOfMonth, startOfDay } from 'date-fns';
import { getDateToKoreanString } from '@utils/date';

type Props = {
  coachId: string;
  paymentSettingStore: CenterPaymentState;
};

const SettleMentContainer = ({ coachId, paymentSettingStore }: Props) => {
  const {
    salary,
    totalSalesOption,
    totalSales,
    individualSalesOption,
    individualSales,
    insuranceOption,
  } = paymentSettingStore;

  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const lastDay = getDateToKoreanString(
    lastDayOfMonth(startOfDay(new Date(year, month - 1, 1))),
  );

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(Number(e.target.value));

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(Number(e.target.value));

  const { handleShowModal } = useModal({
    type: 'full',
    title: '정산 상세내역',
    children: <ModalBody coachId={coachId} />,
  });

  const { data } = useCoachMonthSettlementQuery(coachId, lastDay);
  const incentive = getIncentiveBySales(
    data?.settlement ?? 0,
    totalSales,
    individualSales,
  );
  const totalTax =
    insuranceOption === 'insuranceNone'
      ? salary * 0.033
      : getSalaryApplyTaxRateBySales(salary).totalTax;

  return (
    <>
      <SearchPeriodSelectRow
        year={year}
        month={month}
        handleYearChange={handleYearChange}
        handleMonthChange={handleMonthChange}
      />
      <InfoField>
        <InfoLabel>월 기본 급여</InfoLabel>
        <div>{addNumberCommas(salary)} 원</div>
      </InfoField>
      <InfoField>
        <InfoLabel className={css({ fontWeight: 600 })}>
          지급 인센티브
        </InfoLabel>
        <div>{addNumberCommas(incentive)} 원</div>
      </InfoField>
      <Incentive
        totalSalesOption={totalSalesOption}
        totalSales={totalSales}
        individualSalesOption={individualSalesOption}
        individualSales={individualSales}
      />
      <InfoField>
        <InfoLabel className={css({ fontWeight: 600 })}>
          {numberZeroFillFormat(month, 2)}월 예상 수령액
        </InfoLabel>
        <div>{addNumberCommas(salary + incentive - totalTax)} 원</div>
      </InfoField>
      <EstimatedReceipt
        salary={salary}
        settlement={data?.settlement ?? 0}
        totalTax={totalTax}
        totalSales={totalSales}
        individualSales={individualSales}
      />
      <div
        className={flex({
          height: '56px',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--blue1200)',
          color: 'var(--blue500)',
          borderRadius: '0.5rem',
          fontWeight: 600,
          padding: '0 1rem',
          cursor: 'pointer',
        })}
        onClick={handleShowModal}
      >
        <InformationIcon fill={'var(--blue500)'} />
        {'정산내역 상세보기 >'}
      </div>
    </>
  );
};

const InfoField = styled('div', {
  base: {
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '2vw',
    margin: '0 0 12px 0',
  },
});
const InfoLabel = styled('div', {
  base: {
    width: '10vw',
  },
});

export default SettleMentContainer;
