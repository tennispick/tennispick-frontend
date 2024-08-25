'use client';

import { useCustomerListQuery } from '@features/customer/query/CustomerQuery';
import { css } from 'styled-system/css';

type Props = {
  keyword: string;
};

const CustomerList = ({ keyword }: Props) => {
  const { data, isLoading } = useCustomerListQuery();

  if (isLoading) {
    return (
      <div
        className={css({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        })}
      >
        Data Loading...
      </div>
    );
  }

  return (
    <>
      {data?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};

export default CustomerList;
