import { NoResult, NormalList } from '@/shared/components/index';
import { useRouter } from 'next/navigation';
import { useLessonListQuery } from '../query/LessonQuery';
import Loading from '@/shared/components/common/Loading';

type Props = {
  type: string;
};

const LessonList = ({ type }: Props) => {
  const { isLoading, isFetching, data } = useLessonListQuery({ type: type });

  const router = useRouter();

  if (isLoading || isFetching) return <Loading />;

  const handleLessonDetailClick = (id: number) => router.push(`/lesson/${id}`);

  return (
    <>
      {data && data.length > 0 ? (
        <NormalList.UnOrderList height={'100%'}>
          {data.map(
            ({
              id,
              name,
              lessonCount,
              price,
              isWeekday,
              type,
              time,
              timesAWeek,
            }) => {
              return (
                <NormalList
                  key={id}
                  onClick={() => handleLessonDetailClick(id)}
                >
                  <div
                    className={`w-14 h-6 leading-6 text-center mx-auto rounded ${
                      isWeekday === 'weekend'
                        ? 'bg-[var(--business-active-color)]'
                        : 'bg-[var(--green200)]'
                    } text-[var(--white100)]`}
                  >
                    {isWeekday === 'weekend' ? '주말' : '평일'}
                  </div>
                  <div className="w-[65%] pl-4">{name}</div>
                  <div className="w-[9%] text-center">
                    총 레슨횟수: {lessonCount}회
                  </div>
                  <div className="w-[calc(10%-32px)] text-right mr-8">
                    {price}원
                  </div>
                  <div className="w-[4%] text-center">
                    {type === 'private' ? '개인' : '그룹'}
                  </div>
                  <div className="w-[4%] text-center">{time}분</div>
                  <div className="w-[4%] text-center">주 {timesAWeek}회</div>
                </NormalList>
              );
            },
          )}
        </NormalList.UnOrderList>
      ) : (
        <div className="h-[20vh] rounded-[25px]">
          <NoResult
            description={'생성된 레슨권이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default LessonList;
