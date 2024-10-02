import { individualSalesRadioGroup, insuranceRadioGroup, settlementRateRadioGroup, totalSalesRadioGroup, vatRadioGroup } from "@features/setting/data/payment";
import { addNumberCommas } from "@utils/numberForm";
import { Flex, styled } from "styled-system/jsx";

type Props = {
  salary: number;
  totalSalesOption: typeof totalSalesRadioGroup[number]["id"];
  totalSales: number;
  individualSalesOption: typeof individualSalesRadioGroup[number]["id"];
  individualSales: number;
  settlementRateOption: typeof settlementRateRadioGroup[number]["id"];
  settlementRate: number;
  vatOption: typeof vatRadioGroup[number]["id"];
  insuranceOption: typeof insuranceRadioGroup[number]["id"];
}

const EstimatedReceipt = ({ salary, totalSales, individualSales }: Props) => {

  // TODO 공제내역 계산식이 필요함

  return (
    <Container>
      <BlockTitle>고정 지급 항목</BlockTitle>
      <Block>
        <Flex alignItems="center">
          <Field>급여</Field>
          <Label>{`${addNumberCommas(salary)} 원`}</Label>
        </Flex>
      </Block>
      <BlockTitle>변동 지급 항목</BlockTitle>
      <Block>
        <Flex alignItems="center">
          <Field>총 매출 인센티브</Field>
          <Label>{`${addNumberCommas(totalSales)} %`}</Label>
        </Flex>
        <Flex alignItems="center">
          <Field>개별 인센티브</Field>
          <Label>{`${addNumberCommas(individualSales)} %`}</Label>
        </Flex>
      </Block>
      <Block>
        <Flex alignItems="center">
          <Field>매출</Field>
          <Label>{`${addNumberCommas(3)} %`}</Label>
        </Flex>
        <Flex alignItems="center">
          <Field>공제내역</Field>
          <Label>{`${addNumberCommas(3)} %`}</Label>
        </Flex>
      </Block>
    </Container>
  )
}

const Container = styled('section', {
  base: {
    display: 'grid',
    // height: '23.725vh',
    height: '216px',
    backgroundColor: 'var(--grey400)',
    margin: '0 0 12px 0',
    padding: '8px 16px',
    borderRadius: '8px'
  }
})

const Block = styled('div', {
  base: {

  }
})

const BlockTitle = styled('div', {
  base: {
  }
})

const Field = styled('div', {
  base: {
    width: 'calc(12vw - 16px)',
    fontSize: '0.875rem',
  }
})

const Label = styled('div', {
  base: {
    width: 'calc(12vw - 16px)',
    fontSize: '0.875rem',
  }
})

export default EstimatedReceipt;