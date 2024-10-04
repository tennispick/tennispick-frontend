import { totalSalesRadioGroup } from '@features/setting/data/payment';
import { addNumberCommas } from '@utils/numberForm';
import { Flex, styled } from 'styled-system/jsx';

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
    <Container>
      <Flex alignItems="center">
        <Field>총 매출 인센티브</Field>
        <Label>{`${addNumberCommas(totalSales)} %`}</Label>
      </Flex>
      <Flex alignItems="center">
        <Field>개별 인센티브</Field>
        <Label>{`${addNumberCommas(individualSales)} %`}</Label>
      </Flex>
    </Container>
  );
};

const Container = styled('section', {
  base: {
    display: 'grid',
    // height: '8.725vh',
    height: '76px',
    backgroundColor: 'var(--grey400)',
    margin: '0 0 12px 0',
    padding: '8px 16px',
    borderRadius: '8px',
  },
});

const Field = styled('div', {
  base: {
    width: 'calc(12vw - 16px)',
    fontSize: '0.875rem',
  },
});

const Label = styled('div', {
  base: {
    width: 'calc(12vw - 16px)',
    fontSize: '0.875rem',
  },
});

export default Incentive;
