'use client';

import { PageHeader } from '@components/index';
import { useCustomerDetailQuery } from '../query/CustomerQuery';
import Loading from '@components/common/Loading';
import CustomerInfo from '../component/CustomerInfo';
import CustomerPayment from '../component/Payment';
import ManageContainer from '../component/detail/manage/ManageContainer';
import { isEmptyObj } from '@utils/object';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  id: string;
};

const CustomerDetailScreen = ({ id }: Props) => {
  const { data, isLoading } = useCustomerDetailQuery({ id });

  if (isEmptyObj(data) || isLoading) return <Loading />;

  const customer = data;

  return (
    <div className={css({ height: '100%' })}>
      <PageHeader title={`${customer.name} 님`} link="/customer" />
      <CustomerInfo customerId={id} customer={customer} />
      <div className={css({ height: 'calc(65% - 52px)', overflowY: 'scroll' })}>
        <div
          className={flex({
            height: '100%',
            justifyContent: 'space-between',
          })}
        >
          <CustomerPayment id={id} />
          <ManageContainer customerId={id} />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailScreen;
