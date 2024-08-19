'use client';

import { useCustomerListQuery } from '@features/customer/query/CustomerQuery';

type Props = {
  keyword: string;
};

const CustomerList = ({ keyword }: Props) => {
  // 회원목록 가져오기
  const { data } = useCustomerListQuery();

  console.log(data);

  return (
    // <>{data?.map((item: any) => {
    //   return (
    //     <div key={item.id}>
    //       {item.name}
    //     </div>
    //   )
    // })}</>

    <>3</>
  );
};

export default CustomerList;
