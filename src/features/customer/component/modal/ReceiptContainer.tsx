import { Button } from "@components/index";
import styled from "@emotion/styled";

type Props = {
  type: string;
}

const CustomerModalReceiptContainer = ({ type }: Props) => {
  return(
    <div css={{ position: 'relative', width: '30%', height: '100%'  }}>
      {{
        payment: <CustomerModalReceiptContainer.PaymentReceipt />,
        refund: <CustomerModalReceiptContainer.RefundReceipt />,
      }[type]}
    </div> 
  )
};

const PaymentReceipt = () => {
  return(
    <>
      <div css={{ height: '130px', borderBottom: '1px solid var(--grey100)', padding: '0 28px' }}>
        <span css={{ position: 'absolute', bottom: '16px', color: 'var(--business-color)', fontSize: '1.3rem', fontWeight: 600 }}>결제 상세내역</span>
      </div>
      <div css={{ height: 'calc(55% - 129px)', padding: '36px 32px 0 28px' }}>
        <ReceiptRow>
          <div>상품명</div>
          <div>주말 그룹 레슨</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>강습기간</div>
          <div>2023.10.10 ~ 2013.11.16</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제유형</div>
          <div>카드결제</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>상품금액</div>
          <div>160,000 원</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>할인금액</div>
          <div>15,000 원</div>
        </ReceiptRow>
        <ReceiptRow>
          <div>결제 예정금액</div>
          <div>145,000 원</div>
        </ReceiptRow>
      </div>
      <div css={{ position: 'relative', height: '96px', padding: '36px 32px 0 28px', borderTop: '1px solid var(--grey100)'}}>
        <ReceiptRow>
          <div css={{ fontWeight: 600, fontSize: '1.2rem', color: 'var(--red200)' }}>결제 예정금액</div>
          <div css={{ fontWeight: 600, fontSize: '1.2rem' }}>145,000 원</div>
        </ReceiptRow>
      </div>
      <Button
        label="결제하기"
        css={{
          position: 'absolute',
          width: 'calc(100% - 56px)',
          bottom: '24px',
          left: '28px',
          backgroundColor: 'var(--business-active-color)',
          color: 'var(--white100)',
          border: 0
        }}
      />
    </>
  )
}

const ReceiptRow = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.05rem',
  margin: '0 0 20px 0'
});

const RefundReceipt = () =>{
  return(
    <>환불</>
  )
};

CustomerModalReceiptContainer.PaymentReceipt = PaymentReceipt;
CustomerModalReceiptContainer.RefundReceipt = RefundReceipt;

export default CustomerModalReceiptContainer;