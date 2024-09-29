import { Input } from '@components/input/Input';
import RadioSelectorGroup from '@widgets/RadioSelectorGroup';
import { MouseEvent, useState } from 'react';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  handleToggleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

// 총 매출 인센티브
const totalSalesRadioGroup = [
  {
    label: '지급 안함',
    value: 'none',
  },
  {
    label: '개별 적용',
    value: 'individual',
  },
  {
    label: '일괄 적용',
    value: 'all',
  },
];

// 개별 인센티브
const individualSalesRadioGroup = [
  {
    label: '지급 안함',
    value: 'none',
  },
  {
    label: '개별 적용',
    value: 'individual',
  },
  {
    label: '일괄 적용',
    value: 'all',
  },
];

// 정산 비율
const settlementRateRadioGroup = [
  {
    label: '적용 안함',
    value: 'not',
  },
  {
    label: '적 용',
    value: '비율 적용',
  },
];

// 부가세(원천징수 3.3%)
const vatRadioGroup = [
  {
    label: '적용 안함',
    value: 'not',
  },
  {
    label: '적 용',
    value: 'apply',
  },
];

// 4대 보험 적용여부
const insuranceRadioGroup = [
  {
    label: '적용 안함',
    value: 'not',
  },
  {
    label: '보험 적용',
    value: 'apply',
  },
];

const SettingPayment = ({ handleToggleClick }: Props) => {
  const [totalSalesCheckedItem, setTotalSalesCheckedItem] = useState<string>(
    totalSalesRadioGroup[0].value,
  );
  const [individualSalesCheckedItem, setIndividualSalesCheckedItem] =
    useState<string>(individualSalesRadioGroup[0].value);
  const [settlementRateCheckedItem, setSettlementRateCheckedItem] =
    useState<string>(settlementRateRadioGroup[0].value);
  const [vatCheckedItem, setVatCheckedItem] = useState<string>(
    vatRadioGroup[0].value,
  );
  const [insuranceCheckedItem, setInsuranceCheckedItem] = useState<string>(
    insuranceRadioGroup[0].value,
  );

  const handleCheckedChange = (e: MouseEvent<HTMLLabelElement>) => {
    const value = e.currentTarget.htmlFor;

    setTotalSalesCheckedItem(value);
  };

  const handleIndividualCheckedChange = (e: MouseEvent<HTMLLabelElement>) => {
    const value = e.currentTarget.htmlFor;

    setIndividualSalesCheckedItem(value);
  };

  const handleSettlementRateCheckedChange = (
    e: MouseEvent<HTMLLabelElement>,
  ) => {
    const value = e.currentTarget.htmlFor;

    setSettlementRateCheckedItem(value);
  };

  const handleVatCheckedChange = (e: MouseEvent<HTMLLabelElement>) => {
    const value = e.currentTarget.htmlFor;

    setVatCheckedItem(value);
  };

  const handleInsuranceCheckedChange = (e: MouseEvent<HTMLLabelElement>) => {
    const value = e.currentTarget.htmlFor;

    setInsuranceCheckedItem(value);
  };

  return (
    <div className={css({ margin: '24px 0 0 0' })}>
      <Block>
        <Title>기본 지급 항목</Title>
        <SubTitle>코치님에게 정산되는 지급 항목이에요.</SubTitle>
        <ItemRow>
          <ItemHead>기본급</ItemHead>
          <ItemBody>
            <Input
              type="text"
              className={css({
                minWidth: '320px',
                height: '40px',
                fontSize: '0.9rem',
                border: '1px solid var(--grey300)',
                borderRadius: '8px',
                padding: '6px 32px 6px 12px',
                margin: '0 0 0 8px',
              })}
              placeholder="기본급여를 입력해주세요."
            />
          </ItemBody>
        </ItemRow>
      </Block>
      <Block>
        <Title>변동 지급 항목</Title>
        <SubTitle>
          코치의 활동에 따라서 달라질 있는 지급 항목이에요. 개별적용을 하게
          되면, 코치 관리에서 각 코치님별로 인센티브를 설정하게 되요.
        </SubTitle>
        <ItemRow>
          <ItemHead>총 매출 인센티브</ItemHead>
          <ItemBody>
            <RadioSelectorGroup
              checkedItem={totalSalesCheckedItem}
              handleCheckedChange={handleCheckedChange}
              data={totalSalesRadioGroup}
            />
            <Input
              type="text"
              className={css({
                minWidth: '320px',
                height: '40px',
                fontSize: '0.9rem',
                border: '1px solid var(--grey300)',
                borderRadius: '8px',
                padding: '6px 32px 6px 12px',
                margin: '0 0 0 8px',
              })}
              placeholder="총 매출 인센티브를 입력해주세요."
            />
          </ItemBody>
        </ItemRow>
        <ItemRow>
          <ItemHead>개별 인센티브</ItemHead>
          <ItemBody>
            <RadioSelectorGroup
              checkedItem={individualSalesCheckedItem}
              handleCheckedChange={handleIndividualCheckedChange}
              data={individualSalesRadioGroup}
            />
            <Input
              type="text"
              className={css({
                minWidth: '320px',
                height: '40px',
                fontSize: '0.9rem',
                border: '1px solid var(--grey300)',
                borderRadius: '8px',
                padding: '6px 32px 6px 12px',
                margin: '0 0 0 8px',
              })}
              placeholder="개별 인센티브를 입력해주세요."
            />
          </ItemBody>
        </ItemRow>
      </Block>
      <Block>
        <Title>과세 항목</Title>
        <SubTitle>
          코치님의 매출에서 적용되는 세금과 정산 비율을 설정해요.
          <br />
          정산 비율을 적용하게 되면, 매출에서 입력한 정산비율만큼 정산이 되고,
          적용 하지 않으면 매출에서 아래 세금이 적용된 금액으로 정산해요.
        </SubTitle>
        <ItemRow>
          <ItemHead>정산비율</ItemHead>
          <ItemBody>
            <RadioSelectorGroup
              checkedItem={settlementRateCheckedItem}
              handleCheckedChange={handleSettlementRateCheckedChange}
              data={settlementRateRadioGroup}
            />
            <Input
              type="text"
              className={css({
                minWidth: '320px',
                height: '40px',
                fontSize: '0.9rem',
                border: '1px solid var(--grey300)',
                borderRadius: '8px',
                padding: '6px 32px 6px 12px',
                margin: '0 0 0 8px',
              })}
              placeholder="정산비율을 입력해주세요."
            />
          </ItemBody>
        </ItemRow>
        <ItemRow>
          <ItemHead>부가세(원천징수 3.3%)</ItemHead>
          <ItemBody>
            <RadioSelectorGroup
              checkedItem={vatCheckedItem}
              handleCheckedChange={handleVatCheckedChange}
              data={vatRadioGroup}
            />
          </ItemBody>
        </ItemRow>
        <ItemRow>
          <ItemHead>4대 보험 적용여부</ItemHead>
          <ItemBody>
            <RadioSelectorGroup
              checkedItem={insuranceCheckedItem}
              handleCheckedChange={handleInsuranceCheckedChange}
              data={insuranceRadioGroup}
            />
          </ItemBody>
        </ItemRow>
      </Block>
    </div>
  );
};

const Block = styled('div', {
  base: {
    margin: '0 0 4rem 0',
  },
});

const Title = styled('div', {
  base: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
});

const SubTitle = styled('div', {
  base: {
    color: 'var(--grey1600)',
    fontSize: '1rem',
    margin: '8px 0 24px 0',
  },
});

const ItemRow = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 1rem 0',
  },
});

const ItemHead = styled('div', {
  base: {
    width: '216px',
    margin: '0 24px 0 0',
  },
});
const ItemBody = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default SettingPayment;
