import styled from '@emotion/styled';
import InputRow from './InputRow';
import {
  coachOptions,
  couponOptions,
  discountOptions,
  lessonCountOptions,
  paymentOptions,
  refundOptions,
  registerOptions,
} from '@data/selectOptions';
import {
  isRefundMatchRadioGroup,
  refundRangeRadioGroup,
} from '@data/radioGroup';

const CustomerModalRefundContainer = () => {
  return (
    <div css={{ padding: '16px 28px', height: 'calc(100% - 129px)' }}>
      <div css={{ display: 'flex', height: 'calc(100% - 24px)' }}>
        <div css={{ width: '50%' }}>
          <InputRow
            name="name"
            label={'상품명'}
            type="select"
            options={couponOptions}
          />
          <InputRow
            name="type"
            label={'유형'}
            type="select"
            options={registerOptions}
          />
          <InputRow
            name="productPeriod"
            label={'상품기간'}
            type="text"
            placeholder={'상품기간을 입력해주세요.'}
          />
          <InputRow
            name="productPeriod"
            label={'상품금액'}
            type="text"
            placeholder={'상품기간을 입력해주세요.'}
          />
          <InputRow
            name="productPeriod"
            label={'코치'}
            type="text"
            placeholder={'상품기간을 입력해주세요.'}
          />
          <InputRow
            name="coach"
            label={'코치'}
            type="select"
            options={coachOptions}
          />
          <InputRow
            name="lessonPeriod"
            label={'강습기간'}
            type="text"
            placeholder={'상품을 선택해주세요.'}
          />
        </div>
        <div css={{ width: '50%' }}>
          <InputRow
            name="lessonPeriod"
            label={'환불수단'}
            type="radio"
            radioGroup={isRefundMatchRadioGroup}
          />
          <InputRow
            name="lessonPeriod"
            label={'결제유형'}
            type="select"
            options={paymentOptions}
          />
          <InputRow
            name="lessonPeriod"
            label={'환불유형'}
            type="select"
            options={refundOptions}
          />
          <InputRow
            name="lessonPeriod"
            label={'환불범위'}
            type="radio"
            radioGroup={refundRangeRadioGroup}
          />
          <InputRow
            name="lessonPeriod"
            label={'결제금액'}
            type="text"
            placeholder={'상품을 선택해주세요.'}
          />
          <InputRow
            name="lessonPeriod"
            label={'환불금액'}
            type="text"
            placeholder={'상품을 선택해주세요.'}
          />
        </div>
      </div>
    </div>
  );
};

const PaymentDescription = styled.div({
  position: 'absolute',
  height: '40px',
  bottom: 0,
  span: {
    color: 'var(--red200)',
    margin: '0 24px 0 0',
    fontWeight: 600,

    '::before': {
      content: '"*"',
      position: 'relative',
      top: '2px',
      margin: '0 4px 0 0',
    },
  },
});

export default CustomerModalRefundContainer;
