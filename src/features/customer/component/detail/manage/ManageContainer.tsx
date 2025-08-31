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
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showScheduleChangeModal, setShowScheduleChangeModal] = useState(false);

  const handleShowDrawerClick = () => setShowDrawer(true);
  const handleHideDrawerClick = () => setShowDrawer(false);

  const handleShowModalClick = () => setShowScheduleChangeModal(true);
  const handleHideModalClick = () => setShowScheduleChangeModal(false);

  return (
    <>
      <section className="w-[49%]">
        <SNBList
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          tabLists={lessonList}
        />
        <div className="h-[50vh] bg-gray-200 rounded-2xl p-3">
          {
            {
              lesson: (
                <ManageLesson
                  customerId={customerId}
                  showDrawer={showDrawer}
                  onClickShowDrawerHandler={handleShowDrawerClick}
                  onCloseDrawerHandler={handleHideDrawerClick}
                  showScheduleChangeModal={showScheduleChangeModal}
                  handleShowModalClick={handleShowModalClick}
                  handleHideModalClick={handleHideModalClick}
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
                  handleShowDrawerClick={handleShowDrawerClick}
                  handleHideDrawerClick={handleHideDrawerClick}
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
