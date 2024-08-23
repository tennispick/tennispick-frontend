import { useState } from 'react';
import { lessonList } from '../../../data/snbList';
import SNBList from '../../SNBList';
import ManageLesson from './lesson/Lesson';
import ManageAdditionalLesson from './AdditionalLesson';
import ManageMemo from './memo/Memo';
import { css } from 'styled-system/css';

type Props = {
  customerId: string;
};

const ManageContainer = ({ customerId }: Props) => {
  const [currentItem, setCurrentItem] = useState(lessonList[0].id);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showScheduleChangeModal, setShowScheduleChangeModal] = useState(false);

  const handleShowDrawerClick = () => setShowDrawer(true);
  const handleHideDrawerClick = () => setShowDrawer(false);

  const handleShowModalClick = () => setShowScheduleChangeModal(true);
  const handleHideModalClick = () => setShowScheduleChangeModal(false);

  return (
    <>
      <section className={css({ width: '49%' })}>
        <SNBList
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          tabLists={lessonList}
        />
        <div
          className={css({
            height: '50vh',
            backgroundColor: 'var(--grey400)',
            borderRadius: '16px',
            padding: '12px',
          })}
        >
          {
            {
              lesson: (
                <ManageLesson
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={handleShowDrawerClick}
                  onCloseDrawerHandler={handleHideDrawerClick}
                  showScheduleChangeModal={showScheduleChangeModal}
                  onClickShowModalHandler={handleShowModalClick}
                  onClickCloseModalHandler={handleHideModalClick}
                />
              ),
              additionalLesson: (
                <ManageAdditionalLesson
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={handleShowDrawerClick}
                  onCloseDrawerHandler={handleHideDrawerClick}
                />
              ),
              memo: (
                <ManageMemo
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={handleShowDrawerClick}
                  onCloseDrawerHandler={handleHideDrawerClick}
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
