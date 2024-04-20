import DashBoardItem from '@components/common/DashBoardItem';
import NoResult from '@components/common/NoResult';
import { useGetCoachLessonListQuery } from '@features/coach/query/coachQuery';
import HomeCoachCard from './CoachCard';
import { CoachLessonListData } from '@apis/coach/coach.type';

const HomeCoachLesson = () => {
  const { data } = useGetCoachLessonListQuery();

  return (
    <DashBoardItem
      title={`${data?.length ?? 0} 명의 코치님들이 센터에서 근무중이에요`}
      width={'calc(35% - 12px)'}
      minHeight={'65vh'}
      margin={'0 24px 0 0'}
    >
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          borderTop: '1px solid var(--grey500)',
          padding: '16px 0 0 0',
        }}
      >
        {(data?.length ?? 0) > 0 &&
          data?.map((item: CoachLessonListData) => {
            return <HomeCoachCard key={item.id} item={item} />;
          })}
      </div>
      {data?.length === 0 && (
        <NoResult description={'오늘 레슨 예정인 코치님이 없어요.'} />
      )}
    </DashBoardItem>
  );
};

export default HomeCoachLesson;
