const CustomerModalReceiptContainer = () => {
  return(
    <div css={{ position: 'relative', width: '30%', height: '130px', borderBottom: '1px solid var(--grey100)', padding: '0 12px',  }}>
      영수증
    </div> 
  )
};

const PaymentReceipt = () => {

}

const RefundReceipt = () =>{

}

CustomerModalReceiptContainer.PaymentReceipt = PaymentReceipt;
CustomerModalReceiptContainer.RefundReceipt = RefundReceipt;

export default CustomerModalReceiptContainer;