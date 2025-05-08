import InformationIcon from 'src/이전 파일들/assets/icons/information';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';
import { CenterPaymentState } from 'src/이전 파일들/lib/zustand/center';
import Incentive from './Incentive';
import EstimatedReceipt from './EstimatedReceipt';
import { FormEventHandler, useState } from 'react';
import useModal from 'src/이전 파일들/hooks/useModal';
import ModalBody from './modal/ModalBody';
import SearchPeriodSelectRow from '../SearchPeriodSelectRow';
import {
  addNumberCommas,
  numberZeroFillFormat,
} from 'src/이전 파일들/utils/numberForm';
import {
  getIncentiveBySales,
  getSalaryApplyTaxRateBySales,
} from 'src/이전 파일들/utils/settlement';
import { useCoachMonthSettlementQuery } from '@/이전 파일들/features/home/query/salesQuery';
import { lastDayOfMonth, startOfDay } from 'date-fns';
import { getDateToKoreanString } from 'src/이전 파일들/utils/date';
import Button from 'src/이전 파일들/components/button/Button';
import LayerConfirmModal from 'src/이전 파일들/components/layer/ConfirmModal';
import Input from 'src/이전 파일들/components/input/Input';
import { useUpdateCoachIncentiveMutation } from '@/이전 파일들/features/coach/mutate/coach';

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
  const [showLayerConfirmModal, setShowLayerConfirmModal] = useState(false);

  const lastDay = getDateToKoreanString(
    lastDayOfMonth(startOfDay(new Date(year, month - 1, 1))),
  );

  const handleMutationSettled = () => setShowLayerConfirmModal(false);

  const { data } = useCoachMonthSettlementQuery(coachId, lastDay);
  const { mutate } = useUpdateCoachIncentiveMutation(
    coachId,
    handleMutationSettled,
  );

  const incentive = getIncentiveBySales(
    data?.settlement ?? 0,
    totalSales,
    individualSales,
  );

  const tax = getSalaryApplyTaxRateBySales(salary);
  const totalTax =
    insuranceOption === 'insuranceNone' ? salary * 0.033 : tax.totalTax;

  // TODO 개별적용이냐, 전체적용이냐
  const { handleShowModal } = useModal({
    type: 'full',
    title: '정산 상세내역',
    children: (
      <ModalBody
        coachId={coachId}
        salary={salary}
        totalSales={totalSales}
        individualSales={individualSales}
        insuranceOption={insuranceOption}
      />
    ),
  });

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(Number(e.target.value));

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(Number(e.target.value));

  const handleSetIncentive: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const incentive = Number(formData.get('incentive'));
    if (isNaN(incentive)) {
      alert('숫자만 입력해주세요.');
      return;
    }

    if (incentive < 0) {
      alert('0보다 큰 숫자를 입력해주세요.');
      return;
    }

    mutate(formData);
  };

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
        <div
          className={css({ width: 'calc(10vw - 16px)', textAlign: 'right' })}
        >
          {addNumberCommas(incentive)} 원
        </div>
        <Button
          variant="positive"
          size="sm"
          label="인센티브 설정하기"
          className={css({ marginLeft: 'auto' })}
          onClick={() => setShowLayerConfirmModal(true)}
        />
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
        <div
          className={css({ width: 'calc(10vw - 16px)', textAlign: 'right' })}
        >
          {addNumberCommas(salary + incentive - totalTax)} 원
        </div>
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
      {showLayerConfirmModal && (
        <LayerConfirmModal
          formId="incentiveForm"
          title="인센티브 설정"
          subTitle="코치님의 개별 인센티브를 설정해주세요."
          onCancelHandler={() => setShowLayerConfirmModal(false)}
        >
          <form id="incentiveForm" onSubmit={handleSetIncentive}>
            <Input
              type="text"
              name="incentive"
              placeholder="인센티브를 입력해주세요."
              className={css({
                width: '100%',
                fontSize: '0.925rem',
                border: '1px solid var(--grey300)',
                borderRadius: '8px',
                padding: '10px 32px 10px 12px',
              })}
            />
          </form>
        </LayerConfirmModal>
      )}
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
