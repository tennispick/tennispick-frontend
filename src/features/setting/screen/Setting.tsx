import { useState } from 'react';
import { tabLists } from '@features/setting/data/tabLists';
import TabLists from '../component/TabLists';
import SettingCenter from '../component/Center';
import SettingCoach from '../component/Coach';
import SettingPayment from '../component/Payment';

const SettingScreen = () => {
  const [currentItem, setCurrentItem] = useState<number>(tabLists[0].id);

  return (
    <div>
      <TabLists
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        tabLists={tabLists}
      />
      {
        {
          1: <SettingCenter />,
          2: <SettingCoach />,
          3: <SettingPayment />,
        }[currentItem]
      }
    </div>
  );
};

export default SettingScreen;
