'use client';

import { CustomerListQueryData } from 'app/src/features/customer/type/customer.type';
import { transferSexType } from 'app/src/utils/switch';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  data: CustomerListQueryData[];
  keyword: string;
  hasNextPage: boolean;
  handleFetchNextPage: () => void;
};

const CustomerList = ({ data, hasNextPage, handleFetchNextPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const intersectionItemIndex = data.length - 1;

  useEffect(() => {
    inView && handleFetchNextPage();
  }, [inView, handleFetchNextPage]);

  return (
    <div className={css({ height: 'calc(100% - 3.75rem - 8px)' })}>
      <Header />
      <div
        className={css({
          height: 'calc(100% - (1.5rem + 8px))',
          overflowY: 'scroll',
        })}
      >
        {data.length === 0 ? (
          <div className={css({ textAlign: 'center', margin: '32px 0 0 0' })}>
            데이터가 없어요.
          </div>
        ) : (
          <>
            {data.map(
              ({
                id,
                name,
                sex,
                age,
                birth,
                email,
                created_at,
                updated_at,
              }) => {
                return (
                  <div
                    key={id}
                    className={flex({
                      margin: '8px 0',
                      '& div': { fontSize: '0.875rem' },
                    })}
                  >
                    <div className={css({ width: '10%' })}>{name}</div>
                    <div className={css({ width: '5%' })}>
                      {transferSexType(sex)}
                    </div>
                    <div className={css({ width: '10%' })}>{age} 살</div>
                    <div className={css({ width: '15%' })}>{birth}</div>
                    <div className={css({ width: '20%' })}>{email}</div>
                    <div className={css({ width: '20%' })}>{created_at}</div>
                    <div className={css({ width: '20%' })}>{updated_at}</div>
                  </div>
                );
              },
            )}
            {intersectionItemIndex && (
              <div
                ref={hasNextPage ? ref : null}
                className={css({ height: '1px' })}
              ></div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div
      className={flex({
        height: '1.5rem',
        margin: '8px 0',
        '& div': { fontWeight: 600 },
      })}
    >
      <div className={css({ width: '10%' })}>회원명</div>
      <div className={css({ width: '5%' })}>성별</div>
      <div className={css({ width: '10%' })}>나이</div>
      <div className={css({ width: '15%' })}>생년월일</div>
      <div className={css({ width: '20%' })}>이메일</div>
      <div className={css({ width: '20%' })}>가입일</div>
      <div className={css({ width: '20%' })}>수정일</div>
    </div>
  );
};

export default CustomerList;
