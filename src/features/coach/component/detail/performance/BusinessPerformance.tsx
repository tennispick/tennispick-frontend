import Tab from '@widgets/Tab';
import SalesContainer from './sales/SalesContainer';
import SettleMentContainer from './settlement/SettleMentContainer';
import CustomerContainer from './customer/CustomerContainer';
import { CenterPaymentState } from '@lib/zustand/center';

type Props = {
  coachId: string;
  paymentSettingStore: CenterPaymentState;
};

const BusinessPerformance = ({
  coachId,
  paymentSettingStore: initPaymentSettingStore,
}: Props) => {
  const { Tabs, TabLists, TabList, TabPanels, TabPanel } = Tab();

  return (
    <div className="w-[70%] h-full">
      <Tabs defaultActiveKey={'sales'}>
        <TabLists>
          <TabList activeKey={'sales'}>매출내역</TabList>
          <TabList activeKey={'payment'}>정산내역</TabList>
          <TabList activeKey={'customer'}>수강생 목록</TabList>
        </TabLists>
        <TabPanels className="h-[calc(100%-2.875rem)]">
          <TabPanel activeKey={'sales'} className="h-full py-3">
            <SalesContainer coachId={coachId} />
          </TabPanel>
          <TabPanel activeKey={'payment'} className="h-full py-3">
            <SettleMentContainer
              coachId={coachId}
              paymentSettingStore={initPaymentSettingStore}
            />
          </TabPanel>
          <TabPanel activeKey={'customer'} className="h-full py-3">
            <CustomerContainer coachId={coachId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default BusinessPerformance;
