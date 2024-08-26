import { CoachListData } from '@apis/coach/coach.type';
import { NoResult, NormalList } from '@components/index';
import { useRouter } from 'next/navigation';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import Image from 'next/image';
import { css } from 'styled-system/css';

type Props = {
  data: CoachListData[];
};

const CoachList = ({ data }: Props) => {
  const router = useRouter();

  const handleCoachDetailClick = (id: number) => router.push(`/coach/${id}`);

  return (
    <>
      {data && data.length > 0 ? (
        <NormalList.UnOrderList height={'100%'}>
          {data.map(({ id, name, position, sex, email, phone, age }) => {
            return (
              <NormalList key={id} onClick={() => handleCoachDetailClick(id)}>
                <div
                  className={css({
                    width: '5%',
                    minHeight: '40px',
                    textAlign: 'center',
                  })}
                >
                  <Image
                    src={sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
                    alt={'profile'}
                    fill
                  />
                </div>
                <div
                  className={css({
                    width: '52px',
                    height: '24px',
                    lineHeight: '24px',
                    textAlign: 'center',
                    margin: '0 16px 0 0',
                    backgroundColor:
                      position === 'coach'
                        ? 'var(--business-active-color)'
                        : 'var(--green200)',
                    color: 'var(--white100)',
                    borderRadius: '4px',
                  })}
                >
                  {position === 'coach' ? '코치' : '헤드코치'}
                </div>
                <div className={css({ width: 'calc(60% - 52px)' })}>
                  <div className={css({ fontWeight: 600 })}>
                    {name} &#40;{age}, {sex === 'man' ? '남' : '여'}&#41;
                  </div>
                </div>
                <div
                  className={css({
                    width: '35%',
                    backgroundColor: 'var(--grey400)',
                    borderRadius: '16px',
                    padding: '12px 0',
                    textAlign: 'center',
                  })}
                >
                  {phone} &#183; {email}
                </div>
              </NormalList>
            );
          })}
        </NormalList.UnOrderList>
      ) : (
        <div
          className={css({
            height: '20vh',
            borderRadius: '25px',
          })}
        >
          <NoResult
            description={'코치님이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default CoachList;
