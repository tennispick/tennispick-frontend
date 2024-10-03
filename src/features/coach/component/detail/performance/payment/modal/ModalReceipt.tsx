import { css } from 'styled-system/css';
import { Divider, Flex, styled } from 'styled-system/jsx';

const ModalReceipt = () => {
  return (
    <Flex gap="5" className={css({ height: 'calc(100% - 56px)' })}>
      <LessonPerformance />
      <Sales />
      <Salary />
    </Flex>
  );
};

const LessonPerformance = () => {
  return (
    <section className={sectionStyle}>
      <ReceiptTitle>이번 달 코치님의 성과</ReceiptTitle>
      <Field>
        <Label>수업 일 수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>강습 횟수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>보강 횟수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>출석 인원 수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>결석 회원 수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>출석률</Label>
        <Value>10</Value>
      </Field>
    </section>
  );
};

const Sales = () => {
  return (
    <section className={sectionStyle}>
      <ReceiptTitle>이번 달 매출 및 급여</ReceiptTitle>
      <Field>
        <Label>월 기본 급여</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>총 매출 인센티브</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>개별 인센티브</Label>
        <Value>10</Value>
      </Field>
      <ReceiptTitle className={css({ margin: '24px 0' })}>
        공제내역
      </ReceiptTitle>
      <Field>
        <Label>페널티 점수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>국민연금</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>건강보험</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>고용보험</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>소득세</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>지방 소득세</Label>
        <Value>10</Value>
      </Field>
      <Divider color="var(--grey100)" margin="24px 0" />
    </section>
  );
};

const Salary = () => {
  return (
    <section className={sectionStyle}>
      <ReceiptTitle>이번 달 예상 지급 총액</ReceiptTitle>
      <Field>
        <Label>페널티 점수</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>국민연금</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>건강보험</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>고용보험</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>소득세</Label>
        <Value>10</Value>
      </Field>
      <Field>
        <Label>지방 소득세</Label>
        <Value>10</Value>
      </Field>
      <Divider color="var(--grey100)" margin="24px 0" />
      <Field>
        <Label>지급액</Label>
        <Value>10</Value>
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
