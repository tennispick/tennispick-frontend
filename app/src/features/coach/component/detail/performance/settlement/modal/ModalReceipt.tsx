import { CoachPerformanceData } from 'app/src/apis/coach/coach.type';
import { addNumberCommas } from 'app/src/utils/numberForm';
import { css } from 'styled-system/css';
import { Divider, Flex, styled } from 'styled-system/jsx';

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
    <Flex gap="5" className={css({ height: 'calc(100% - 56px)' })}>
      <LessonPerformance performance={performance} />
      <Sales
        salary={salary}
        tax={tax}
        totalSales={totalSales}
        individualSales={individualSales}
      />
      <Salary tax={tax} totalSettlement={totalSettlement} />
    </Flex>
  );
};

const LessonPerformance = ({ performance }: Pick<Props, 'performance'>) => {
  const { lessonCount, lesson, customerAttendance } = performance;
  return (
    <section className={sectionStyle}>
      <ReceiptTitle>이번 달 코치님의 성과</ReceiptTitle>
      <Field>
        <Label>수업 일 수</Label>
        <Value>{lessonCount?.[0].lessonDateCount ?? 0} 일</Value>
      </Field>
      <Field>
        <Label>강습 횟수</Label>
        <Value>{lesson?.[0].regularLessonCount ?? 0} 회</Value>
      </Field>
      <Field>
        <Label>보강 횟수</Label>
        <Value>{lesson?.[0].additionalLessonCount ?? 0} 회</Value>
      </Field>
      <Field>
        <Label>출석 인원 수</Label>
        <Value>{customerAttendance?.[0].attendedLessons ?? 0} 명</Value>
      </Field>
      <Field>
        <Label>결석 회원 수</Label>
        <Value>{customerAttendance?.[0].absentLessons ?? 0} 명</Value>
      </Field>
      <Field>
        <Label>출석률</Label>
        <Value>{customerAttendance?.[0].attendanceRate ?? 0} %</Value>
      </Field>
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
    <section className={sectionStyle}>
      <ReceiptTitle>이번 달 매출 및 급여</ReceiptTitle>
      <Field>
        <Label>월 기본 급여</Label>
        <Value>{addNumberCommas(salary)} 원</Value>
      </Field>
      <Field>
        <Label>총 매출 인센티브</Label>
        <Value>{totalSales} %</Value>
      </Field>
      <Field>
        <Label>개별 인센티브</Label>
        <Value>{individualSales} %</Value>
      </Field>
      <ReceiptTitle className={css({ margin: '24px 0' })}>
        공제내역
      </ReceiptTitle>
      <Field>
        <Label>페널티 점수</Label>
        <Value>0 점</Value>
      </Field>
      <Field>
        <Label>국민연금</Label>
        <Value>{addNumberCommas(tax.nationalPension)} 원</Value>
      </Field>
      <Field>
        <Label>건강보험</Label>
        <Value>{addNumberCommas(tax.healthInsurance)} 원</Value>
      </Field>
      <Field>
        <Label>고용보험</Label>
        <Value>{addNumberCommas(tax.employmentInsurance)} 원</Value>
      </Field>
      <Field>
        <Label>산재보험</Label>
        <Value>{addNumberCommas(tax.workersCompensationInsurance)} 원</Value>
      </Field>
      <Divider color="var(--grey100)" margin="24px 0" />
    </section>
  );
};

const Salary = ({
  tax,
  totalSettlement,
}: Pick<Props, 'tax' | 'totalSettlement'>) => {
  return (
    <section className={sectionStyle}>
      <ReceiptTitle>이번 달 예상 지급 총액</ReceiptTitle>
      <Field>
        <Label>페널티 점수</Label>
        <Value>0 점</Value>
      </Field>
      <Field>
        <Label>국민연금</Label>
        <Value>{addNumberCommas(tax.nationalPension)} 원</Value>
      </Field>
      <Field>
        <Label>건강보험</Label>
        <Value>{addNumberCommas(tax.healthInsurance)} 원</Value>
      </Field>
      <Field>
        <Label>고용보험</Label>
        <Value>{addNumberCommas(tax.employmentInsurance)} 원</Value>
      </Field>
      <Field>
        <Label>산재보험</Label>
        <Value>{addNumberCommas(tax.workersCompensationInsurance)} 원</Value>
      </Field>
      <Divider color="var(--grey100)" margin="24px 0" />
      <Field>
        <Label>지급액</Label>
        <Value>{addNumberCommas(totalSettlement)} 원</Value>
      </Field>
    </section>
  );
};

const sectionStyle = css({
  width: 'calc(100%/3)',
  backgroundColor: 'var(--grey400)',
  borderRadius: '8px',
  padding: '24px',
});

const ReceiptTitle = styled('div', {
  base: {
    fontSize: '1.125rem',
    fontWeight: 600,
    margin: '0 0 24px 0',
  },
});

const Field = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 12px 0',
    padding: '0 0 0 24px',
  },
});

const Label = styled('div', {
  base: {
    _before: {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '-16px',
      width: '0.75rem',
      height: '0.75rem',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      transform: 'translate(-50%, -50%)',
      backgroundImage: 'url(/icons/arrow/item_list_arrow.svg)',
    },
  },
});

const Value = styled('div', {
  base: {
    fontWeight: 600,
  },
});

export default ModalReceipt;
