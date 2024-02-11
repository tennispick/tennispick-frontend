import styled from "@emotion/styled";
import InputRow from "./InputRow";
import { coachOptions, couponOptions, discountOptions, lessonCountOptions, paymentOptions, registerOptions } from "@data/selectOptions";

const CustomerModalPaymentContainer = () => {
  return(
    <div css={{ padding: '16px 28px', height: 'calc(100% - 129px)' }}>
      <div css={{ display: 'flex', height: 'calc(100% - 24px)' }}>
        <div css={{ width: '50%' }}>
          <InputRow name='name' label={'상품명'} type="select" options={couponOptions} />
          <InputRow name='type' label={'유형'} type="select" options={registerOptions} />
          <InputRow name='productPeriod' label={'상품기간'} type="text" placeholder={'상품기간을 입력해주세요.'} />
          <InputRow name='unCollectMoney' label={'미수금 금액'} type="text" placeholder={'미수금을 입력해주세요.'} />
          <InputRow name='discountType' label={'할인유형'} type="select" options={discountOptions}/>
          <InputRow name='discountPrice' label={'할인금액'} type="text" placeholder={'할인 금액을 입력해주세요.'} />
          <InputRow name='paymentType' label={'결제유형'} type="select" options={paymentOptions} />
          <InputRow name='virtualPaymentDate' label={'결제 예정일'} type="text" placeholder={'결제 예정일'} />
          <InputRow name='realPaymentDate' label={'실제 결제일'} type="text" placeholder={'실제 결제일'} />
        </div>
        <div css={{ width: '50%' }}>
          <InputRow name='coach' label={'코치'} type="select" options={coachOptions}/>
          <InputRow name='lessonCount' label={'강습횟수'} type="select" options={lessonCountOptions} />
          <InputRow name='lessonPeriod' label={'강습기간'} type="text" placeholder={'상품을 선택해주세요.'} />
        </div>
      </div>
      <PaymentDescription>
        <span>미수금 금액: 미수금 금액에 대한 설명</span>
        <span>결제 예정일: 결제 예정일에 대한 설명</span>
        <span>실제 결제일: 실제 결제일에 대한 설명</span>
      </PaymentDescription>
    </div>
  )
};

const PaymentDescription = styled.div({
  position: 'absolute',
  height: '40px',
  bottom: 0,
  'span': {
    color: 'var(--red200)',
    margin: '0 24px 0 0',
    fontWeight: 600,

    '::before': {
      content: '"*"',
      position: 'relative',
      top: '2px',
      margin: '0 4px 0 0'
    }
  }
});

export default CustomerModalPaymentContainer;