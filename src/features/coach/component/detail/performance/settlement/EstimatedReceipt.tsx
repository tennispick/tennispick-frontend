import { addNumberCommas } from 'src/shared/utils/numberForm';

type Props = {
  salary: number;
  settlement: number;
  totalTax: number;
  totalSales: number;
  individualSales: number;
};

const EstimatedReceipt = ({
  salary,
  settlement,
  totalTax,
  totalSales,
  individualSales,
}: Props) => {
  return (
    <section className="grid h-[40%] bg-gray-50 mb-3 px-4 py-2 rounded-lg">
      <div className="font-semibold">고정 지급 항목</div>
      <div>
        <div className="flex items-center mb-1.5">
          <div className="w-[calc(12vw-16px)] text-sm">급여</div>
          <div className="w-[calc(10vw-16px)] text-sm text-right">{`${addNumberCommas(salary)} 원`}</div>
        </div>
      </div>
      <div className="font-semibold">변동 지급 항목</div>
      <div>
        <div className="flex items-center mb-1.5">
          <div className="w-[calc(12vw-16px)] text-sm">총 매출 인센티브</div>
          <div className="w-[calc(10vw-16px)] text-sm text-right">{`${addNumberCommas(totalSales)} %`}</div>
        </div>
        <div className="flex items-center mb-1.5">
          <div className="w-[calc(12vw-16px)] text-sm">개별 인센티브</div>
          <div className="w-[calc(10vw-16px)] text-sm text-right">{`${addNumberCommas(individualSales)} %`}</div>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-1.5">
          <div className="w-[calc(12vw-16px)] text-sm">매출</div>
          <div className="w-[calc(10vw-16px)] text-sm text-right">{`${addNumberCommas(settlement)} 원`}</div>
        </div>
        <div className="flex items-center mb-1.5">
          <div className="w-[calc(12vw-16px)] text-sm">공제내역</div>
          <div className="w-[calc(10vw-16px)] text-sm text-right">{`- ${addNumberCommas(totalTax)} 원`}</div>
        </div>
      </div>
    </section>
  );
};

export default EstimatedReceipt;
