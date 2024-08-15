import {
  useGetCoachMonthSalesQuery,
  useGetCoachTotalSalesQuery,
} from '@features/home/query/salesQuery';
import useModal from '@hooks/useModal';
import Tab from '@widgets/Tab';
import SalesContainer from './sales/SalesContainer';
import PaymentContainer from './payment/PaymentContainer';
import CustomerContainer from './customer/CustomerContainer';

type Props = {
  coachId: string;
};

const BusinessPerformance = ({ coachId }: Props) => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();

  const { data: totalSales } = useGetCoachTotalSalesQuery();
  // const { data: monthSales } = useGetCoachMonthSalesQuery(coachId);

  const coachTotalSales = totalSales.reduce((total, item) => {
    const { id, totalCardPrice, totalCashPrice, totalAccountTransferPrice } =
      item;
    if (`${id}` === coachId) {
      total +=
        Number(totalCardPrice) +
        Number(totalCashPrice) +
        Number(totalAccountTransferPrice);
    }
    return total;
  }, 0);

  // const coachMonthSales = monthSales.reduce(
  //   (total, item) => {
  //     const { type, totalPrice } = item;
  //     if (type === 'card') total.card += Number(totalPrice);
  //     else if (type === 'cash') total.cash += Number(totalPrice);
  //     else if (type === 'accountTransfer')
  //       total.accountTransfer += Number(totalPrice);

  //     return total;
  //   },
  //   {
  //     card: 0,
  //     cash: 0,
  //     accountTransfer: 0,
  //   },
  // );

  // const { card, cash, accountTransfer } = coachMonthSales;

  return (
    <div css={{ width: '70%', height: '100%' }}>
      <Tabs defaultActiveKey={'sales'}>
        <TabLists>
          <TabList activeKey={'sales'}>매출내역</TabList>
          <TabList activeKey={'payment'}>정산내역</TabList>
          <TabList activeKey={'customer'}>수강생 목록</TabList>
        </TabLists>
        <TabPanels css={{ height: 'calc(100% - 2.875rem)' }}>
          <TabPanel
            activeKey={'sales'}
            css={{ height: '100%', padding: '12px 0' }}
          >
            <SalesContainer />
          </TabPanel>
          <TabPanel
            activeKey={'payment'}
            css={{ height: '100%', padding: '12px 0' }}
          >
            <PaymentContainer />
          </TabPanel>
          <TabPanel
            activeKey={'customer'}
            css={{ height: '100%', padding: '12px 0' }}
          >
            <CustomerContainer />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default BusinessPerformance;
