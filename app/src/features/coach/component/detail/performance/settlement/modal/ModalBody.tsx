import { css } from 'styled-system/css';
import ModalSearchPeriod from './ModalSearchPeriod';
import { useState } from 'react';
import ModalReceipt from './ModalReceipt';
import { getDateToKoreanString } from 'app/src/utils/date';
import { lastDayOfMonth, startOfDay } from 'date-fns';
import { useCoachMonthSettlementQuery } from 'app/src/features/home/query/salesQuery';
import { getSalaryApplyTaxRateBySales } from 'app/src/utils/settlement';
import { useCoachPerformanceQuery } from 'app/src/features/coach/query/coachQuery';

type Props = {
  coachId: string;
  salary: number;
  totalSales: number;
  individualSales: number;
  insuranceOption: string;
};

const ModalBody = ({
  coachId,
  salary,
  totalSales,
  individualSales,
  insuranceOption,
}: Props) => {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);

  const startDay = startOfDay(new Date(year, month - 1, 1));
  const startDate = getDateToKoreanString(startDay);
  const lastDate = getDateToKoreanString(lastDayOfMonth(startDay));

  const { data } = useCoachMonthSettlementQuery(coachId, lastDate);

  const { data: performance } = useCoachPerformanceQuery(
    coachId,
    startDate,
    lastDate,
  );

  const tax = getSalaryApplyTaxRateBySales(salary);
  const totalTax =
    insuranceOption === 'insuranceNone' ? salary * 0.033 : tax.totalTax;

  const totalSettlement = salary - totalTax;

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(Number(e.target.value));

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(Number(e.target.value));

  return (
    <div
      className={css({
        height: 'calc(100% - 66px)',
        backgroundColor: 'var(--white100)',
        borderRadius: '8px',
        padding: '24px',
      })}
    >
      <ModalSearchPeriod
        year={year}
        month={month}
        handleYearChange={handleYearChange}
        handleMonthChange={handleMonthChange}
      />
      <ModalReceipt
        salary={salary}
        settlement={data?.settlement ?? 0}
        totalSales={totalSales}
        individualSales={individualSales}
        tax={tax}
        performance={performance}
        totalSettlement={totalSettlement}
      />
    </div>
  );
};

export default ModalBody;
