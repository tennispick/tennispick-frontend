'use client';

import { CustomerListQueryData } from '@features/customer/type/customer.type';
import { transferSexType } from '@utils/switch';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  data: CustomerListQueryData[];
  keyword: string;
};

const CustomerList = ({ data }: Props) => {
  return (
    <div className={css({ height: 'calc(100% - 3.75rem - 8px)' })}>
      <Header />
      <div className={css({ height: '100%', overflowY: 'scroll' })}>
        {data.map(
          ({ id, name, sex, age, birth, email, created_at, updated_at }) => {
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
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className={flex({ margin: '8px 0', '& div': { fontWeight: 600 } })}>
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
