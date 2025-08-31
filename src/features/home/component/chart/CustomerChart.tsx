import Card from './Card';
import { useHomeCustomerStatisticsQuery } from '@features/home/query/statisticsQuery';

type Props = { date: Date };

const CustomerChart = ({ date }: Props) => {
  const { data } = useHomeCustomerStatisticsQuery(date);

  if (!data) return <CustomerChart.Suspense />;

  const { currentCustomer, expiredCustomer, newCustomer, reRegisterRate } =
    data;

  const expiredIncreasedMembers =
    expiredCustomer.thisMonthExpiredCustomerCount -
    expiredCustomer.lastMonthExpiredCustomerCount;

  return (
    <div className="w-[65%]">
      <div className="mb-4 text-xl font-semibold">회원 통계</div>
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

const Suspense = () => {
  return (
    <div className="w-[65%]">
      <div className="mb-4 text-xl font-semibold">회원 통계</div>
      <div className="flex overflow-x-auto">
        <Card
          title={'현재 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={'NoChange'}
          content={'-'}
        />
        <Card
          title={'신규 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={'NoChange'}
          content={'-'}
        />
        <Card
          title={'만료 회원 수'}
          subTitle={'1개월 전보다'}
          chartType={'NoChange'}
          content={'-'}
        />
        <Card
          title={'재등록률'}
          subTitle={'1개월 전보다'}
          chartType={'NoChange'}
          content={'-'}
        />
      </div>
    </div>
  );
};

CustomerChart.Suspense = Suspense;
export default CustomerChart;
