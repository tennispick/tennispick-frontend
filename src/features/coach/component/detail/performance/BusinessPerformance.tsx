import Tab from '@widgets/Tab';
import SalesContainer from './sales/SalesContainer';
import SettleMentContainer from './settlement/SettleMentContainer';
import CustomerContainer from './customer/CustomerContainer';
import { css } from 'styled-system/css';
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
    <div className={css({ width: '70%', height: '100%' })}>
      <Tabs defaultActiveKey={'sales'}>
        <TabLists>
          <TabList activeKey={'sales'}>매출내역</TabList>
          <TabList activeKey={'payment'}>정산내역</TabList>
          <TabList activeKey={'customer'}>수강생 목록</TabList>
        </TabLists>
        <TabPanels className={css({ height: 'calc(100% - 2.875rem)' })}>
          <TabPanel
            activeKey={'sales'}
            className={css({ height: '100%', padding: '12px 0' })}
          >
            <SalesContainer coachId={coachId} />
          </TabPanel>
          <TabPanel
            activeKey={'payment'}
            className={css({ height: '100%', padding: '12px 0' })}
          >
            <SettleMentContainer
              coachId={coachId}
              paymentSettingStore={initPaymentSettingStore}
            />
          </TabPanel>
          <TabPanel
            activeKey={'customer'}
            className={css({ height: '100%', padding: '12px 0' })}
          >
            <CustomerContainer coachId={coachId} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default BusinessPerformance;
