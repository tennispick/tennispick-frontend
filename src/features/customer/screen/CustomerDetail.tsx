'use client';

import { PageHeader } from '@/shared/components/index';
import { useCustomerDetailQuery } from '../query/CustomerQuery';
import Loading from '@/shared/components/common/Loading';
import CustomerInfo from '../component/CustomerInfo';
import CustomerPayment from '../component/Payment';
import ManageContainer from '../component/detail/manage/ManageContainer';
import { isEmptyObj } from 'src/shared/utils/object';

type Props = {
  id: string;
};

const CustomerDetailScreen = ({ id }: Props) => {
  const { data, isLoading } = useCustomerDetailQuery({ id });

  if (isEmptyObj(data) || isLoading) return <Loading />;

  const customer = data;

  return (
    <div className="h-full">
      <PageHeader title={`${customer.name} 님`} link="/customer" />
      <CustomerInfo customerId={id} customer={customer} />
      <div className="h-[calc(65%-52px)] overflow-y-scroll">
        <div className="flex h-full justify-between">
          <CustomerPayment id={id} />
          <ManageContainer customerId={id} />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailScreen;
