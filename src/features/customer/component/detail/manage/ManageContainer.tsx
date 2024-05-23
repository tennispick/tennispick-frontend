import { useState } from 'react';
import { lessonList } from '../../../data/snbList';
import SNBList from '../../SNBList';
import ManageLesson from './Lesson';
import ManageAdditionalLesson from './AdditionalLesson';
import ManageMemo from './Memo';

type Props = {
  customerId: string;
};

const ManageContainer = ({ customerId }: Props) => {
  const [currentItem, setCurrentItem] = useState(lessonList[0].id);

  return (
    <section css={{ position: 'relative', width: '49%' }}>
      <SNBList
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        tabLists={lessonList}
      />
      <div
        css={{
          position: 'relative',
          height: '50vh',
          backgroundColor: 'var(--grey400)',
          borderRadius: '16px',
          padding: '12px',
        }}
      >
        {
          {
            lesson: <ManageLesson customerId={customerId} />,
            additionalLesson: (
              <ManageAdditionalLesson customerId={customerId} />
            ),
            memo: <ManageMemo customerId={customerId} />,
          }[currentItem]
        }
      </div>
    </section>
  );
};

export default ManageContainer;
