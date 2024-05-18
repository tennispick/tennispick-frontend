import { CoachListData } from '@apis/coach/coach.type';
import { NoResult, NormalList as Li } from '@components/index';
import { useRouter } from 'next/navigation';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import Image from 'next/image';

type Props = {
  list: CoachListData[];
};

const CoachList = ({ list }: Props) => {
  const router = useRouter();

  return (
    <>
      {list && list.length > 0 ? (
        <Li.UnOrderList height={'78%'}>
          {list.map(({ id, name, position, sex, email, phone, age }) => {
            return (
              <Li
                key={id}
                onClick={() => router.push(`/coach/${id}`)}
                css={{
                  minHeight: '48px',
                }}
              >
                <div
                  css={{
                    position: 'relative',
                    width: '5%',
                    minHeight: '40px',
                    textAlign: 'center',
                  }}
                >
                  <Image
                    src={sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
                    alt={'profile'}
                    fill
                  />
                </div>
                <div
                  css={{
                    width: '52px',
                    height: '24px',
                    lineHeight: '24px',
                    textAlign: 'center',
                    margin: '0 16px 0 12px',
                    backgroundColor:
                      position === 'coach'
                        ? 'var(--business-active-color)'
                        : 'var(--green200)',
                    color: 'var(--white100)',
                    borderRadius: '4px',
                  }}
                >
                  {position === 'coach' ? '코치' : '헤드코치'}
                </div>
                <div
                  css={{
                    position: 'relative',
                    width: 'calc(70% - 52px)',
                  }}
                >
                  <div css={{ fontWeight: '600' }}>
                    {name} &#40;{age}, {sex === 'man' ? '남' : '여'}&#41;
                  </div>
                </div>
                <div
                  css={{
                    position: 'relative',
                    width: '25%',
                    backgroundColor: 'var(--grey400)',
                    borderRadius: '16px',
                    padding: '12px 0',
                    textAlign: 'center',
                  }}
                >
                  {phone} &#183; {email}
                </div>
              </Li>
            );
          })}
        </Li.UnOrderList>
      ) : (
        <div
          css={{
            position: 'relative',
            height: '20vh',
            borderRadius: '25px',
          }}
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
