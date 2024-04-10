import { useState } from 'react';
import { Button } from '@components/index';
import CustomerModal from '../../../modal/PaymentRefundModal';

type Props = {
  id?: string;
};

const CustomerDetailRefundHeader = ({}: Props) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>7</span>건
        </div>
        <div>
          총 결제금액 : <span>300,000</span>원
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailRefundHeader;
