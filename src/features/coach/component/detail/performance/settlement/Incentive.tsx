import { totalSalesRadioGroup } from '@features/setting/data/payment';
import { addNumberCommas } from 'src/shared/utils/numberForm';

type Props = {
  totalSalesOption: (typeof totalSalesRadioGroup)[number]['id'];
  totalSales: number;
  individualSalesOption: (typeof totalSalesRadioGroup)[number]['id'];
  individualSales: number;
};

const Incentive = ({
  totalSalesOption,
  totalSales,
  individualSalesOption,
  individualSales,
}: Props) => {
  return (
    <section className="grid h-[76px] bg-gray-50 mb-3 px-4 py-2 rounded-lg">
      <div className="flex items-center">
        <div className="w-[calc(12vw-16px)] text-sm">총 매출 인센티브</div>
        <div className="w-[calc(10vw-16px)] text-sm text-right">{`${addNumberCommas(totalSales)} %`}</div>
      </div>
      <div className="flex items-center">
        <div className="w-[calc(12vw-16px)] text-sm">개별 인센티브</div>
        <div className="w-[calc(10vw-16px)] text-sm text-right">{`${addNumberCommas(individualSales)} %`}</div>
      </div>
    </section>
  );
};

export default Incentive;
