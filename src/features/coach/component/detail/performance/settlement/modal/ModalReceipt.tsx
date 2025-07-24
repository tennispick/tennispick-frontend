import { CoachPerformanceData } from '@apis/coach/coach.type';
import { addNumberCommas } from 'src/shared/utils/numberForm';

type Props = {
  salary: number;
  settlement: number;
  totalSales: number;
  individualSales: number;
  tax: {
    totalTax: number;
    nationalPension: number;
    healthInsurance: number;
    employmentInsurance: number;
    workersCompensationInsurance: number;
  };
  performance: CoachPerformanceData;
  totalSettlement: number;
};

const ModalReceipt = ({
  salary,
  totalSales,
  individualSales,
  tax,
  performance,
  totalSettlement,
}: Props) => {
  return (
    <div className="flex gap-5 h-[calc(100%-56px)]">
      <LessonPerformance performance={performance} />
      <Sales
        salary={salary}
        tax={tax}
        totalSales={totalSales}
        individualSales={individualSales}
      />
      <Salary tax={tax} totalSettlement={totalSettlement} />
    </div>
  );
};

const LessonPerformance = ({ performance }: Pick<Props, 'performance'>) => {
  const { lessonCount, lesson, customerAttendance } = performance;
  return (
    <section className="w-1/3 bg-gray-50 rounded-lg p-6">
      <div className="text-lg font-semibold mb-6">이번 달 코치님의 성과</div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>수업 일 수</div>
        <div className="font-semibold">{lessonCount?.[0].lessonDateCount ?? 0} 일</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>강습 횟수</div>
        <div className="font-semibold">{lesson?.[0].regularLessonCount ?? 0} 회</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>보강 횟수</div>
        <div className="font-semibold">{lesson?.[0].additionalLessonCount ?? 0} 회</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>출석 인원 수</div>
        <div className="font-semibold">{customerAttendance?.[0].attendedLessons ?? 0} 명</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>결석 회원 수</div>
        <div className="font-semibold">{customerAttendance?.[0].absentLessons ?? 0} 명</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>출석률</div>
        <div className="font-semibold">{customerAttendance?.[0].attendanceRate ?? 0} %</div>
      </div>
    </section>
  );
};

const Sales = ({
  salary,
  tax,
  totalSales,
  individualSales,
}: Omit<Props, 'settlement' | 'performance' | 'totalSettlement'>) => {
  return (
    <section className="w-1/3 bg-gray-50 rounded-lg p-6">
      <div className="text-lg font-semibold mb-6">이번 달 매출 및 급여</div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>월 기본 급여</div>
        <div className="font-semibold">{addNumberCommas(salary)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>총 매출 인센티브</div>
        <div className="font-semibold">{totalSales} %</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>개별 인센티브</div>
        <div className="font-semibold">{individualSales} %</div>
      </div>
      <div className="text-lg font-semibold my-6">
        공제내역
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>페널티 점수</div>
        <div className="font-semibold">0 점</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>국민연금</div>
        <div className="font-semibold">{addNumberCommas(tax.nationalPension)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>건강보험</div>
        <div className="font-semibold">{addNumberCommas(tax.healthInsurance)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>고용보험</div>
        <div className="font-semibold">{addNumberCommas(tax.employmentInsurance)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>산재보험</div>
        <div className="font-semibold">{addNumberCommas(tax.workersCompensationInsurance)} 원</div>
      </div>
      <div className="border-t border-gray-300 my-6"></div>
    </section>
  );
};

const Salary = ({
  tax,
  totalSettlement,
}: Pick<Props, 'tax' | 'totalSettlement'>) => {
  return (
    <section className="w-1/3 bg-gray-50 rounded-lg p-6">
      <div className="text-lg font-semibold mb-6">이번 달 예상 지급 총액</div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>페널티 점수</div>
        <div className="font-semibold">0 점</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>국민연금</div>
        <div className="font-semibold">{addNumberCommas(tax.nationalPension)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>건강보험</div>
        <div className="font-semibold">{addNumberCommas(tax.healthInsurance)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>고용보험</div>
        <div className="font-semibold">{addNumberCommas(tax.employmentInsurance)} 원</div>
      </div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>산재보험</div>
        <div className="font-semibold">{addNumberCommas(tax.workersCompensationInsurance)} 원</div>
      </div>
      <div className="border-t border-gray-300 my-6"></div>
      <div className="flex items-center justify-between mb-3 pl-6 relative before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-3 before:h-3 before:bg-[url('/icons/arrow/item_list_arrow.svg')] before:bg-contain before:bg-no-repeat before:-translate-x-1/2 before:-translate-y-1/2">
        <div>지급액</div>
        <div className="font-semibold">{addNumberCommas(totalSettlement)} 원</div>
      </div>
    </section>
  );
};

export default ModalReceipt;
