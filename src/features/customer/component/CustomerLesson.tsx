import { useState } from 'react';
import SNBList from './SNBList';
import { lessonList } from '../data/snbList';
import SectionChildrenLayout from './SectionChildrenLayout';

type Props = {
  id: string;
};

const CustomerLesson = ({ id }: Props) => {
  console.log(id);

  const [currentItem, setCurrentItem] = useState(lessonList[0].id);

  return (
    <section css={{ position: 'relative', width: '49%' }}>
      <SNBList
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        tabLists={lessonList}
      />
      <SectionChildrenLayout
        titleChildren={
          {
            lesson: <CustomerLesson.Lesson />,
            additionalLesson: <CustomerLesson.AdditionalLesson />,
            memo: <CustomerLesson.Memo />,
          }[currentItem]
        }
        contentChildren={
          {
            lesson: <CustomerLesson.LessonChildren />,
            additionalLesson: <CustomerLesson.AdditionalLessonChildren />,
            memo: <CustomerLesson.MemoChildren />,
          }[currentItem]
        }
      />
    </section>
  );
};

const Lesson = () => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>0</span>건
        </div>
      </div>
    </div>
  );
};
const LessonChildren = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      수강목록이 없어요.
    </div>
  );
};

const AdditionalLesson = () => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>0</span>건
        </div>
      </div>
    </div>
  );
};
const AdditionalLessonChildren = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      보강현황이 없어요.
    </div>
  );
};

const Memo = () => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ margin: '0 12px 0 0' }}>
          총 <span>0</span>건
        </div>
      </div>
    </div>
  );
};
const MemoChildren = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      메모가 없어요.
    </div>
  );
};

CustomerLesson.Lesson = Lesson;
CustomerLesson.LessonChildren = LessonChildren;

CustomerLesson.AdditionalLesson = AdditionalLesson;
CustomerLesson.AdditionalLessonChildren = AdditionalLessonChildren;

CustomerLesson.Memo = Memo;
CustomerLesson.MemoChildren = MemoChildren;

export default CustomerLesson;
