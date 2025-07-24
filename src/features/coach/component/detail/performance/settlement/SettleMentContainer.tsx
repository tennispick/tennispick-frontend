import InformationIcon from '@icons/information';
import { CenterPaymentState } from '@lib/zustand/center';
import Incentive from './Incentive';
import EstimatedReceipt from './EstimatedReceipt';
import { FormEventHandler, useState } from 'react';
import useModal from '@hooks/useModal';
import ModalBody from './modal/ModalBody';
import SearchPeriodSelectRow from '../SearchPeriodSelectRow';
import {
  addNumberCommas,
  numberZeroFillFormat,
} from 'src/shared/utils/numberForm';
import {
  getIncentiveBySales,
  getSalaryApplyTaxRateBySales,
} from 'src/shared/utils/settlement';
import { useCoachMonthSettlementQuery } from '@features/home/query/salesQuery';
import { lastDayOfMonth, startOfDay } from 'date-fns';
import { getDateToKoreanString } from 'src/shared/utils/date';
import Button from '@/shared/components/button/Button';
import LayerConfirmModal from '@/shared/components/layer/ConfirmModal';
import Input from '@/shared/components/input/Input';
import { useUpdateCoachIncentiveMutation } from '@features/coach/mutate/coach';

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
      <div className="flex items-center mb-1.5">
        <div className="w-[calc(12vw-16px)] text-sm">월 기본 급여</div>
        <div>{addNumberCommas(salary)} 원</div>
      </div>
      <div className="flex items-center mb-1.5">
        <div className="w-[calc(12vw-16px)] text-sm font-semibold">
          지급 인센티브
        </div>
        <div className="w-[calc(10vw-16px)] text-right">
          {addNumberCommas(incentive)} 원
        </div>
        <Button
          variant="positive"
          size="sm"
          label="인센티브 설정하기"
          className="ml-auto"
          onClick={() => setShowLayerConfirmModal(true)}
        />
      </div>
      <Incentive
        totalSalesOption={totalSalesOption}
        totalSales={totalSales}
        individualSalesOption={individualSalesOption}
        individualSales={individualSales}
      />
      <div className="flex items-center mb-1.5">
        <div className="w-[calc(12vw-16px)] text-sm font-semibold">
          {numberZeroFillFormat(month, 2)}월 예상 수령액
        </div>
        <div className="w-[calc(10vw-16px)] text-right">
          {addNumberCommas(salary + incentive - totalTax)} 원
        </div>
      </div>
      <EstimatedReceipt
        salary={salary}
        settlement={data?.settlement ?? 0}
        totalTax={totalTax}
        totalSales={totalSales}
        individualSales={individualSales}
      />
      <div
        className="flex h-14 items-center gap-2 bg-blue-50 text-blue-500 rounded-lg font-semibold px-4 cursor-pointer"
        onClick={handleShowModal}
      >
        <InformationIcon fill={'#0077F0'} />
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
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2"
            />
          </form>
        </LayerConfirmModal>
      )}
    </>
  );
};

export default SettleMentContainer;
