import Image from 'next/image';

import { NoResult, NormalList } from '@components/index';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import { useRouter } from 'next/navigation';
import { css } from 'styled-system/css';
import { CustomerListQueryData } from '@features/customer/type/customer.type';

type Props = {
  data: CustomerListQueryData[];
};

const CustomerList = ({ data }: Props) => {
  const router = useRouter();

  return (
    <>
      {data && data.length > 0 ? (
        <NormalList.UnOrderList height={'100%'}>
          {data.map((item) => {
            return (
              <NormalList
                key={item.id}
                onClick={() => router.push(`/customer/${item.id}`)}
              >
                <div
                  className={css({
                    width: '5%',
                    minHeight: '40px',
                    textAlign: 'center',
                  })}
                >
                  <Image
                    src={item.sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
                    alt={'profile'}
                    fill
                  />
                </div>
                <div className={css({ width: '70%' })}>
                  <div className={css({ fontWeight: 600 })}>
                    {item.name} &#40;{item.age},{' '}
                    {item.sex === 'man' ? '남' : '여'}&#41;
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
                  {item.phone} &#183; {item.email}
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
            description={'아직 회원님이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default CustomerList;
