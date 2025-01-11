'use client';

import { PageHeader } from 'src/이전 파일들/components/index';
import { useCustomerDetailQuery } from '../../../../이전 파일들/features/customer/query/CustomerQuery';
import Loading from 'src/이전 파일들/components/common/Loading';
import CustomerInfo from '../../../../이전 파일들/features/customer/component/CustomerInfo';
import CustomerPayment from '../../../../이전 파일들/features/customer/component/Payment';
import ManageContainer from '../../../../이전 파일들/features/customer/component/detail/manage/ManageContainer';
import { isEmptyObj } from 'src/이전 파일들/utils/object';
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
