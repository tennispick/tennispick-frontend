import PaymentTypeRow from '../PaymentTypeRow';
import SearchPeriodRow from '../SearchPeriodRow';
import InformationIcon from '@icons/information';
import { NoResult } from '@components/index';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

const PaymentContainer = () => {
  return (
    <>
      <SearchPeriodRow />
      <PaymentTypeRow />
      <InfoField>
        <InfoLabel>{'페널티 점수'}</InfoLabel>
        <InfoValue>-</InfoValue>
      </InfoField>
      <InfoField>
        <InfoLabel>{'월 기본 급여'}</InfoLabel>
        <InfoValue>3,000,000 원</InfoValue>
      </InfoField>
      <InfoField className={css({ margin: '0 0 12px 0' })}>
        <InfoLabel className={css({ fontWeight: 600 })}>
          {'지급 인센티브'}
        </InfoLabel>
        <InfoValue>300,000 원</InfoValue>
      </InfoField>
      <CalculationField>
        <NoResult
          description={'인센티브 산정방식이 설정되지 않았어요.'}
          className={css({ borderRadius: '0.5rem' })}
        />
      </CalculationField>
      <InfoField className={css({ margin: '0 0 12px 0' })}>
        <InfoLabel className={css({ fontWeight: 600 })}>
          {'00월 예상 수령액'}
        </InfoLabel>
        <InfoValue>4,000,000 원</InfoValue>
      </InfoField>
      <CalculationField>
        <NoResult
          description={'산정방식이 설정되지 않았어요.'}
          className={css({ borderRadius: '0.5rem' })}
        />
      </CalculationField>
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
      >
        <InformationIcon fill={'var(--blue500)'} />
        {'정산내역 상세보기 >'}
      </div>
    </>
  );
};

const InfoField = styled('div', {
  base: {
    minHeight: '36px',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    margin: '0 0 20px 0',
  },
});
const InfoLabel = styled('div', {
  base: {
    width: '7rem',
  },
});

const InfoValue = styled('div', {});

const CalculationField = styled('section', {
  base: {
    height: 'calc((100% - 420px) / 2)',
    margin: '0 0 24px 0',
  },
});

export default PaymentContainer;
