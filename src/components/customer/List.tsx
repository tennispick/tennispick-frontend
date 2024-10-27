import Image from 'next/image';

import { NoResult, NormalList } from '@components/index';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import { useRouter } from 'next/navigation';
import { css } from 'styled-system/css';
import { CustomerListQueryData } from '@features/customer/type/customer.type';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type Props = {
  data: CustomerListQueryData[];
  hasNextPage: boolean;
  handleFetchNextPage: () => void;
};

const CustomerList = ({ data, hasNextPage, handleFetchNextPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const router = useRouter();
  const intersectionItemIndex = data.length - 1;

  useEffect(() => {
    inView && handleFetchNextPage();
  }, [inView, handleFetchNextPage]);

  return (
    <>
      {data && data.length > 0 ? (
        <>
          <NormalList.UnOrderList height={'100%'}>
            {data.map(({ id, name, sex, age, phone, email }) => {
              return (
                <NormalList
                  key={id}
                  onClick={() => router.push(`/customer/${id}`)}
                >
                  <div
                    className={css({
                      position: 'relative',
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
                  <div className={css({ width: '70%' })}>
                    <div className={css({ fontWeight: 600 })}>
                      {name} &#40;{age}, {sex === 'man' ? '남' : '여'}&#41;
                    </div>
                    <div>미수금: - </div>
                  </div>
                  <div
                    className={css({
                      width: '25%',
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
            {intersectionItemIndex && (
              <div
                ref={hasNextPage ? ref : null}
                className={css({ height: '1px' })}
              ></div>
            )}
          </NormalList.UnOrderList>
        </>
      ) : (
        <div
          className={css({
            height: '20vh',
            borderRadius: '25px',
          })}
        >
          <NoResult
            description={'아직 회원님이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default CustomerList;
