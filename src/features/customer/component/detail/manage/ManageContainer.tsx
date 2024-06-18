import { useState } from 'react';
import { lessonList } from '../../../data/snbList';
import SNBList from '../../SNBList';
import ManageLesson from './lesson/Lesson';
import ManageAdditionalLesson from './AdditionalLesson';
import ManageMemo from './memo/Memo';

type Props = {
  customerId: string;
};

const ManageContainer = ({ customerId }: Props) => {
  const [currentItem, setCurrentItem] = useState(lessonList[0].id);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showScheduleChangeModal, setShowScheduleChangeModal] = useState(false);

  const onClickShowDrawerHandler = () => setShowDrawer(true);
  const onCloseDrawerHandler = () => setShowDrawer(false);

  const onClickShowModalHandler = () => setShowScheduleChangeModal(true);
  const onClickCloseModalHandler = () => setShowScheduleChangeModal(false);

  return (
    <>
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
              lesson: (
                <ManageLesson
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={onClickShowDrawerHandler}
                  onCloseDrawerHandler={onCloseDrawerHandler}
                  showScheduleChangeModal={showScheduleChangeModal}
                  onClickShowModalHandler={onClickShowModalHandler}
                  onClickCloseModalHandler={onClickCloseModalHandler}
                />
              ),
              additionalLesson: (
                <ManageAdditionalLesson
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={onClickShowDrawerHandler}
                  onCloseDrawerHandler={onCloseDrawerHandler}
                />
              ),
              memo: (
                <ManageMemo
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={onClickShowDrawerHandler}
                  onCloseDrawerHandler={onCloseDrawerHandler}
                />
              ),
            }[currentItem]
          }
        </div>
      </section>
    </>
  );
};

export default ManageContainer;
