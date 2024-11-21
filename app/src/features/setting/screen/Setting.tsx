'use client';

import { useState } from 'react';
import { tabLists } from 'app/src/features/setting/data/tabLists';
import TabLists from '../component/TabLists';
import SettingCenter from '../component/Center';
import SettingCoach from '../component/Coach';
import SettingPayment from '../component/payment/Payment';
import { useSettingMutation } from '../mutation/settingMutation';
import SettingLesson from '../component/Lesson';
import { usePaymentSettingQuery } from '../query/settingQuery';
import Loading from 'app/src/components/common/Loading';

const SettingScreen = () => {
  const [currentItem, setCurrentItem] = useState<number>(tabLists[0].id);

  const { data, isFetching } = usePaymentSettingQuery();
  const { mutate } = useSettingMutation();

  const handleToggleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { id, checked } = e.currentTarget;
    const isActive = checked ? 'Y' : 'N';
    mutate({ id, isActive });
  };

  return (
    <>
      <TabLists
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        tabLists={tabLists}
      />
      {
        {
          1: <SettingCenter handleToggleClick={handleToggleClick} />,
          2: <SettingCoach handleToggleClick={handleToggleClick} />,
          3: <SettingLesson handleToggleClick={handleToggleClick} />,
          4: isFetching ? <Loading /> : <SettingPayment data={data} />,
        }[currentItem]
      }
    </>
  );
};

export default SettingScreen;
