import { CustomerStatistics } from '@/entities/home/type/customer-statistics';
import Card from './Card';

const Cards = ({ data }: { data: CustomerStatistics }) => {
  const { currentCustomer, expiredCustomer, newCustomer, reRegisterRate } =
    data;

  const expiredIncreasedMembers =
    expiredCustomer.thisMonthExpiredCustomerCount -
    expiredCustomer.lastMonthExpiredCustomerCount;
  return (
    <div>
      <div className="text-xl font-semibold">회원 통계</div>
      <div className="flex overflow-x-auto">
        <Card
          title={'현재 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={
            currentCustomer.increasedMembers === 0
              ? 'NoChange'
              : currentCustomer.increasedMembers > 0
                ? 'Up'
                : 'Down'
          }
          content={`${currentCustomer.increasedMembers} 명`}
        />
        <Card
          title={'신규 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={
            newCustomer.increasedMembers === 0
              ? 'NoChange'
              : newCustomer.increasedMembers > 0
                ? 'Up'
                : 'Down'
          }
          content={`${Math.abs(newCustomer.increasedMembers)} 명`}
        />
        <Card
          title={'만료 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={
            expiredIncreasedMembers === 0
              ? 'NoChange'
              : expiredIncreasedMembers > 0
                ? 'Up'
                : 'Down'
          }
          content={`${Math.abs(expiredIncreasedMembers)} 명`}
        />
        <Card
          title={'재등록률'}
          subTitle={'1개월 전보다'}
          chartType={
            reRegisterRate.increasedRegisterCount === 0
              ? 'NoChange'
              : reRegisterRate.increasedRegisterCount > 0
                ? 'Up'
                : 'Down'
          }
          content={`${Math.abs(reRegisterRate.increasedRegisterCount)} 명`}
        />
      </div>
    </div>
  );
};

export default Cards;
