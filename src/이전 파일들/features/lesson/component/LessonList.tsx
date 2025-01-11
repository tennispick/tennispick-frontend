import { NoResult, NormalList } from 'src/이전 파일들/components/index';
import { useRouter } from 'next/navigation';
import { css } from 'styled-system/css';
import { useLessonListQuery } from '../query/LessonQuery';
import Loading from 'src/이전 파일들/components/common/Loading';

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
                    className={css({
                      width: '56px',
                      height: '24px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      margin: '0 auto',
                      backgroundColor:
                        isWeekday === 'weekend'
                          ? 'var(--business-active-color)'
                          : 'var(--green200)',
                      color: 'var(--white100)',
                      borderRadius: '4px',
                    })}
                  >
                    {isWeekday === 'weekend' ? '주말' : '평일'}
                  </div>
                  <div className={css({ width: '65%', padding: '0 0 0 16px' })}>
                    {name}
                  </div>
                  <div className={css({ width: '9%', textAlign: 'center' })}>
                    총 레슨횟수: {lessonCount}회
                  </div>
                  <div
                    className={css({
                      width: 'calc(10% - 32px)',
                      textAlign: 'right',
                      margin: '0 32px 0 0',
                    })}
                  >
                    {price}원
                  </div>
                  <div className={css({ width: '4%', textAlign: 'center' })}>
                    {type === 'private' ? '개인' : '그룹'}
                  </div>
                  <div className={css({ width: '4%', textAlign: 'center' })}>
                    {time}분
                  </div>
                  <div className={css({ width: '4%', textAlign: 'center' })}>
                    주 {timesAWeek}회
                  </div>
                </NormalList>
              );
            },
          )}
        </NormalList.UnOrderList>
      ) : (
        <div className={css({ height: '20vh', borderRadius: '25px' })}>
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
