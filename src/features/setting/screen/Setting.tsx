'use client';

import { useState } from 'react';
import { tabLists } from '@features/setting/data/tabLists';
import TabLists from '../component/TabLists';
import SettingCenter from '../component/Center';
import SettingCoach from '../component/Coach';
import SettingPayment from '../component/Payment';
import { useSettingMutation } from '../mutation/settingMutation';
import SettingLesson from '../component/Lesson';

const SettingScreen = () => {
  const [currentItem, setCurrentItem] = useState<number>(tabLists[0].id);

  const { mutate } = useSettingMutation();

  const handleToggleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { id, checked } = e.currentTarget;
    const isActive = checked ? 'Y' : 'N';
    mutate({ id, isActive });
  };

  return (
    <div>
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
          4: <SettingPayment handleToggleClick={handleToggleClick} />,
        }[currentItem]
      }
    </div>
  );
};

export default SettingScreen;
